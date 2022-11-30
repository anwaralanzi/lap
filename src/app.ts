import express, { request, Request, response, Response } from "express";

import Teacher from "./Router/Teacher";
import Student from "./Router/Student";
import Classroom from './Router/Classroom';
import 'dotenv/config';

const app = express();
const port = process.env.port||5000;

app.use(express.json());

app.use("/api/Teacher",Teacher)
app.use("/api/Student",Student)
app.use("/api/Class",Classroom)

// hw

app.listen(port,()=>{
    console.log(` app listening at http://localhost:`+port);
 
})