import express, { Router } from 'express';
import * as userController from '../controllers/user';

const user: Router = express.Router();

user.get('/users', userController.getUsers);

user.get('/users/:id', userController.getUserById);

user.post('/users', userController.createUser);

user.delete('/users/:id', userController.deleteUser);

user.put('/users/:id', userController.updateUser);

export default user;
