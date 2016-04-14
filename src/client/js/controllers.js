/**
 * Created by rachelkoldenhoven on 4/13/16.
 */
app.controller('addStudentController', ['$scope', 'studentDataService', function($scope, studentDataService) {


  studentDataService.getAllStudents()
    .then(function(students) {
      $scope.allStudents = students.data;
    });

  $scope.student = {};

  $scope.addStudent = function(student) {
    studentDataService.addStudent(student);
  };

  $scope.deleteStudent = function(student) {
    console.log('controller student: ' + student);
    studentDataService.deleteStudent(student);
  }

}]);