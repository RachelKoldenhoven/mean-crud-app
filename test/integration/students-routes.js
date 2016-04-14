/**
 * Created by rachelkoldenhoven on 4/13/16.
 */
process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');
var testSeed = require('../../src/server/models/seeds/test-seed');
var Students = require('../..//src/server/models/students');


chai.use(chaiHttp);


describe('student routes', function() {


  beforeEach(function(done) {
    //drop db
    testUtilities.dropDatabase();
    testSeed.runSeed(done);
    //create db
    //seed
    done();
  });

  afterEach(function(done) {
    testUtilities.dropDatabase(done);

    //drop db
    done();
  });

  describe('/GET students', function() {

    it('should return all students', function(done) {
      chai.request(server)
        .get('/students')
        .end(function(err, res) {
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.have.property('data');
          res.body.should.have.property('status');
          res.body.status.should.equal('success');
          res.body.should.be.a('object');
          res.body.data.should.be.a('array');
          res.body.data.length.should.equal(1);
          res.body.data[0].firstName.should.equal('Kevin');
          res.body.data[0].lastName.should.equal('Schwartz');
          res.body.data[0].year.should.be.equal(2001);
          done();
        });
    });
  });

  describe('/GET students', function() {

    it('should return one student', function(done) {
      Students.findOne(function(err, student) {
        var studentID = student._id;
        chai.request(server)
          .get('/students/' +studentID)
          .end(function(err, res) {
            res.status.should.equal(200);
            console.log(res.body);
            res.type.should.equal('application/json');
            res.body.should.have.property('data');
            res.body.should.have.property('status');
            res.body.status.should.equal('success');
            res.body.should.be.a('object');
            res.body.data.firstName.should.equal('Kevin');
            res.body.data.lastName.should.equal('Schwartz');
            res.body.data.year.should.be.equal(2001);
            done();
          });
      })

    });
  });

  describe('/POST students', function() {

    it('should create a new student', function(done) {
      chai.request(server)
        .post('/students')
        .send({
          firstName: "Kate",
          lastName: "Smith",
          year: 2002
        })
        .end(function(err, res) {
          res.status.should.equal(200);
          console.log(res.body);
          res.type.should.equal('application/json');
          res.body.should.have.property('data');
          res.body.should.have.property('status');
          res.body.status.should.equal('success');
          res.body.should.be.a('object');
          res.body.data.should.be.a('array');
          res.body.data.length.should.equal(1);
          res.body.data.firstName.should.equal('Kate');
          res.body.data.lastName.should.equal('Smith');
          res.body.data.year.should.be.equal(2002);
          done();
        });
    });
  });

  describe('/DELETE students', function() {

    it('should delete a student', function(done) {
      Students.findOne(function(err, student) {})
      var studentId = student._id;
      chai.request(server)
        .delete('/students/' + studentId)
        .end(function(err, res) {
          res.status.should.equal(200);
          console.log(res.body);
          res.type.should.equal('application/json');
          res.body.should.have.property('data');
          res.body.should.have.property('status');
          res.body.status.should.equal('success');
          res.body.should.be.a('object');
          res.body.data.should.be.a('array');
          res.body.data.length.should.equal(1);
          res.body.data.firstName.should.equal('Kate');
          res.body.data.lastName.should.equal('Smith');
          res.body.data.year.should.be.equal(2002);
          done();
        });
    });
  });
});