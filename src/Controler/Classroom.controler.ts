import { prisma } from '.././confing/db';
import {Classroom } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';



import { NextFunction, Request, Response } from 'express';
import {
    getallClassSchemaType  ,  getallClassSchema

  } from '../zodschima/zodSchema';


export const getallClass = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        const classroom = await prisma.classroom.findMany()
        return res.status(200).json(classroom);

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server Error" });
    }
};

export const AddClass = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const addclassroom = req.body ;
        await prisma.classroom.create({
            data: addclassroom,
        });

        return res.status(201).json({ message: 'classroom Added !' });

    } catch (error) {

        const prismaError = error as PrismaClientKnownRequestError;
        if (prismaError.code == 'P2002') {
          return res.status(400).json({
            message: 'Your classroom have been used before',
          });
        }else{
        return res.status(500).json({
          message: 'Server Error !',
        });}
    }}


    export const getClassRoomByIdHandler = async (req: Request, res: Response) => {
        const { classroomid } = req.params ;
        const classroomById = await prisma.classroom.findMany({
          where: {
            id: classroomid,
          },
        });

        if (classroomById.length == 0) {
          return res.status(400).json({
            message: "classroomById is invalid",
          });
        }

        return res.status(200).json(classroomById);
      };