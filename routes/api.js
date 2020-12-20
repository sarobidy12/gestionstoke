const express= require('express');

const router = express.Router();

const Categorie= require('../models/categorie');

/**
 * @route(/)
 * 
 */

router.get('/', (req,res) => {
    res.send('App Works !!!!');
});

/**
 * @route(/categorie/add)
 * 
 */

router.get('/categorie', (req,res) => {
    Categorie.find({})
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.send(error);
    })
});

module.exports= router;
