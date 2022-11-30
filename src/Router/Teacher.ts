import express from 'express';
import { Request,Response,NextFunction } from 'express';

import {getallTeacher,AddTeacher,getTeacherByIdHandler}  from '../Controler/Teacher.controler';
import validate from '../middlwehre/validate3';
import {getallTeacherScemah} from "../zodschima/zodSchema"
const Router= express.Router();

// get all Teachers
Router.get('/', getallTeacher);

Router.post('/', AddTeacher,validate(getallTeacherScemah));
Router.get('/', getTeacherByIdHandler),validate(getallTeacherScemah);

export default Router;