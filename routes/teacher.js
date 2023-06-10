var express = require('express');
var router = express.Router();
var Assignment = require('../models/assignment');
var Class=require('../models/class');
var Student=require('../models/student');
var Anouncements=require('../models/anouncements');

//GET Routes
router.get('/', function(req,res,next){
res.send("Dashboard");
});

//Route to view students
router.get('/students', function(req,res,next){
  Student.find().exec()
  .then((student)=>{
  res.statusCode=200;
      res.json(student);
  
  }, (err)=>{return (err)})
});

//Route to view classes
router.get('/classes', function(req,res,next){
  Class.find().populate('teacher').populate('students.sid').exec()
  .then((classs)=>{
  res.statusCode=200;
      res.json(classs);
  
  }, (err)=>{return (err)})
  });

//Route to view assignments
  router.get('/assignments', function(req,res,next){
    Assignment.find().exec()
    .then((assignment)=>{
    res.statusCode=200;
        res.json(assignment);
    
    }, (err)=>{return (err)})
  });

  // Route to view all anouncements
router.get('/anouncements', function(req,res,next){
  Anouncements.find().exec()
  .then((anouncements)=>{
  res.statusCode=200;
      res.json(anouncements);
  
  }, (err)=>{return (err)})
});

//POST Routes 
// Route to add an assignment
router.post('/assignments/add', function(req, res, next) {
    Assignment.create(req.body)
      .then((assignment) => {
        res.statusCode = 200;
        res.json(assignment);
      }, (err)=>{return (err)})
  });

module.exports = router;