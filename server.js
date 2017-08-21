

var expr = require('express');
var apps = expr();
// apps.listen(5000, function(){
//     console.log('Server is listening on port 5000 and ready to accept request :-)');
// });

var exhandle = require('express-handlebars');
app.engine('handlebars', exhandle({ defaultLayout: 'main' }));
apps.set('view engine', 'handlebars');

//apps.use(expr.static('public'));

apps.use(express.static("public", {'extensions': ['html']}));


// what does this line mean: process.env.PORT || 3000
apps.listen(process.env.PORT || 5000, function () {
  console.log("Server is listening on port 5000. Ready to accept requests!");
});