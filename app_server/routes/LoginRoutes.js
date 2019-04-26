var express=require('express');

var route=express.Router();

var ctrlLogin=require('../controller/LoginController');

route.get('/',ctrlLogin.indexGet);
route.post('/',ctrlLogin.indexPost);
route.get('/signup',ctrlLogin.signupGet);
route.post('/signup',ctrlLogin.signupPost);
route.get('/kullanicilarListesi',ctrlLogin.kullanicilarListesi);
route.get('/kullaniciSil/:kullaniciAdi',ctrlLogin.kullaniciSil);
route.get('/kullaniciGuncelle/:id',ctrlLogin.kullaniciGuncelle);
route.post('/kullaniciGuncelle/:id',ctrlLogin.kullaniciGuncellePost);

module.exports=route;