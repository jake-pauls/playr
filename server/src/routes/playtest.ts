import express, { Router, Request, Response } from 'express';
import * as playtestController from '../controllers/playtest';

const playtest: Router = express.Router();

playtest.get('/playtests', playtestController.getPlaytests);

export default playtest;
