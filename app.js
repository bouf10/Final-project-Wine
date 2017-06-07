var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.use(express.static('files'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);