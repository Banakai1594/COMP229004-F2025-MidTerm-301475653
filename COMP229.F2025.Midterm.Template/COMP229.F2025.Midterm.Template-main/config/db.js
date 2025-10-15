require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://alihusham159_db_user:Ali.H2112!@cluster001.ghsl6ey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster001"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    })

    return mongodb;
}