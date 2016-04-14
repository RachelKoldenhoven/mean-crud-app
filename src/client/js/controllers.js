/**
 * Created by rachelkoldenhoven on 4/13/16.
 */
app.controller('addStudentController', ['$scope', 'studentDataService', function($scope, studentDataService) {


  studentDataService.getAllStudents()
    .then(function(students) {
      console.log(students);
      $scope.allStudents = students.data.data;
    });

  $scope.student = {};

  $scope.addStudent = function(student) {
    console.log(student);
  studentDataService.addStudent(student);
    $scope.student = {};

  }

}]);