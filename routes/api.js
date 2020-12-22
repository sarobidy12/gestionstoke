const express= require('express');

const router = express.Router();

const Categorie= require('../models/categorie');
const Marchandise= require('../models/marchandise');

/**
 * @route(/categorie)
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

/**
 * @route(/marchandise)
 * 
*/

router.get('/marchandise', (req,res) => {
    Marchandise.find({})
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.send(error);
    })
});


/**
 * @route(/find/marchandise)
 * 
*/

router.post('/find/marchandise', (req,res) => {

    Marchandise.find({type: { $regex: '.*' + req.body.data + '.*' }})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        res.send(error);
    })
});

module.exports= router;
