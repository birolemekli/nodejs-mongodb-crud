var mongoose=require('mongoose'),bcrypt=require('bcryptjs');



var Schema=mongoose.Schema;

var kullaniciSchema=new Schema({
    ad:String,
    soyad:String,
    email:String,
    kullaniciAdi:{type:String,required:true,unique:true},
    sifre:{type:String,required:true}

},{collection:'kullanicilar'});


var Kullanici=mongoose.model('Kullanici',kullaniciSchema);

module.exports=Kullanici;