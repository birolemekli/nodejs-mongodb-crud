var Kullanici=require('../models/kullanici');

//### Login Yönlendirme
module.exports.indexGet=function(req,res){
    res.render('login');
}

module.exports.indexPost=function(req,res){
    res.render('login');
    console.log(req.body.username,req.body.password);
}

//### Kayıt Ol Yönlendirme

module.exports.signupGet=function(req,res){
    res.render('signup');
}

module.exports.signupPost=function(req,res){
    var yeniKullanici=new Kullanici({
        ad:req.body.ad,
        soyad:req.body.soyad,
        email:req.body.email,
        kullaniciAdi:req.body.kullaniciadi,
        sifre:req.body.sifre
    });
    yeniKullanici.save(function(err){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.redirect('/login/kullanicilarListesi')
        }
    });  
}

//### Listelemee İşlemi
module.exports.kullanicilarListesi=function(req,res){
    Kullanici.find(function(err,result){
        if(err)
        {
            console.log('kullanicilarListesi');
        }
        else{
            res.render('kullanicilarListesi',{kullanicilar:result});
        }
    });
}

//### Silme İşlemi
module.exports.kullaniciSil=function(req,res){
    Kullanici.findOneAndRemove({kullaniciAdi:req.params.kullaniciAdi},function(err){
        if(err){
            console.log("Silmede hata");
        }
        else
        {
            res.redirect('/login/kullanicilarListesi');
        }
    });
}


//### Güncelleme İşlemi
module.exports.kullaniciGuncelle=function(req,res){
    Kullanici.findById(req.params.id,function(err,result){
        if(err){
            console.log('kullanici Guncelle error');
        }
        else
        {
            res.render('kullaniciGuncelle',{kullanicilar:result});
        }
        });   
}

module.exports.kullaniciGuncellePost=function(req,res){
    var updateKullanici={
        ad:req.body.ad,
        soyad:req.body.soyad,
        email:req.body.email,
        kullaniciAdi:req.body.kullaniciadi,
        sifre:req.body.sifre
    };
    Kullanici.findByIdAndUpdate(req.params.id,updateKullanici,function(err){
        if(err)
        {
            console.log("kullaniciGuncellePost hata");
        }
        else
        {
            //console.log(updateKullanici);
            res.redirect('/login/kullanicilarListesi');
        }
    });
}

