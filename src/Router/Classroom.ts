import express from 'express';
import validate from '../middlwehre/validate3';

import {getallClass,AddClass,getClassRoomByIdHandler}from "../Controler/Classroom.controler"
import { getallClassSchema ,getallClassSchemaType} from '../zodschima/zodSchema';
 const Router= express.Router();

// get all books
Router.get('/', getallClass);

Router.post('/', AddClass,validate(getallClassSchema));
Router.get('/', getClassRoomByIdHandler),validate(getallClassSchema);

export default Router;