import { RequestHandler, Request, Response } from 'express';
import Playtest from '../models/Playtest';

export const createPlaytest: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const newPlaytest = new Playtest(req.body);

  const savedPlaytest = await newPlaytest.save();
  res.json(savedPlaytest);
};

export const getPlaytests: RequestHandler = async (
  _req: Request,
  res: Response
) => {
  let playtests;

  try {
    playtests = await Playtest.find();
  } catch (err) {
    res.json(err);
  }

  return res.json(playtests);
};
