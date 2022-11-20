import  express, { NextFunction, Request, Response }  from "express";
import { ITitle } from "./typs/Peaple";
let prompt = require('prompt');
prompt.start();

    const app = express();
    // const port = 5000;
    let title:ITitle[] = []
    app.use(express.json())

    title.push(
        {
        id:"1",
        title:"Tuwiq Manager",
        desccription:"super",
        status:true?"Done":"Not Done",
        deadline: 5+"_Houres"
    },{
        id:"2",
        title:"Javasecript Task Manager",
        desccription:"super",
        status:false?"Done":"Not Done",
        deadline: 8+"_Houres"
    },{
        id:"3",
        title:" GIT Task Manager",
        desccription:"super",
        status:true?"Done":"Not Done",
        deadline: 8+"_Houres"
    }
    );
 
    app.get('/',(req:Request,res:Response)=>{
        console.log(req.body)
          return  res.send(title);
         })

//          app.get('/Ititle/:title',(req,res)=>{
//             const {title}=req.params;
//             let z = title.toLowerCase() || title.toLowerCase() 
//             title.map((search:any)=>{
// return  search.title.toLowerCase()===z || search.title.toUpperCase()===z? res.json(search) : "Not Found"
                
//             })
//            })

           app.delete('/delete/:id',(req,res)=>{
            const { id } = req.params;
           const updateTodoList = title.filter((todo)=>{
            return todo.id !== id ;
           });
           title = updateTodoList;
           return res.json({
            message:"Todo Deleted"
           })
        })
        app.put("/put/:id",(req,res)=>{
            const updateTodo = req.body as ITitle;
            const { id } = req.params;
           const updateTodoList = title.filter((title)=>{
            return title.id !== id ;
           })
    
           updateTodoList.push(updateTodo)
           title = updateTodoList;
           return res.json({
            message:"Todo Update"
           })
        })
        app.post("/todo",(req:Request,res:Response)=>{
            const newTodo=req.body as ITitle;
            title.push(newTodo)
            res.json({
                message:"Todo added"
            })
        })
    



         app.listen(6000,()=>{
            console.log(`Example app listening at 6000 http://localhost:${6000}`);
         
        })
