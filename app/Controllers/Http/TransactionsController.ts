import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaction from 'App/Models/Transaction'
import CreateTransaction from 'App/Validators/CreateTransactionValidator'
import UpdateProduct from 'App/Validators/UpdateProductValidator'

export default class TransactionsController {
  public async index({}: HttpContextContract) {
    return await Transaction.query().preload('product')
  }

  public async store({ request }: HttpContextContract) {
    return await Transaction.create(await request.validate(CreateTransaction))
  }

  public async show({ request }: HttpContextContract) {
    return await Transaction.query().preload('product').where('id', request.params().id).first()
  }

  public async update({ request }: HttpContextContract) {
    return await Transaction.query()
      .where('id', request.params().id)
      .update(await request.validate(UpdateProduct))
  }

  public async destroy({ request }: HttpContextContract) {
    return (await Transaction.findOrFail(request.params().id)).delete()
  }
}
