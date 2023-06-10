var express = require('express');
var router = express.Router();
var Anouncements= require('../models/anouncements');
//GET Routes
router.get('/', function(req,res,next){
res.send("Dashboard");
});

router.get('/anouncements', function(req,res,next){
    Anouncements.find().exec()
    .then((anouncements)=>{
    res.statusCode=200;
        res.json(anouncements);
    
    }, (err)=>{return (err)})
  });

//POST Routes 
// Route to add an anouncements
router.post('/anouncements/add', function(req, res, next) {
    Anouncements.create(req.body)
      .then((anouncements) => {
        res.statusCode = 200;
        res.json(anouncements);
      }, (err)=>{return (err)})
  });

module.exports = router;