import express, { request, Request, response, Response } from "express";

import book from "./Router/book";
import User from "./Router/User";
import loon from './Router/loon';
import 'dotenv/config';

const app = express();
const port = process.env.port||5000;

app.use(express.json());

app.use("/api/books",book)
app.use("/api/users",User)
app.use("/api/loon",loon)

// hw

app.listen(port,()=>{
    console.log(` app listening at http://localhost:`+port);
 
})