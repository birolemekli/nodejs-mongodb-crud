var express=require('express');
var route=express.Router();

var ctrlHome=require('../controller/HomeController');

route.get('/',ctrlHome.index);

module.exports=route;