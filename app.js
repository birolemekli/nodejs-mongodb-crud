
var fs=require('fs');
var express=require('express');
var path=require('path');
var ejsLayout=require('express-ejs-layouts');
var bodyparser=require('body-parser');
var bcrypt=require('bcryptjs');
var db=require('./app_server/models/db');
var app=express();

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'./app_server/views'));


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(ejsLayout);
// Kullanıcıya public klasörüne erişim izni verilmesi 
app.use('/public',express.static(path.join(__dirname,'public')))

var routeLogin=require('./app_server/routes/LoginRoutes');
app.use('/login',routeLogin);


var routeHome=require('./app_server/routes/HomeRoute');
app.use('/',routeHome);

/* 
app.use(function(req,res,next){
    console.log('IP Adresi  : '+req.ip);
    console.log('Gelen İstek  : '+req.url);
    next();
}); */

app.listen(8000); 