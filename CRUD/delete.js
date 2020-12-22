const express= require('express');

const router = express.Router();

const Categorie= require('../models/categorie');
const Marchandise= require('../models/marchandise');
 
/**
* 
* delete categorie 
* 
*/

router.post('/categorie', (req,res) => {

    Categorie.deleteOne({ _id: req.body.data }, function (err) {
        if(err){
            res.send(err)
        }else{
            res.send('delete categorie successfull')
        }
      });

})

/**
* 
* delete categorie 
* 
*/

router.post('/marchandise', (req,res) => {

    Marchandise.deleteOne({ _id: req.body.data }, function (err) {
        if(err){
            res.send(err)
        }else{
            res.send('delete marchandise successfull')
        }
      });

})

module.exports= router;
