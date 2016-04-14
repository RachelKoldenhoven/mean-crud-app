/**
 * Created by rachelkoldenhoven on 4/13/16.
 */
app.service('studentDataService', ['crudService',  function(crudService) {

  return {
    getAllStudents: function() {
      return crudService.getAll('students')
        .then(function(students) {
          return students;
        });
    },
    addStudent: function(payload) {
      crudService.addOne('students', payload)
        .then(function(student) {
          return student;
        });
    },
    deleteStudent: function(payload) {
      crudService.deleteOne('students', payload)
    }

  }


}]);


app.service('crudService', ['$http', function($http) {

  return {
    getAll: function(resource) {
      return $http.get('/'+resource)
        .then(function(res) {
          return res;
        })
        .catch(function(err) {
          return err;
        })

    } ,
    addOne: function(resource, payload) {
      return $http.post('/'+resource, payload)
        .then(function(res) {
          return res;
        })
        .catch(function(err) {
          return err;
        })

    },
    deleteOne: function(resource) {
      return $http.delete('/' + resource)
        .then(function(res) {
          return res;
        })
        .catch(function(err) {
          return err;
        })
    }
  }

}]);