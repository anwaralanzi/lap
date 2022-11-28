import express from 'express';

import {getallbooks,Addbooks}  from '../Controler/book.controler';
const Router= express.Router();

// get all books
Router.get('./', getallbooks);

Router.post('./', Addbooks);

export default Router;