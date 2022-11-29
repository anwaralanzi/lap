import express from 'express';
import { AddUsers, getallUsers } from '../Controler/Users.controler';
import validate from '../middlwehre/validate3';
import { getalUsersScemah } from '../zodschima/zodSchema';

 const Router= express.Router();

// get all books
Router.get('/', getallUsers);

Router.post('/', AddUsers),validate(getalUsersScemah);

export default Router;