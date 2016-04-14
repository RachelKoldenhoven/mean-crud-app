/**
 * Created by rachelkoldenhoven on 4/13/16.
 */
var mongoose = require('mongoose');

///drop db

function dropDatabase(done) {
  mongoose.connection.db.dropDatabase();
  if(done) {
    done();
  }
}

module.exports = {
  dropDatabase: dropDatabase
};