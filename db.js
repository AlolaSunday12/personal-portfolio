const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://femi:alolasj@cluster0.uq1r6xc.mongodb.net/mem_pro?retryWrites=true&w=majority';

mongoose.connect(mongoURL);

const connection = mongoose.connection;

connection.on('error', (error)=>{
    console.error('MongoDB connection failed:', error);
});

connection.on('connected', ()=>{
    console.log('MongoDB connection successful');
});

module.exports = mongoose;