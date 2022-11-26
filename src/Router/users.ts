import express from 'express';
import validate from '../middlwehre/validate3';
import { prisma } from '../confing/db';
import{movie } from '@prisma/client';
import {getusersHandler,postusersHandler,updateusersHandler,deleteusersHandler,searchByidusersHandler,searchByemailusersHandler}from "../Controler/user.controler";
import {usersSChema,usersSChemaType} from "../zodschima/usersschema";
let router = express.Router();

let ride: usersSChemaType[] = [];
router.get('/', getusersHandler);
router.post('/', postusersHandler);

router.delete('/delete/:id', deleteusersHandler);
router.put('/put/:id', updateusersHandler);

router.get('/search/:id', searchByidusersHandler);


router.get('/search/:email', searchByemailusersHandler);


export default router;