import express, { Router } from 'express';
import * as playtestController from '../controllers/playtest';

const playtest: Router = express.Router();

playtest.get('/playtests', playtestController.getPlaytests);

playtest.get('/playtests/:id', playtestController.getPlaytestByID);

playtest.post('/playtests', playtestController.createPlaytest);

playtest.delete('/playtests/:id', playtestController.deletePlaytest);

playtest.put('/playtests/:id', playtestController.updatePlaytest);

export default playtest;
