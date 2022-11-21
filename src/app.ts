import express, { request, Request, response, Response } from "express";
import park from "./Router/park"


const app = express();
const port = 7000;

app.use(express.json());

app.use('/api/park',park);
        


app.listen(7000,()=>{
    console.log(" app listening at 7000 http://localhost:${port}");
 
})