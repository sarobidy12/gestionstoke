const mongoose = require('mongoose');

const Model = mongoose.model;

const CategorieSchema={
    name:String
}

const Categorie = Model('Categorie',CategorieSchema);

module.exports = Categorie; 