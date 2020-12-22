const express= require('express');

const router = express.Router();

const Categorie= require('../models/categorie');
const Marchandise= require('../models/marchandise');
 
/**
 * 
 * add categorie 
 * 
 */

router.post('/categorie', (req,res) => {

    const Data= new Categorie({
        name:req.body.data
    });

    Data.save((err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send('save categorie successfull')
        }
    });

})

/**
 * 
 * add marchandise 
 * 
 */

router.post('/marchandise', (req,res) => {

    const Data= new Marchandise({
        type:req.body.type,
        categorie:req.body.categorie,
        quantite:req.body.quantite
    });

    Data.save((err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send('save marchandise successfull')
        }
    });

})

module.exports= router;
