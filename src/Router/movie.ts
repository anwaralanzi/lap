import express from 'express';
import validate from '../middlwehre/validate3';
import { prisma } from '../confing/db';
import{movie } from '@prisma/client';
import {getmoviesHandler ,postMovieHandler ,deleteMovieHandler,updateMovieHandler,searchByGenreMovieHandler,searchByNameMovieHandler} from "../Controler/movie.cntroler";


import {
  movieSChema,
  movieSChemaType,
} from '../zodschima/movieSChema';

let router = express.Router();

let ride: movieSChemaType[] = [];

router.get('/', getmoviesHandler);
router.post('/post', postMovieHandler);

router.delete('/delete/:id', deleteMovieHandler);
router.put('/put/:id', updateMovieHandler);

router.get('/search/:name', searchByNameMovieHandler);



  
    



 
router.all('/api/all',(req ,res)=>{
    return res.sendStatus(200);
})

  



export default router;