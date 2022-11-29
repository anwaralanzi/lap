import express from 'express';

import {getallbooks,Addbooks}  from '../Controler/book.controler';
import validate from '../middlwehre/validate3';
import {getallbooksScemah} from "../zodschima/zodSchema"
const Router= express.Router();

// get all books
Router.get('./', getallbooks);

Router.post('./', Addbooks,validate(getallbooksScemah));

export default Router;