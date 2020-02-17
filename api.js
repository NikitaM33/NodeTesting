const express = require("express");
const bodyParser = require("body-parser")
const router = express.Router();
const User = require("./users");
const jobReviews = require("./jobReviews");
const Vacation = require("./vacations");
const NewWorker = require("./newWorkers");
const News = require("./news");
const Gallery = require("./gallery");
const Leaders = require("./leaders");
const Announsment = require("./announsments");
const GreetingPhotos = require("./birthdayGreeting");
const Rating = require("./rating");
const Test = require("./test");
const BestLogo = require('./bestLogo');
const nodemailer = require('nodemailer');
const Tournament = require('./tournament');
const TournamentInteview = require('./tournamentInterview');
const VisitorsCount = require('./visitorsCount');
const MainPage = require('./mainPage');
const Slider = require('./slider');
const CorpVideo = require('./corpLivePageVideo');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/greetingPhoto/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    // reject a file
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(new Error('The image dosen`t fit to local standart'), false)
    }
}
const upload = multer({
    storage,
    limits: {fileSize: 1024 * 1024 * 5},
    fileFilter
})
// const upload = require('express-fileupload');
const OtherVideo = require('./corpLiveOtherVideo');
const TodayCelebro = require('./todayCelebro');


// Основы Node.JS. 2. Работа с файлами txt


// ===================== TEST API

router.get("/test", (req, res) => {
    Test.find({})
    .then(t => {
        res.send(t);
    });
});

router.post("/test", (req, res) => {
    Test.create(req.body)
    .then(t => {
        res.send(t);
    });
});

router.put("/test/:id", (req, res) => {
    Test.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Test.findOne({_id: req.params.id})
        .then(t => {
            res.send(t);
        });
    });
});

router.delete("/test/:id", (req, res) => {
    Test.deleteOne({_id: req.params.id})
    .then(t => {
        res.send(t);
    });
});

// ============== Турнир ===============

router.get("/tournament", (req,res) => {
    Tournament.find({})
    .then(trnmt => {
        res.send(trnmt);
    });
});
router.post("/tournament", (req, res) => {
    Tournament.create(req.body)
    .then(trnmt => {
        res.send(trnmt);
    });
});

router.put("/tournament/:id", (req, res) => {
    Tournament.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
    Tournament.findOne({_id: req.params.id})
        .then(trnmt => {
            res.send(trnmt);
        });
    });
});

router.delete("/tournament/:id", (req, res) => {
    Tournament.deleteOne({_id: req.params.id})
    .then(trnmt => {
        res.send(trnmt);
    });
});

// ============== ТурнирИнтервью ===============

router.get("/tournamentInterview", (req,res) => {
    TournamentInteview.find({})
    .then(trmtinter => {
        res.send(trmtinter);
    });
});

router.post("/tournamentInterview", (req, res) => {
    TournamentInteview.create(req.body)
    .then(trmtinter => {
        res.send(trmtinter);
    });
});

router.put("/tournamentInterview/:id", (req, res) => {
    TournamentInteview.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        TournamentInteview.findOne({_id: req.params.id})
        .then(trmtinter => {
            res.send(trmtinter);
        });
    });
});

router.delete("/tournamentInterview/:id", (req, res) => {
    TournamentInteview.deleteOne({_id: req.params.id})
    .then(trmtinter => {
        res.send(trmtinter);
    });
});


// =============== Соревнование лайки ============

router.get("/like", (req, res) => {
    Like.find({})
    .then(l => {
        res.send(l);
    });
});

router.post("/like", (req, res) => {
    Like.create(req.body)
    .then(l => {
        res.send(l);
    });
});

router.put("/like/:id", (req, res) => {
    Like.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Like.findOne({_id: req.params.id})
        .then(l => {
            res.send(l);
        });
    });
});

router.delete("/like/:id", (req, res) => {
    Like.deleteOne({_id: req.params.id})
    .then(l => {
        res.send(l);
    });
});


// =============== Соревнование картинки ============

router.get("/competition", (req, res) => {
    Competition.find({})
    .then(cmptn => {
        res.send(cmptn);
    });
});

router.post("/competition", (req, res) => {
    Competition.create(req.body)
    .then(cmptn => {
        res.send(cmptn);
    });
});

router.put("/competition/:id", (req, res) => {
    Competition.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Competition.findOne({_id: req.params.id})
        .then(cmptn => {
            res.send(cmptn);
        });
    });
});

router.delete("/competition/:id", (req, res) => {
    Competition.deleteOne({_id: req.params.id})
    .then(cmptn => {
        res.send(cmptn);
    });
});

// ============== Соревнования картинки =============

router.get("/bestlogo", (req, res) => {
    BestLogo.find({})
    .then(bl => {
        res.send(bl);
    });
});

router.post("/bestlogo", (req, res) => {
    BestLogo.create(req.body)
    .then(bl => {
        res.send(bl);
    });
});

router.put("/bestlogo/:id", (req, res) => {
    BestLogo.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        BestLogo.findOne({_id: req.params.id})
        .then(bl => {
            res.send(bl);
        });
    });
});

router.delete("/bestlogo/:id", (req, res) => {
    BestLogo.deleteOne({_id: req.params.id})
    .then(bl => {
        res.send(bl);
    });
});

// ============= Рэйтинг из трех позиций ==========

router.get("/rating", (req, res) => {
    Rating.find({})
    .then(rating => {
        res.send(rating);
    });
});

router.post("/rating", (req, res) => {
    Rating.create(req.body)
    .then(rating => {
        res.send(rating);
    });
});

router.put("/rating/:id", (req, res) => {
    Rating.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Rating.findOne({_id: req.params.id})
        .then(rating => {
            res.send(rating);
        });
    });
});

router.delete("/rating/:id", (req, res) => {
    Rating.deleteOne({_id: req.params.id})
    .then(rating => {
        res.send(rating);
    });
});


// ============= Поздравления с ДР =======================================================================

router.get("/greetingPhoto", (req, res)=>{
    GreetingPhotos.find({})
    .then(gp => {
        let dateToNum = new Date().getMonth() + 1;
        // let dateToNum = 2; // Для ручного выставления месяца
        let monthBD = gp.filter( item => item.monthOfBirthday == dateToNum );
        res.send(monthBD);
    });
});

router.get("/greetingPhoto/find", (req, res) => {
    // console.log(req.query.fullBirthDate);
    GreetingPhotos.find({
        lastName: req.query.lastName,
        name: req.query.name,
        secondName: req.query.secondName,
        fullBirthDate: req.query.fullBirthDate
    }, 
    (err, docs) => {
        if(err) return console.log(err);
        // console.log(docs);
    })
    .then(gpf => {
        res.send(gpf)
        // console.log(gpf)
    });
});

router.post("/greetingPhoto", upload.single('img'), (req, res, next) => {
    let fileData = req.file;
    if(!fileData) {
        console.log('Upload error. No fileData');
    } else {
        console.log('Upload success');
        let slicedPath = req.file.path.substr(6);
        let transformedDate = req.body.fullBirthDate.slice(0, 5);
        let transformedDay = req.body.fullBirthDate.slice(0, 2);
        let transformedMonth = req.body.fullBirthDate.slice(3, 5);
        let image = {
            lastName: req.body.lastName,
            name: req.body.name,
            secondName: req.body.secondName,
            fullBirthDate: req.body.fullBirthDate,
            depart: req.body.depart,
            city: req.body.city,
            dateOfBirthday: transformedDate,
            dayOfBirthday: transformedDay,
            monthOfBirthday: transformedMonth,
            img: `http://192.168.10.185:8080${slicedPath}`,
            imgBig: `http://192.168.10.185:8080${slicedPath}`,
            created: req.body.created
        };

        GreetingPhotos.create(image)
        .then(gp => {
            res.send(gp);
        });
    }
});

router.put("/greetingPhoto/:id", (req, res)=>{
    GreetingPhotos.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        GreetingPhotos.findOne({_id: req.params.id})
        .then(gp => {
            res.send(gp);
        });
    });
});

router.delete("/greetingPhoto/:id", (req, res)=>{
    GreetingPhotos.deleteOne({_id: req.params.id})
    .then(gp => {
        res.send(gp);
    });
});

// Сегодняшние именинники
router.get("/todayCelebro", (req, res)=>{
    TodayCelebro.find({})
    .then(tc => {
        let todaySelebrateDay = new Date().getDate();
        let todaySelebrateMonth = new Date().getMonth() + 1;
        let monthAndDay = tc.filter( item => item.dayOfBirthday == todaySelebrateDay && item.monthOfBirthday == todaySelebrateMonth );
        res.send(monthAndDay);
        console.log(tc)
    });
});

router.post("/todayCelebro", (req, res)=>{
    TodayCelebro.create(req.body)
    .then(tc => {
        res.send(tc);
    });
});

router.put("/todayCelebro/:id", (req, res)=>{
    TodayCelebro.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        TodayCelebro.findOne({_id: req.params.id})
        .then(tc => {
            res.send(tc);
        });
    });
});

router.delete("/todayCelebro/:id", (req, res)=>{
    TodayCelebro.deleteOne({_id: req.params.id})
    .then(tc => {
        res.send(tc);
    });
});


// =================== Объявления ===========

router.get("/announsments", (req, res)=>{
    Announsment.find({})
    .then(a => {
        res.send(a);
    });
});

// function isAnyNews(prevAnnouns) {
//     if(prevAnnouns.length !== newAnnouns.length){
//         alert("Send mail!");
//     }
// }

router.post("/announsments", (req, res)=>{
    Announsment.create(req.body)
    .then(a => {
        res.send(a);
    })
});

router.put("/announsments/:id", (req, res)=>{
    Announsment.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() => {
        Announsment.findOne({_id: req.params.id})
        .then(a => {
            res.send(a);
        });
    });
});

router.delete("/announsments/:id", (req, res)=>{
    Announsment.deleteOne({_id: req.params.id})
    .then(a => {
        res.send(a);
    });
});


// ========================= Юзеры

router.get("/users", (req, res)=>{
    User.find({})
    .then(user => {
        res.send(user);
    });
});

router.post("/users", (req, res)=>{
    User.create(req.body)//принимает аргументы которые я хочу сохронить в бд
    .then(user => {
        res.send(user);
    });
});

router.put("/users/:id", (req, res)=>{
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        User.findOne({_id: req.params.id})
        .then(user => {
            res.send(user);
        });
    } );
});

router.delete("/users/:id", (req, res)=>{
    User.deleteOne({_id: req.params.id})
    .then(user => {
        res.send(user);
    });
});

//============= Тройка лидеров ================

router.get("/leaders", (req, res)=>{
    Leaders.find({})
    .then(n => {
        res.send(n);
    });
});

// router.get("/leaders/:id", (req, res)=>{ // Зачем сделал с ID?
//     Leaders.findOne({_id: req.params.id})
//     .then(n => {
//         res.send(n);
//     });
// });

router.post("/leaders", (req, res)=>{
    Leaders.create(req.body)
    .then(n => {
        res.send(n);
    });
});

router.put("/leaders/:id", (req, res)=>{
    Leaders.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        Leaders.findOne({_id: req.params.id})
        .then(n => {
            res.send(n);
        });
    } );
});

router.delete("/leaders/:id", (req, res)=>{
    Leaders.deleteOne({_id: req.params.id})
    .then(n => {
        res.send(n);
    });
});

//================================================= Новости

router.get("/news", (req, res)=>{
    News.find({})
    .then(n => {
        res.send(n);
    });
});

router.get("/news/:id", (req, res)=>{
    News.findOne({_id: req.params.id})
    .then(n => {
        res.send(n);
    });
});

router.post("/news", (req, res)=>{ // =========================== Урок по удалению emaila из списка "Nodemailer #5". Отправка email с сервера. с 5:16
    // if(!req.body.addNewsHeader || !req.body.addNewsText || !req.body.addNewsImg) return res.send('Одно из полей не заполнено!') // Проверка заполнены ли поля формы
    // console.log(req.body); // req.body - получаю инфу из формы с помощью bodyParsera
    let receivers = [
        // 'constantin.dmitriewitch@yandex.ru',
        // 'r.avanesov@filbert.pro',
        // 'v.alekseev@filbert.pro',
        // 'a.alekseeva@filbert.pro',
        // 'e.alekseeva@filbert.pro',
        // 'a.arhipov@filbert.pro',
        // 'p.aryutkin@filbert.pro',
        // 'e.asadullina@filbert.pro',
        // 'a.afanasev@filbert.pro',
        // 'a.ahmedzhanov@filbert.pro',
        // 'a.baberkina@filbert.pro',
        // 'd.babichev@filbert.pro',
        // 'd.balmasova@filbert.pro',
        // 'a.baranov@filbert.pro',
        // 'l.barysheva@filbert.pro',
        // 'e.belavina@filbert.pro',
        // 'o.beletskaya@filbert.pro',
        // 'a.belov@filbert.pro',
        // 'e.belova@filbert.pro',
        // 't.bechvaya@filbert.pro',
        // 'e.bogdanova@filbert.pro',
        // 's.bogdanova@filbert.pro',
        // 'y.bokareva@filbert.pro',
        // 'o.bolshakova@filbert.pro',
        // 'n.bondarenko@filbert.pro',
        // 'o.bormotova@filbert.pro',
        // 'e.bredihin@filbert.pro',
        // 'l.bukina@filbert.pro',
        // 'e.bulatova@filbert.pro',
        // 't.buribaev@filbert.pro',
        // 'm.butova@filbert.pro',
        // 'a.bushelenkova@filbert.pro',
        // 'a.bykova@filbert.pro',
        // 'y.varsanofeva@filbert.pro',
        // 'm.vasyunina@filbert.pro',
        // 'a.veselova@filbert.pro',
        // 'v.voronina@filbert.pro',
        // 'd.gaaze@filbert.pro',
        // 'e.gavrilov@filbert.pro',
        // 'e.galimova@filbert.pro',
        // 'e.garaev@filbert.pro',
        // 'l.garmaeva@filbert.pro',
        // 'e.giniyatullin@filbert.pro',
        // 'y.glovatskaya@filbert.pro',
        // 'd.grigorev@filbert.pro',
        // 'v.gromova@filbert.pro',
        // 'o.gubina@filbert.pro',
        // 'i.guzev@filbert.pro',
        // 'o.gusev@filbert.pro',
        // 'i.daminbaev@filbert.pro',
        // 's.dedulko@filbert.pro',
        // 'y.demidov@filbert.pro',
        // 'n.demyanenko@filbert.pro',
        // 'n.deriy@filbert.pro',
        // 'o.dmitriva@filbert.pro',
        // 'n.dmitriev@filbert.pro',
        // 'i.dudina@filbert.pro',
        // 'a.dyadin@filbert.pro',
        // 's.evdokimov@filbert.pro',
        // 'a.evstigneeva@filbert.pro',
        // 'n.egorova@filbert.pro',  // ================== Егорова Надежда
        // 'd.emagulova@filbert.pro',
        // 'm.epanechnikova@filbert.pro',
        // 'a.erohin@filbert.pro',
        // 'l.zhukova@filbert.pro',
        // 'n.zakaryan@filbert.pro',
        // 'i.zin@filbert.pro',
        // 'm.zotova@filbert.pro',
        // 'y.zubova@filbert.pro',
        // 'e.zueva@filbert.pro',
        // 'a.ivanov@filbert.pro',  // ================ Иванов Андрей Борисович
        // 'v.ivanov@filbert.pro',
        // 'v.ivanova@filbert.pro',
        // 'y.ivanova@filbert.pro',
        // 'k.ilin@filbert.pro',
        // 'a.isakova@filbert.pro',
        // 'i.ischuk@filbert.pro',
        // 'a.karpechina@filbert.pro',
        // 'y.kaunov@filbert.pro',
        // 'a.kachkina@filbert.pro',
        // 'Lu.Kim@filbert.pro',
        // 'd.kireev@filbert.pro',
        // 'i.kirilova@filbert.pro',
        // 'o.kiseleva@filbert.pro',
        // 'm.kiyashko@filbert.pro',
        // 'o.kovaleva@filbert.pro',
        // 'e.kovalenko@filbert.pro',
        // 'v.kovedyaev@filbert.pro',
        // 's.kozhemyak@filbert.pro',
        // 'i.kolyukaev@filbert.pro',
        // 'b.korobeynikov@filbert.pro',
        // 'a.korosteleva@filbert.pro',
        // 'e.korshun@filbert.pro',
        // 'a.kostryukov@filbert.pro',
        // 'a.kravchuk@filbert.pro',
        // 'e.krivko@filbert.pro',
        // 'e.krivolutskaya@filbert.pro',
        // 's.kubachev@filbert.pro',
        // 'n.kudryavtseva@filbert.pro',
        // 'p.kuksenko@filbert.pro',
        // 'a.kushakov@filbert.pro',
        // 'a.larina@filbert.pro',
        // 'o.larionova@filbert.pro',
        // 'i.levieva@filbert.pro',
        // 't.leonteva@filbert.pro',
        // 'e.lipina@filbert.pro',
        // 'a.lobanova@filbert.pro',
        // 'e.lobykina@filbert.pro',
        // 'r.lupoy@filbert.pro',
        // 'v.marshanin@filbert.pro',
        // 'v.matrosova@filbert.pro',
        'n.melchenkov@filbert.pro', // ================ Мельченков Никита
        // 'o.mescheryakova@filbert.pro',
        // 't.mihaylova@filbert.pro',
        // 'a.mishin@filbert.pro',
        // 'l.moga@filbert.pro',
        // 'm.moga@filbert.pro',
        // 'm.mozzhukhina@filbert.pro',
        // 'o.mokshanova@filbert.pro',
        // 'm.morgolin@filbert.pro',
        // 'e.morgunova@filbert.pro', // ========================= Моргунова Елена
        // 'n.morozova@filbert.pro',
        // 'n.mudrova@filbert.pro',
        // 'e.muratova@filbert.pro',
        // 'l.mutalipova@filbert.pro',
        // 'y.mytsykova@filbert.pro',
        // 'y.paraskevich@filbert.pro',
        // 'y.nelyubova@filbert.pro',
        // 'zh.nikitina@filbert.pro',
        // 'i.novikova@filbert.pro',
        // 'p.obodovskiy@filbert.pro',
        // 'y.olhovskaya@filbert.pro',
        // 'k.panadey@filbert.pro',
        // 'v.pasichniy@filbert.pro',
        // 'd.paschenko@filbert.pro',
        // 's.permyakov@filbert.pro',
        // 'm.permyakova@filbert.pro',
        // 'i.petrukhina@filbert.pro',
        // 'n.pleshchenko@filbert.pro',
        // 'e.pogrebnyak@filbert.pro',
        // 'n.polosukhin@filbert.pro',
        // 'a.polyakov@filbert.pro',
        // 'r.popov@filbert.pro',
        // 'n.potylitsyn@filbert.pro',
        // 't.potylitsina@filbert.pro',
        // 'a.pochekutov@filbert.pro',
        // 'zh.prihodko@filbert.pro',
        // 'a.prokopchuk@filbert.pro',
        // 'y.pronichkina@filbert.pro',
        // 'n.prusenok@filbert.pro',
        // 'm.prusenok@filbert.pro',
        // 'a.pustovarov@filbert.pro',
        // 'n.puh@filbert.pro',
        // 'o.rabadanova@filbert.pro',
        // 'e.revina@filbert.pro',
        // 'k.rogacheva@filbert.pro',
        // 'm.rogencov@filbert.pro',  // ================== Роженцов Максим
        // 'i.rubtsov@filbert.pro',
        // 'a.rudnev@filbert.pro',
        // 'e.rusinova@filbert.pro',
        // 'n.russkih@filbert.pro',
        // 'a.rykunov@filbert.pro',
        // 't.saveleva@filbert.pro',
        // 'a.savitskiy@filbert.pro',
        // 'i.saychuk@filbert.pro',
        // 'o.salnikova@filbert.pro',
        // 'm.samsonova@filbert.pro',
        // 'k.santalova@filbert.pro',
        // 'l.safonova@filbert.pro',
        // 'a.sviridov@filbert.pro',
        // 'y.sevastyanova@filbert.pro',
        // 'n.senchenko@filbert.pro',
        // 'n.sergacheva@filbert.pro',
        // 'a.serdyukov@filbert.pro',
        // 'v.sibileva@filbert.pro',
        // 'd.simanenkov@filbert.pro',
        // 'a.sinelnikov@filbert.pro',
        // 'a.sinitskaya@filbert.pro',
        // 'o.sinitsyna@filbert.pro',
        // 'e.sirotkina@filbert.pro',
        // 'o.skadorvo@filbert.pro',
        // 's.skibinskiy@filbert.pro',
        // 'm.skurlova@filbert.pro',
        // 'k.smirnov@filbert.pro',
        // 'a.sokolov@filbert.pro',
        // 'v.sokolova@filbert.pro',
        // 'a.spirina@filbert.pro',
        // 'l.starkov@filbert.pro',
        // 'a.sterpul@filbert.pro',
        // 'o.stroganova@filbert.pro',
        // 'a.suchkova@filbert.pro',
        // 'y.taganov@filbert.pro',
        // 'a.talanova@filbert.pro',
        // 'E.Tverdunova@filbert.pro',
        // 'i.terekhova@filbert.pro',
        // 'a.timoshenko@filbert.pro',
        // 'k.titova@filbert.pro',
        // 'i.tkacheva@filbert.pro',
        // 'm.tuhkin@filbert.pro',
        // 'a.ustalov@filbert.pro',
        // 'n.fedorova@filbert.pro',
        // 'p.fedoseev@filbert.pro',
        // 'g.frolov@filbert.pro',
        // 'i.hazagerova@filbert.pro',
        // 'v.hainskiy@filbert.pro',
        // 'i.hlebnikov@filbert.pro',
        // 'v.hohlov@filbert.pro',
        // 'a.hynku@filbert.pro',
        // 'i.tsygelnik@filbert.pro',
        // 's.chikin@filbert.pro',
        // 'y.chugunova@filbert.pro',
        // 'd.chursinov@filbert.pro',
        // 'y.chshiev@filbert.pro',
        // 'a.shalin@filbert.pro',
        // 'a.shatrova@filbert.pro',
        // 'o.shafeev@filbert.pro',
        // 'i.shevchenko@filbert.pro',
        // 'y.shonicheva@filbert.pro',
        // 'g.scherbina@filbert.pro',
        // 'd.yakovets@filbert.pro',
        // 'k.yakovlev@filbert.pro',
        // 'a.yakovleva@filbert.pro',
        // 'm.yakovleva@filbert.pro',
        // 'n.yakovleva@filbert.pro',
        // 'a.yatsunova@filbert.pro'
    ]
    
    const transporter = nodemailer.createTransport({
        host: 'mail.nic.ru',
        // host: 'тут smtp оффисной рассылки',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            // user: 'n.melchenkov@filbert.pro',
            // pass: 'Ybrbnf529'
            user: 'Office@filbert.pro',
            pass: 'DDsuJXIP$2'
        }
    });
    
    const message = {
        from: 'Новостная рассылка портала "Filbert" <Office@filbert.pro>',
        to: receivers, // list of receivers
        subject: 'Свежая новость вышла на портале Filbert',
        html:
            `<div>
                <div style="background: rgb(28, 58, 73); border-top: 4px solid #FFBB2E">
                    <h1 style="color: #eaeaea;">Рассылка портала Filbert</h1>
                </div>
                
                <div style="padding: 1em;">
                    <h3 style="color: #444;">
                        ${req.body.testText} <a href="http://192.168.10.185:3000/information/#news" style="text-decoration: none;
                            color: rgb(52, 108, 136); cursor: pointer;">На портал к новостям</a>
                    </h3>
                </div>
                <p style="font-size: 14px; color: #999;">
                    Данное письмо не требует ответа.
                </p>
            </div>`
    };

    const mailer = message => {
        transporter.sendMail(message, (err, info) => {
            if(err) return console.log(err);
            console.log('Email sent: ', info);
        });
    };

    mailer(message);




    // res.send('Раассылка успешно произведена')
    // News.create(req.body)
    // .then(n => {
    //     res.send(n);
    // });
});

router.put("/news/:id", (req, res)=>{
    News.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        News.findOne({_id: req.params.id})
        .then(n => {
            res.send(n);
        });
    } );
});

router.delete("/news/:id", (req, res)=>{
    News.deleteOne({_id: req.params.id})
    .then(n => {
        res.send(n);
    });
});


// ===================== Новые сотрудники

router.get("/newWorker", (req, res)=>{
    NewWorker.find({})
    .then(nw => {
        res.send(nw);
    });
});

router.post("/newWorker", (req, res)=>{
    NewWorker.create(req.body)
    .then(nw => {
        res.send(nw);
    });
});

router.put("/newWorker/:id", (req, res)=>{
    NewWorker.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        NewWorker.findOne({_id: req.params.id})
        .then(nw => {
            res.send(nw);
        });
    } );
});

router.delete("/newWorker/:id", (req, res)=>{
    NewWorker.deleteOne({_id: req.params.id})
    .then(nw => {
        res.send(nw);
    });
});

// ===================== Вакансии

router.get("/vacations", (req, res)=>{
    Vacation.find({})
    .then(v => {
        res.send(v);
    });
});

router.get("/vacations/:id", (req, res)=>{
    Vacation.findOne({_id: req.params.id})
    .then(v => {
        res.send(v);
    })
});

router.post("/vacations", (req, res)=>{
    Vacation.create(req.body)
    .then(v => {
        res.send(v);
    });
});

router.put("/vacations/:id", (req, res)=>{
    Vacation.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        Vacation.findOne( {_id: req.params.id} )
        .then(v => {
            res.send(v);
        });
    } );
});

router.delete("/vacations/:id", (req, res)=>{
    Vacation.deleteOne( {_id: req.params.id} )
    .then(v => {
        res.send(v);
    });
});

// ================== Отзывы на вакансии

// router.get("/jobProfile", (req, res)=>{
//     jobReviews.find({})
//     .then(jr => {
//         res.send(jr);
//     });
// });

// router.post("/jobProfile", (req, res)=>{
//     jobReviews.create(req.body)
//     .then(jr => {
//         res.send(jr);
//     });
// });

// router.put("/jobProfile/:id", (req, res)=>{
//     jobReviews.findByIdAndUpdate({_id: req.params.id}, req.body)
//     .then( () => {
//         jobReviews.findOne( {_id: req.params.id} )
//         .then(jr => {
//             res.send(jr);
//         });
//     } );
// });

// router.delete("/jobProfile/:id", (req, res)=>{
//     jobReviews.deleteOne( {_id: req.params.id} )
//     .then(jr => {
//         res.send(jr);
//     });
// });

// ================== Форма заявки

router.get("/jobreviews", (req, res)=>{
    jobReviews.find({})
    .then(review => {
        res.send(review);
    })
});

router.post("/jobreviews", (req, res)=>{
    jobReviews.create(req.body)
    .then(review => {
        res.send(review);
    });
});

router.put("/jobreviews/:id", (req, res)=>{
    jobReviews.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        jobReviews.findOne({_id: req.params.id})
        .then(review => {
            res.send(review);
        });
    } );
});

router.delete("/jobreviews/:id", (req, res)=>{
    jobReviews.deleteOne({_id: req.params.id})
    .then(review => {
        res.send(review);
    });
});

//===================================== Фотки для фотогалереи

router.get("/gallery", (req, res)=>{
    Gallery.find({})
    .then(review => {
        res.send(review)
    });
});

router.post("/gallery", (req, res)=>{
    Gallery.create(req.body)
    .then(review => {
        res.send(review);
    });
});

router.put("/gallery/:id", (req, res)=>{
    Gallery.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        Gallery.findOne({_id: req.params.id})
        .then(review => {
            res.send(review);
        })
    } )
});

router.delete("/gallery/:id", (req, res)=>{
    Gallery.deleteOne({_id: req.params.id})
    .then(review => {
        res.send(review);
    });
});

//===================================== Счетчик посетителей

router.get("/visitorsCount", (req, res)=>{
    VisitorsCount.find({})
    .then(visCount => {
        res.send(visCount)
    });
});

router.post("/visitorsCount", (req, res)=>{
    VisitorsCount.create(req.body)
    .then(visCount => {
        res.send(visCount);
    });
});

router.put("/visitorsCount/:id", (req, res)=>{
    VisitorsCount.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        VisitorsCount.findOne({_id: req.params.id})
        .then(visCount => {
            res.send(visCount);
        })
    } )
});

router.delete("/visitorsCount/:id", (req, res)=>{
    VisitorsCount.deleteOne({_id: req.params.id})
    .then(visCount => {
        res.send(visCount);
    });
});

// ========= Главная страница ========== MainPage

router.get("/mainPage", (req, res)=>{
    MainPage.find({})
    .then(mp => {
        res.send(mp)
    });
});

router.post("/mainPage", (req, res)=>{
    MainPage.create(req.body)
    .then(mp => {
        res.send(mp);
    });
});

router.put("/mainPage/:id", (req, res)=>{
    MainPage.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        MainPage.findOne({_id: req.params.id})
        .then(mp => {
            res.send(mp);
        })
    } )
});

router.delete("/mainPage/:id", (req, res)=>{
    MainPage.deleteOne({_id: req.params.id})
    .then(mp => {
        res.send(mp);
    });
});

// =============== Slider =======

router.get("/slider", (req, res)=>{
    Slider.find({})
    .then(s => {
        res.send(s)
    });
});

router.post("/slider", (req, res)=>{
    Slider.create(req.body)
    .then(s => {
        res.send(s);
    });
});

router.post("/slider/:id", (req, res)=>{
    Slider.create(req.body)
    .then(s => {
        res.send(s);
    });
});

router.put("/slider/:id", (req, res)=>{
    Slider.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        Slider.findOne({_id: req.params.id})
        .then(s => {
            res.send(s);
        })
    } )
});

// ================ Видео для копроративной жизни ===============

router.get("/corpVideo", (req, res)=>{
    CorpVideo.find({})
    .then(cv => {
        res.send(cv)
    });
});

router.post("/corpVideo", (req, res)=>{
    CorpVideo.create(req.body)
    .then(cv => {
        res.send(cv);
    });
});

router.put("/corpVideo/:id", (req, res)=>{
    CorpVideo.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        CorpVideo.findOne({_id: req.params.id})
        .then(cv => {
            res.send(cv);
        })
    } )
});

router.delete("/corpVideo/:id", (req, res)=>{
    CorpVideo.deleteOne({_id: req.params.id})
    .then(cv => {
        res.send(cv);
    });
});

// ============= Остальные видео корпоративной жизни ====================

router.get("/otherVideo", (req, res)=>{
    OtherVideo.find({})
    .then(ov => {
        res.send(ov)
    });
});

router.post("/otherVideo", (req, res)=>{
    OtherVideo.create(req.body)
    .then(ov => {
        res.send(ov);
    });
});

router.put("/otherVideo/:id", (req, res)=>{
    OtherVideo.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then( () => {
        CorpVideo.findOne({_id: req.params.id})
        .then(ov => {
            res.send(ov);
        })
    } )
});

router.delete("/otherVideo/:id", (req, res)=>{
    OtherVideo.deleteOne({_id: req.params.id})
    .then(ov => {
        res.send(ov);
    });
});

module.exports = router;