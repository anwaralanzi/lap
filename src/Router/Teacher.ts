import express  from "express";
import { addTeacherHandler, getTeacherHandler ,getTeacherByIdHandler} from "../Controler/Teacher.controler";
import validate from "../middlwehre/validate3";
import { addTeacherSchema, getTeacherSchema } from "../zodschima/zodSchema";


const routerTeacher = express.Router();

routerTeacher.get("/",getTeacherHandler)
routerTeacher.post("/",validate(addTeacherSchema),addTeacherHandler)
routerTeacher.get("/:id",validate(getTeacherSchema),getTeacherByIdHandler)

export default routerTeacher