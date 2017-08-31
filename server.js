

var express = require('express');
var app = express();
// apps.listen(5000, function(){
//     console.log('Server is listening on port 5000 and ready to accept request :-)');
// });

var exhandle = require('express-handlebars');
app.engine('handlebars', exhandle({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//apps.use(expr.static('public'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/about',  function(req,res){
  res.render('about', { title: 'ABOUT'});
});

app.get('/contact', function(req,res){
  res.render('contact');
});

app.get('/experience', function(req,res){
  res.render('experience');
});

app.get('/home', function(req,res){
  res.render('home');
});

app.get('/git', function(req,res){
  res.render('git',function(element){
    // repos: element.name[0];
  });
});

app.use(express.static("public", {'extensions': ['html']}));
 

// what does this line mean: process.env.PORT || 3000
app.listen(process.env.PORT || 5000, function () {
  console.log("Server is listening on port 5000. Ready to accept requests!");
});

var api =  'https://api.github.com/users/vijith46/repos'
var fetch = require('node-fetch');
//var gitrepos = [];

fetch(api)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
      json.forEach(function(element) {
        console.log(element.name);
        //gitrepos = JSON.stringify(element.name);
        //console.log(gitrepos);
        //return gitrepos;
      }, this);
      console.log(json);
    });






