const mongoose = require('mongoose');
const moment = require('moment');
const SERVER_CONFIG = require('./serverConfig')
const local = SERVER_CONFIG.LOCAL_HOST
const staging = SERVER_CONFIG.SERVER_HOST
const mongoURL =   SERVER_CONFIG.IS_LIVE ? staging : local
const dbname = SERVER_CONFIG.DB_NAME

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    poolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  };
const mongodbUri = 'mongodb://'+mongoURL+dbname;

exports.connect= ()=>{
    mongoose.connect(mongodbUri, options);
    let conn = mongoose.connection;

    conn.on('disconnected', function() {
        console.log('MongoDB disconnected!', moment().format('YYYY-MM-DD hh:mm'));
        setTimeout(function(){
            mongoose.connect(mongodbUri);
        }, 3000);
    });

    conn.on('error', function(error) {
        console.error('Error in MongoDb connection: ' + error);
        mongoose.disconnect();
    });

    conn.on('connected', function(){
        console.log('connected with mongodb');
    });

    conn.once('open', function() {
        // Wait for the database connection to establish, then start the app.
    });
}