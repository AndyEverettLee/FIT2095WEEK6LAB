let express = require("express");
let app = express();
let path = require("path");
let morgan = require("morgan");
app.use(morgan('tiny'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html'); 

app.use("/css",express.static(path-join(__dirname,"node_modules/bootstrap/dist/css")))
app.use("/js",express.static(path-join(__dirname,"node_modules/bootstrap/dist/js")))
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/';
let db; 

app.get('/',function(req,res){
res.send("lol hi");

});



app.listen(8080);

//sudo npm -g i nodemon 
