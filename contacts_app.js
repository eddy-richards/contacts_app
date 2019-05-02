let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let morgan = require('morgan');
let SERVER_CONFIG = require("./config/serverConfig")
let port = process.env.PORT || SERVER_CONFIG.PORT;
let cors = require('cors');
let dbConnection = require('./config/dbConnection')
let router = require('./router')

dbConnection.connect() //trigger database connection

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('public'));


router(app);
app.listen(port);
console.log('App is listening on port: ' + port);
console.log('http://localhost:' + port);
