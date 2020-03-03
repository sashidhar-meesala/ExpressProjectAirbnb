const express = require('express')
const app = express()
const exphbs  = require('express-handlebars');
const model = require("./models/room");
require('dotenv').config({path:"./config/keys.env"});
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
  app.listen(port, host, function() {
    console.log("Server started.......");
  });