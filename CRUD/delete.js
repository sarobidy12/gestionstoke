const express= require('express');

const router = express.Router();

const Categorie= require('../models/categorie');
 
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
            res.send('save categorie successfull')
        }
      });

})

module.exports= router;
