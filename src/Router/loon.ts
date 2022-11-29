import express from 'express';
import validate from '../middlwehre/validate3';

import {getallLoons,Addloons}from "../Controler/loon.controler"
import { getallLoonsSchema } from '../zodschima/zodSchema';
 const Router= express.Router();

// get all books
Router.get(`/`, getallLoons);

Router.post('./', Addloons,validate(getallLoonsSchema));

export default Router;