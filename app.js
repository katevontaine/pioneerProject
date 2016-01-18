var Pioneer = require('./pioneer');
var routes = require ('./routes');
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser')
var port = process.env.PORT || 3001;


// pioneer.setName('Marina A');
// pioneer.setField('Art');
// pioneer.setSubField('Performance Art');
// pioneer.setImageLink('https://upload.wikimedia.org/wikipedia/commons/9/9b/Marina_Abramovi%C4%87_-_The_Artist_Is_Present_-_Viennale_2012.jpg');
// pioneer.setDescription('She is a bad ass.');
// console.log(pioneer.getInfo());

var app = express();

app.set(port);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
// app.use(methodOverride());
// app.use(session({ resave: true,
//                   saveUninitialized: true,
//                   secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer());
app.use(express.static(path.join(__dirname, 'app4')));


app.get('/pioneer', routes.pioneers);
app.get('/pioneer/:name', routes.pioneer);
// app.get('/allpioneers', routes.allPioneers);
// app.get('/pioneer/:number', routes.pioneer)


app.listen(port, function() {
  console.log('APP LISTENING ON PORT: ', port);
});







//
