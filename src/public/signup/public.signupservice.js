(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);


SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;

  // service.getCategories = function () {
  //   return $http.get(ApiPath + '/categories.json').then(function (response) {
  //     return response.data;
  //   });
  // };

  
  service.setUser = function (use) {
    service.user = use;
    console.log('submitted in service ');
    console.log(service.user);
  };

  service.getUser = function () {
  	console.log("service get user" );  
   return service.user;
  };


}



})();