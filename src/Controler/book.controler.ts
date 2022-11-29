// import { Books } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import {prisma} from '../confing/db'
export const getallbooks=(res:Response,req:Request)=>{
    try{
    const book= prisma.books.findMany();
    res.status(200).json(book);
    } catch(error){
        return res.status(500).json({massage:"server error"})
    }

}
export const Addbooks=async(res:Response,req:Request)=>{
    try{
        prisma
        const newbook = req.body;
        await prisma.books.create
        res.status(200).json(newbook);
        } catch(error){
            return res.status(500).json({massage:"server error"})
        }
    res.end();
    }
   