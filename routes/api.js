const express= require('express');

const router = express.Router();

const Categorie= require('../models/categorie');
var fs = require('fs'); 
  
// Open file demo.txt in read mode 

/**
 * @route(/)
 * 
 */

router.get('/', (req,res) => {
    res.send('front-end/build/index.html');

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
