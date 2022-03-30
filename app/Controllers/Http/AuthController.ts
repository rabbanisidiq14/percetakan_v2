import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    // request data email dan password admin/user, generate token, response nya adalah token disimpan

    const email = request.input('email')
    const password = request.input('password')

    // Lookup user manually
    const user = await User.query().where('email', email).firstOrFail()

    // Verify password
    if (!(await Hash.verify(user.password, password))) {
      return response.badRequest('Invalid credentials')
    }

    // Generate token
    const token = await auth.use('api').generate(user, {
      expiresIn: '1days',
    })

    return token
  }
  public async logout({ auth }: HttpContextContract) {
    // request id, dan token atau token saja. response bantai token dan redirect ke halaman login/index

    await auth.use('api').revoke()
    return {
      revoked: true,
    }
  }
}
