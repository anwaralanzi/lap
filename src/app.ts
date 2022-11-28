import express, { request, Request, response, Response } from "express";

import book from "./Router/book";
import User from "./Router/User";

const app = express();
const port = process.env.port||5000;

app.use(express.json());

app.use("/api/books",book)
app.use("/api/users",User)

// hw

app.listen(port,()=>{
    console.log(` app listening at http://localhost:`+port);
 
})