import { User } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { prisma } from "../confing/db";
import * as argon2 from "argon2";
import { NextFunction, Request, Response } from "express";

export const login= async (req: Request, res:Response) => {
  const { username, password } = req.body as User;
  const user = await prisma.user.findUnique({
    where: { username },
  });
  if (!user) {
    return res
      .status(400).json({
         message: "wrong username or password !" });
  }
  const isValidPassword = await argon2.verify(user.password, password);
  if (!isValidPassword) {
    return res.status(400).json({
         message: "wrong username or password !" });
  }
  
  return res.status(200).json({ message: "Welcom back!" });
};

export const register = async (req: Request, res: Response) => {
  try {
    const newUser = req.body as User;
    const hashPassword = await argon2.hash(newUser.password);
    newUser.password = hashPassword;
    await prisma.user.create({
      data: newUser,
    });
    return res.status(200).json({ message: "Welcom!!" });
  } catch (error) {
    console.log(error);
    const prismaError = error as PrismaClientKnownRequestError;
    return res.status(400).json({ message: prismaError.message });
  }
};
export const getAllUsers = async (req: Request, res: Response,next:NextFunction) => {
  const allusers = await prisma.user.findMany();
  res.status(200).json(allusers);
};