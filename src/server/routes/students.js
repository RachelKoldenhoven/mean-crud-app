/**
 * Created by rachelkoldenhoven on 4/13/16.
 */
var express = require('express');
var router = express.Router();
var Students = require('../models/students');


// GET all students //
router.get('/', function(req, res, next) {
  Students.find({}, function(error, students) {
    if(error) {
      return next(error);
    }
    res.status(200).json(students);
  })

});

// GET one student //
router.get('/:id', function(req, res, next) {
  Students.findById(req.params.id, function(error, student) {
    console.log(req.params.id);
    if(error) {
      return next(error);
    }
    res.status(200).json(student);
  })

});


// POST to add a new student //
router.post('/', function(req, res, next) {
  console.log(req.body);
  var student = new Students(req.body);
  student.save (function(error, newStudent) {
    console.log('newstudent: ' + newStudent);
    if(error) {
      return next(error);
    }
    res.status(200).json(newStudent);
  })
});

// PUT to students //
router.get('/', function(req, res, next) {
  Students.find({}, function(error, students) {
    if(error) {
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      data: students
    });
  })

});

// DELETE students //
router.delete('/:id', function(req, res, next) {
  var studentId = req.params.id;
  Students.findByIdAndRemove(studentId, function(error, students) {
    if(error) {
      return next(error);
    }
    res.status(200).json({
      status: 'success',
      data: students
    });
  })

});

module.exports = router;