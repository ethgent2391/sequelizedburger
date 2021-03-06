var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static(process.cwd() + "/public"));


app.use(bodyParser.urlencoded({ extended: false }));


app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require('./controllers/controller.js');
app.use('/', routes);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().PORT, app.settings.env);
});