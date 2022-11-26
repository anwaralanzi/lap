import { NextFunction, Request, Response } from 'express';
import validate from '../middlwehre/validate3';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

import { prisma } from '../confing/db';
import{users } from '@prisma/client';
// import  { Role } from '@prisma/client';

import {
    usersSChema,
    usersSChemaType,
} from '../zodschima/usersschema';

export const getusersHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      try {
          const users = await prisma.users.findMany()
          return res.status(200).json(users);
  
      } catch (error) {
          console.log(error);
          return res.status(500).json({message: "Server Error" });
      }
  };
  export const postusersHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const newusers = req.body as users;
        await prisma.users.create({
            data: newusers,
        });
        return res.status(201).json({ message: 'user Added !' });

    } catch (error) {

        const prismaError = error as PrismaClientKnownRequestError;
        if (prismaError.code == 'P2002') {
          return res.status(400).json({
            message: 'Your name  have been used before',
          });
        }else{
        return res.status(500).json({
          message: 'Server Error !',
        });}
    }}
     
export const updateusersHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
try {

    let updatedMovie= req.body as users; ;
    const { id } = req.params;

     await prisma.users.update({
        where: {id} ,
        data: updatedMovie,
     })
    return res.json({
      message: 'user updated !',
    });
} catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    if (prismaError.code == 'P2002') {
        return res.status(400).json({
          message: 'Your name  have been used before',
        });
      }
      return res.status(500).json({
        message: 'Server Error !',
      });

 
}}

export const deleteusersHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
    const { id } = req.params;

await prisma.users.delete ({
    where:{id},
});
    return res.json({
        message: 'users deleted !',
      });
        
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error !',
          }); 
    }
  }


  export const searchByidusersHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

  try {
    const { id } = req.params;

    const usersbyid = await prisma.users.findMany({
where:{
    // genre: Role[genre as keyof typeof Role]
    }
    });
    return res.json({
        usersbyid
    });
  } catch (error) {
      return res.status(500).json({ message: 'Server Error !' });      
  }
}

  export const searchByemailusersHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
  const email  = req.params.email;
  const emailby = await prisma.users.findFirst({
    where:{email},
  });
  return res.json({
    email
  });
} catch (error) {
    return res.status(500).json({ message: 'Server Error !' });      
}
 
  }

//   export const searchByageuserHandler = async(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
    
//     try {

//         const ageby = req.params.age;
//   const userByage = await prisma.users.findMany({
//     where: {ageby} as unknown as usersSChemaType,
//   });
//   return res.json({
//       userByage
//   });
// } catch (error) {
//     return res.status(500).json({
//         message: 'Server Error !' });      
// }
 
//   }export const searchByageuserHandler = async(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
    
//     try {

//         const ageby = req.params.age;
//   const userByage = await prisma.users.findMany({
//     where: {ageby} as unknown as usersSChemaType,
//   });
//   return res.json({
//       userByage
//   });
// } catch (error) {
//     return res.status(500).json({
//         message: 'Server Error !' });      
// }
 
//   }