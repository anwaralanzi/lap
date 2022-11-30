import express from 'express';
import { AddStudent, getallStudent,getStudentByIdHandler } from '../Controler/Student.controler';
import validate from '../middlwehre/validate3';
import { getallStudentScemah } from '../zodschima/zodSchema';

 const Router= express.Router();

// get all books
Router.get('/', getallStudent);

Router.post('/', AddStudent),validate(getallStudentScemah);
Router.get('/', getStudentByIdHandler),validate(getallStudentScemah);

export default Router;