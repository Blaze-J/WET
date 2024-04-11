/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import RolesController from '#controllers/roles_controller'
import UsersController from '#controllers/users_controller'
import FacultiesController from '#controllers/faculties_controller'
import ContributionsController from '#controllers/contributions_controller'
import DeadlinesController from '#controllers/deadlines_controller'
import SubmmissionsController from '#controllers/submmissions_controller'
import CommentsController from '#controllers/comments_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.group(() => {
  router.group(() => {
    router.post('/login', [AuthController, 'Login'])
    router.post('/register', [AuthController, 'Register'])
    router.get('/profile', [AuthController, 'Profile']).use([middleware.auth()])
  }).prefix('/auth')
  router.group(() => {
    router.get('/', [RolesController, 'Get'])
  }).prefix('/role')
  router.group(() => {
    router.get('/', [UsersController, 'Get'])
    router.get('/mc', [UsersController, 'Getmc'])
    router.get('/:id', [UsersController, 'GetById'])
    router.post('/', [UsersController, 'Post'])
    router.put('/', [UsersController, 'Put'])
    router.delete('/:id', [UsersController, 'Delete'])
  }).prefix('/user')
  router.group(() => {
    router.get('/', [FacultiesController, 'Get'])
    router.get('/:id', [FacultiesController, 'GetById'])
    router.post('/', [FacultiesController, 'Post'])
    router.put('/', [FacultiesController, 'Put'])
    router.delete('/:id', [FacultiesController, 'Delete'])
  }).prefix('/faculty')
  router.group(() => {
    router.get('/', [DeadlinesController, 'Get'])
    router.get('/:id', [DeadlinesController, 'GetById'])
    router.post('/', [DeadlinesController, 'Post'])
    // router.put('/', [DeadlinesController, 'Put'])
    router.delete('/:id', [DeadlinesController, 'Delete'])
  }).prefix('/deadline')
  router.group(() => {
    router.get('/', [SubmmissionsController, 'Get'])
    router.get('/getbydeadline/:id', [SubmmissionsController, 'GetByDeadlineId'])
    router.get('/:id', [SubmmissionsController, 'GetById'])

    router.post('/', [SubmmissionsController, 'Post']).use([middleware.auth()])


    // router.put('/', [SubmmissionsController, 'Put'])
    router.delete('/:id', [SubmmissionsController, 'Delete'])
  }).prefix('/submission')
  router.group(() => {
    router.get('/', [ContributionsController, 'Get'])
    router.get('/download/:id', [ContributionsController, 'DownloadFile'])
    router.get('/student/:id', [ContributionsController, 'GetByStudent']).use([middleware.auth()])
    router.get('/:id', [ContributionsController, 'GetById'])
   
    router.post('/', [ContributionsController, 'Post'])
    // router.put('/', [FacultiesController, 'Put'])
    router.delete('/:id', [ContributionsController, 'Delete'])
  }).prefix('/contribution')
  router.group(() => {
    router.get('/', [CommentsController, 'Get'])
    router.get('/:id', [CommentsController, 'GetById'])

    router.post('/', [CommentsController, 'Post']).use([middleware.auth()])
    router.put('/:id', [CommentsController, 'Put']).use([middleware.auth()])
    router.delete('/:id', [CommentsController, 'Delete'])
  }).prefix('/comment')


}).prefix('/api')
