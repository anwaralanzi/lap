import { prisma } from '.././confing/db';
import {Teacher } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';



import { NextFunction, Request, Response } from 'express';
import {
    getallTeacherScemahType,    getallTeacherScemah,

  } from '../zodschima/zodSchema';


export const getallTeacher = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        const teacher = await prisma.teacher.findMany()
        return res.status(200).json(teacher);

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server Error" });
    }
};

export const AddTeacher = async (
    req: Request,
    res: Response,
    next: NextFunction ) => {
    try {
        const addTeacher = req.body ;
        await prisma.teacher.create({
            data: addTeacher,
        });

        return res.status(201).json({ message: 'Teacher Added !' });

    } catch (error) {

        const prismaError = error as PrismaClientKnownRequestError;
        if (prismaError.code == 'P2002') {
          return res.status(400).json({
            message: 'Teacher have been used before',
          });
        }else{
        return res.status(500).json({
          message: 'Server Error !',
        });}
    }}


    export const getTeacherByIdHandler = async (req: Request, res: Response) => {
        const { teacherid } = req.params ;
        const teacherById = await prisma.teacher.findMany({
          where: {
            id: teacherid,
          },
        });

        if (teacherById.length == 0) {
          return res.status(400).json({
            message: "teacherid is invalid",
          });
        }

        return res.status(200).json(teacherById);
      };