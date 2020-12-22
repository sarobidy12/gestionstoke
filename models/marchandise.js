const mongoose = require('mongoose');

const Model = mongoose.model;

const MarchandiseSchema={
    type:String,
    categorie:String,
    quantite:Number
}

const Marchandise = Model('Marchandise',MarchandiseSchema);

module.exports = Marchandise; 