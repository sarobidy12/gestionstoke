const express= require('express');

const router = express.Router();

const Categorie= require('../models/categorie');
const Marchandise= require('../models/marchandise');

/**
 * 
 * update marchandise 
 * 
 */

router.post('/marchandise', (req,res) => {

    Marchandise.update({_id:req.body.id},{quantite:req.body.data },(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send('Update marchandise successfull')
        }
    });

})

module.exports= router;
