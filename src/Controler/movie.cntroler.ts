import { NextFunction, Request, Response } from 'express';
import validate from '../middlwehre/validate3';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

import { prisma } from '../confing/db';
import{movie } from '@prisma/client';
// import  { Role } from '@prisma/client';

import {
  movieSChema,
  movieSChemaType,
} from '../zodschima/movieSChema';

export const getmoviesHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
      try {
          const movies = await prisma.movie.findMany()
          return res.status(200).json(movies);
  
      } catch (error) {
          console.log(error);
          return res.status(500).json({message: "Server Error" });
      }
  };
  export const postMovieHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
        const newMovie = req.body as movie;
        await prisma.movie.create({
            data: newMovie,
        });
       
        return res.status(201).json({ message: 'Movie Added !' });

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
     
export const updateMovieHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
try {

    let updatedMovie= req.body as movie; ;
    const { id } = req.params;

     await prisma.movie.update({
        where: {id} ,
        data: updatedMovie,
     })
    return res.json({
      message: 'Movie updated !',
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

export const deleteMovieHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
    const { id } = req.params;

await prisma.movie.delete ({
    where:{id},
});
    return res.json({
        message: 'Movie deleted !',
      });
        
    } catch (error) {
        return res.status(500).json({
            message: 'Server Error !',
          }); 
    }
  }


  export const searchByGenreMovieHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

  try {
    const { genre } = req.params;

    const movieByGenre = await prisma.movie.findMany({
where:{
    // genre: Role[genre as keyof typeof Role]
    }
    });
    return res.json({
        movieByGenre
    });
  } catch (error) {
      return res.status(500).json({ message: 'Server Error !' });      
  }
}

  export const searchByNameMovieHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
  const name  = req.params.name;
  const movieName = await prisma.movie.findFirst({
    where:{name},
  });
  return res.json({
      movieName
  });
} catch (error) {
    return res.status(500).json({ message: 'Server Error !' });      
}
 
  }

  export const searchByRateMovieHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    
    try {

        const rating = req.params.rating;
  const movieByRate = await prisma.movie.findMany({
    where: {rating} as unknown as movieSChemaType,
  });
  return res.json({
      movieByRate
  });
} catch (error) {
    return res.status(500).json({
        message: 'Server Error !' });      
}
 
  }