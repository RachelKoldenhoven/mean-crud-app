/**
 * Created by rachelkoldenhoven on 4/13/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

var Student = mongoose.model('students', StudentSchema);


module.exports = Student;









//
//Artist.find({}, function(err, artists) {
//  if(err) {
//    console.log("Error!", err);
//  }
//  console.log('Artists: ', artists);
//
//});

