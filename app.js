var pioneer = require('./pioneer');
var routes = require ('./routes');
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser')
var app = connect();


// pioneer.setName('Marina A');
// pioneer.setField('Art');
// pioneer.setSubField('Performance Art');
// pioneer.setImageLink('https://upload.wikimedia.org/wikipedia/commons/9/9b/Marina_Abramovi%C4%87_-_The_Artist_Is_Present_-_Viennale_2012.jpg');
// pioneer.setDescription('She is a bad ass.');
// console.log(pioneer.getInfo());

var app = express();

app.set('port', 3000);
app.set("views", __dirname + '/views');
app.set('view engine', 'jade');

app.use(connect.serve-favicon());


app.use(connect.morgan('dev'));


app.use(connect.body-parser());
//app.use(bodyParser.urlencoded())


app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(pioneerProject, 'public')));

app.get('/pioneer', routes.pioneer);
app.get('/pioneer/:name', routes.pioneer);

if('development' == app.get('env')){
  app.use(express.errorHandler());

}

//app.get('/pioneers', routes.pioneers);
//app.get('/pioneer/:number', routes.pioneer)

http.createServer(app).listen(app.get('port')), function(){
  console.log('Express server listening on port' + 'port');
};
