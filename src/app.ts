import express, { request, Request, response, Response } from "express";

import Teacher from "./Router/Teacher";
import Student from "./Router/Student";
import Classroom from './Router/Classroom';
import 'dotenv/config';
import loginregeser from './Router/login.regeser'
import { connectDB } from "./confing/db";

const app = express();
const port = process.env.port||5000;

connectDB();

app.use(express.json());

app.use("/api/v1/Teacher",Teacher)
app.use("/api/v1/Student",Student)
app.use("/api/v1/Class",Classroom)
app.use("/api/v1/user",loginregeser)

// hw

app.listen(port,()=>{
    console.log(` app listening at http://localhost:`+port);
 
})