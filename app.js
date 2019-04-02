var express = require('express'),

    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    app = express();
    


app.engine('dust',cons.dust);

//Set default Ext .dust
 app.set('view engine','dust');
 app.set('views', __dirname + '/views');

 //set public folder
 app.use(express.static(path.join(__dirname, 'public'
)));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Server
app.listen(3000,function(){
    console.log('Server Started On Port 3000');
});
