import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUser from 'App/Validators/CreateUserValidator'
import UpdateUser from 'App/Validators/UpdateUserValidator'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return await User.all()
  }

  public async store({ request }: HttpContextContract) {
    return await User.create(await request.validate(CreateUser))
  }

  public async show({ request }: HttpContextContract) {
    return await User.find(request.params().id)
  }

  public async update({ request }: HttpContextContract) {
    const user = await User.findOrFail(request.params().id)
    return await user.merge(await request.validate(UpdateUser)).save()
  }

  public async destroy({ request }: HttpContextContract) {
    return (await User.findOrFail(request.params().id)).delete()
  }
}
