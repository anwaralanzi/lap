import express, { request, Request, response, Response } from "express";
import { IGread, IPeople } from "./typs/Peaple";

const app = express();
const port = 5000;

const pepale :IPeople[]=[];
let pepoleArr: IPeople[] = [
    { id: "1", name: "ANWAR" },
    { id: "2", name: "NAWAF" },
    { id: "3", name: "MAJED" },
    { id: "4", name: "RYIF" },
  ];

  let gredeArr: IGread [] = [
    { name: "ANWAR", graed: "A+" },
    { name: "NAWAF", graed: "b+" },
    { name: "MAJED", graed: "F" },
    { name: "RYIF", graed: "F" },
  ];
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get ("/pepole",(req:Request ,res:Response)=>{
return res.json(pepoleArr);
});

app.get ("/gread",(req:Request ,res:Response)=>{
    return res.json(gredeArr);
    });

    app.post ("/pepole",(req:Request,res:Response)=>{
const newPepole = req.body as IPeople;
pepoleArr.push(newPepole);
return res.json({
    message:"pepole added successfully"
})});
app.post ("/gread",(req:Request,res:Response)=>{
    const newGrade = req.body as IGread;
    gredeArr.push(newGrade);
    return res.json({
        message:"gread added successfully"
    })});

    app.put("/update/:id",(req,res)=>{
        const update = req.body as IPeople;
        let Pid = req.params.id;
        for (let i=0; i<pepoleArr.length; i++){
            if(pepoleArr[i].id == Pid){
              pepoleArr[i]=update
            }
          }
          return res.json({
            message: 'Name updated :)',
          });
        });

        // gread put
        app.put("/update/:gread",(req,res)=>{
            const update = req.body as IGread;
            let Pid = req.params.gread;
            for (let i=0; i<pepoleArr.length; i++){
                if(gredeArr[i].graed == Pid){
                  gredeArr[i]=update
                }
              }
              return res.json({
                message: 'Name updated :)',
              });
            });


            app.delete('/delet/:id', (req, res) => {
                const delet = req.body as IPeople;

                const pID = req.params.id;
                for (let i=0; i<pepoleArr.length; i++){
                  if(pepoleArr[i].id==pID){
                    pepoleArr.splice(i, 1);
                  }
                }
                return res.json({
                  message: 'Name deleted :)'
                })
              });
              
        

app.all('/api/all',(req:Request ,res:Response)=>{
    return res.sendStatus(200);
});
app.listen(5000,()=>{
    console.log("Example app listening at http://localhost:${port}");
 
})