import { RequestHandler, Request, Response } from 'express';
import User from '../models/User';
import Playtest from '../models/Playtest';

export const createPlaytest: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const newPlaytest = new Playtest(req.body);

  const savedPlaytest = await newPlaytest.save().then((_res) => {
    // Attach the playtest to it's User on creation
    User.findOne({ username: newPlaytest.username }, (_e: any, user: any) => {
      if (user) {
        user.playtests.push(newPlaytest);
        user.save();
      }
    });
  });
  res.json(savedPlaytest);
};

export const getPlaytestByID: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const playtestFound = await Playtest.findById(req.params.id);

  if (!playtestFound) return res.status(204).json();

  return res.json(playtestFound);
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

export const deletePlaytest: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const playtestFound = await Playtest.findByIdAndDelete(req.params.id);

  if (!playtestFound) return res.status(204).json();

  return res.status(204).json();
};

export const updatePlaytest: RequestHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const playtestUpdated = await Playtest.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (!playtestUpdated) return res.status(204).json();

  return res.json(playtestUpdated);
};
