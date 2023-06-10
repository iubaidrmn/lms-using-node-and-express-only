var express = require('express');
var router = express.Router();
var Teacher=require('../models/teacher');
var Student=require('../models/student');
var Class=require('../models/class');
const student = require('../models/student');

//GET Routes
router.get('/', function(req,res,next){
res.send("Dashboard");
});
router.get('/classes', function(req,res,next){
Class.find().populate('teacher').populate('students.sid').exec()
.then((classs)=>{
res.statusCode=200;
    res.json(classs);

}, (err)=>{return (err)})
});
router.get('/teachers', function(req,res,next){
    Teacher.find().exec()
    .then((teacher)=>{
    res.statusCode=200;
        res.json(teacher);
    
    }, (err)=>{return (err)})
});
router.get('/students', function(req,res,next){
    Student.find().exec()
    .then((student)=>{
    res.statusCode=200;
        res.json(student);
    
    }, (err)=>{return (err)})
});
router.get('/classes/:cid', function(req,res,next){
    Class.find({_id:req.params.cid}).populate('teacher').populate('students.sid').exec()
    .then((classs)=>{
    res.statusCode=200;
        res.json(classs);
    
    }, (err)=>{return (err)})
    });
router.get('/teachers/:tid', function(req,res,next){
    Teacher.find({_id:req.params.tid}).exec()
    .then((teacher)=>{
    res.statusCode=200;
        res.json(teacher);
    
    }, (err)=>{return (err)})
});
router.get('students/:sid', function(req,res,next){
    Student.find({_id:req.params.sid}).exec()
    .then((student)=>{
    res.statusCode=200;
        res.json(student);
    
    }, (err)=>{return (err)})
});

//POST Routes
router.post('/addteacher', function(req,res,next){
    Teacher.create(req.body)
    .then((teacher)=>{
    res.statusCode=200;
        res.json(teacher);
    
    }, (err)=>{return (err)})
});
router.post('/addstudent', function(req,res,next){
    Student.create(req.body)
    .then((student)=>{
    res.statusCode=200;
        res.json(student);
    
    }, (err)=>{return (err)})
});
router.post('/addclass', function(req,res,next){
    Class.create(req.body)
    .then((klass)=>{
    res.statusCode=200;
    res.json(klass);
    
    }, (err)=>{return (err)})
});

//PUT Routes
router.put('/assigntracher/:cid/:tid', function(req,res,next){
res.send ("Assigning class");
});
router.put('/registerstudent/:cid/:tid', function(req,res,next){
res.send ("registering students");
});

//Delete Routes
router.delete('/delclass/:cid',function(req,res,next){
res.send("Deleting class");  
});
router.delete('/delstudent/:sid',function(req,res,next){
res.send("Deleting student");  
});
router.delete('/delteacher/:tid',function(req,res,next){
res.send("Deleting teacher");  
});


module.exports = router;