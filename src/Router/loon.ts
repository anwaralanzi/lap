import express from 'express';
import validate from '../middlwehre/validate3';

import {getallLoons,Addloons}from "../Controler/loon.controler"
 const Router= express.Router();

// get all books
Router.get(`/`, getallLoons);

Router.post('./', Addloons);

export default Router;