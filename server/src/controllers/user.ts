import { RequestHandler, Request, Response } from 'express';
import User from '../models/User';

export const createUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const newUser = new User(req.body);

  const savedUser = await newUser.save();
  res.json(savedUser);
};

export const getUserById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const userFound = await User.findById(req.params.id).populate('playtests');

  if (!userFound) return res.status(204).json();

  return res.json(userFound);
};

export const getUsers: RequestHandler = async (
  _req: Request,
  res: Response
) => {
  let users;

  try {
    users = await User.find();
  } catch (err) {
    res.json(err);
  }

  return res.json(users);
};

export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const userFound = await User.findByIdAndDelete(req.params.id);

  if (!userFound) return res.status(204).json();

  return res.status(204).json();
};

export const updateUser: RequestHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!userUpdated) return res.status(204).json();

  return res.json(userUpdated);
};
