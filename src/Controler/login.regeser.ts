import { user } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { prisma } from "../confing/db";
import * as argon2 from "argon2";
import { NextFunction, Request, Response } from "express";
import  jwt = require('jsonwebtoken');

export const login= async (req: Request, res:Response) => {
  const { username, password } = req.body as user;
  const user2 = await prisma.user.findUnique({
    where: { username },
  });
  if (!user2) {
    return res
      .status(400).json({
         message: "wrong username or password !" });
  }
  const isValidPassword = await argon2.verify(user2.password, password);
  if (!isValidPassword) {
    return res.status(400).json({
         message: "wrong username or password !" });
  }
  const token = jwt.sign({id: user2.id,role:user2.role},process.env.JWT_SECERT as string)
  
  return res.status(200).json({ 
    message: "Welcom back!",token})}

export const register = async (req: Request, res: Response) => {
  try {
    const newUser = req.body as user;

    const hashedPassword = await argon2.hash(newUser.password);
    newUser.password = hashedPassword;
    await prisma.user.create({
      data: newUser,
    });
    return res.status(201).json({
      message: 'Welcome ! , user added !',
    });
  } catch (error) {
    console.log(error);
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};
export const getAllUsers = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({
      message: prismaError.message,
    });
  }
};

export const AdminH = async (req: Request, res: Response) => {
  return res
    .status(200)
    .json({ message: 'Hi admin' + res.locals.user.id });
};

export const userH = async (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hey user' });
};