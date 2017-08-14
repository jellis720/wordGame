const express = require('express');
const session = require('express-session');
const validator = require('express-validator');
const handleBars = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const fs = require('fs');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");
const app = express();

app.engine('handlebars', handleBars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

const routes = require('./routes');

app.use(express.static('public'));

app.use(
  session({
    secret: 'asdlgkjpeoiwtu3',
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/', routes);

app.listen(3000, function(){
  console.log("running")
});
