import express from 'express';
import { AddUsers, getallUsers } from '../Controler/Users.controler';

 const Router= express.Router();

// get all books
Router.get('./', getallUsers);

Router.post('./', AddUsers);

export default Router;