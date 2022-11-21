import express from 'express';
import validate from '../middlwehre/validate';


import {
  parkSchema,
  parkSchemaType,
} from '../zodschima/parkSchema';

let router = express.Router();

let ride: parkSchemaType[] = [];

router.get('/', ( req, res, next ) => {
  return res.json(ride);
});

router.post('/post', validate(parkSchema), (req, res, next) => {
  let newride = req.body as parkSchemaType;

  ride.push(newride);
  return res.status(201).json({ message: 'new park is Added !' });
 
 

  });



  router.put('/put/:id', (req,res) => {
    let updatedRide= req.body as parkSchemaType ;
    const { id } = req.params;
  
    let updatedRideList:parkSchemaType[]= ride.filter((Aid) => {
      return Aid.id !== id;
    });
  
    updatedRideList.push(updatedRide);
  
    ride = updatedRideList;
  
    return res.json({
      message: 'ride updated !',
    });
  });
  
  
  router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
  
    const newRideList = ride.filter((rr) => {
      return rr.id !== id;
    });
  
    ride = newRideList;
  
    return res.json({
      message: 'Ride deleted !',
    });
})

  



export default router;