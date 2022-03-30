import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import CreateProduct from 'App/Validators/CreateProductValidator'
import UpdateProduct from 'App/Validators/UpdateProductValidator'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    return await Product.all()
  }

  public async store({ request }: HttpContextContract) {
    return await Product.create(await request.validate(CreateProduct))
  }

  public async show({ request }: HttpContextContract) {
    return await Product.findOrFail(request.params().id)
  }

  public async update({ request }: HttpContextContract) {
    return await Product.query()
      .where('id', request.params().id)
      .update(await request.validate(UpdateProduct))
  }

  public async destroy({ request }: HttpContextContract) {
    return (await Product.findOrFail(request.params().id)).delete()
  }
}
