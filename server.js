const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

//Les routes 
const route = require('./routes/api');
const add = require('./CRUD/add');
const deleteC = require('./CRUD/delete');

const app = express(),
      PORT = process.env.PORT || 8080;

const MONGO_URI ="mongodb+srv://MACBOOK34165151:MACBOOK34165151@cluster0.vmzqq.mongodb.net/gestionstokeDB?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/gestionstokeDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
});
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('tiny'));

app.use('/',route);
app.use('/add',add);
app.use('/delete',deleteC);

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('front-end/build'));


}

app.listen(PORT, () => {
    console.log(`Server listening on the PORT::${PORT}`);
});