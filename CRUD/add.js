const express= require('express');

const router = express.Router();

const Categorie= require('../models/categorie');
 
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

module.exports= router;
