const { response } = require("express");
const path = require("path");
const hbs = require("hbs");
const express = require("express");


const app = express();

// public static path
const static_path = path.join(__dirname, '../public');
const templates_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);


app.use(express.static(static_path));




// routing
app.get("/", function(req, res){
  res.render("index");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/weather", function(req, res){
  res.render("weather");
});

app.get("*", function(req,res){
    res.render("404error",{
      errormsg: 'Opps! Page Not Found'
    });
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});