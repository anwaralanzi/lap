import express, { request, Request, response, Response } from "express";
// import student from './Router/student'

const app = express();
const port = 8000;

app.use(express.json());

// app.use('/api/student',student);
        

app.listen(8000,()=>{
    console.log(" app listening at 8000 http://localhost:${port}");
 
})