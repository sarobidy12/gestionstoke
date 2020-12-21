const express= require('express');

const router = express.Router();

const Categorie= require('../models/categorie');

// Open file demo.txt in read mode 

/**
 * @route(/)
 * 
*/
 


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
