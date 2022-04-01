/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/
import Route from '@ioc:Adonis/Core/Route'
import AuthController from 'App/Controllers/Http/AuthController'

Route.group(() => {
  Route.resource('users', 'UsersController')
  Route.resource('products', 'ProductsController')
  Route.resource('transactions', 'TransactionsController')
}).prefix('api/private/v1')
// .middleware('auth') // Dengan Auth

Route.group(() => {
  Route.get('products', 'ProductsController.index')
  Route.get('products/:id', 'ProductsController.show')
  Route.get('transactions', 'TransactionsController.show')
  Route.post('transactions', 'TransactionsController.store')
  Route.put('transactions', 'TransactionsController.update')
}).prefix('api/public/v1') // Tanpa Auth

Route.post('login', async (ctx) => {
  return new AuthController().login(ctx)
})
Route.post('logout', async (ctx) => {
  return new AuthController().logout(ctx)
})
Route.get('/*', async ({ view }) => {
  return view.render('home')
})
