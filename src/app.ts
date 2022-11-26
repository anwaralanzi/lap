import express, { request, Request, response, Response } from "express";
import movie from "./Router/movie"
import users from "./Router/users"

const app = express();
const port = 7000;

app.use(express.json());

app.use('/api/movie',movie);
app.use('/api/users',users);



app.listen(port,()=>{
    console.log(` app listening at http://localhost:${port}`);
 
})