(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService',]
function SignupController(SignupService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.submit = function () {
    $ctrl.completed = true;
    console.log("submitted in ctrl");
    console.log($ctrl.user);
    SignupService.setUser($ctrl.user);
  };

}


})();
