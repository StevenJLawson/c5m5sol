(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService','MenuService']
function SignupController(SignupService,MenuService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.submit = function () {
  	MenuService.getItem($ctrl.user.favorite).then(function(result){
  		$ctrl.completed = true;
  		$ctrl.invalidFav = false;
	    console.log("submitted in ctrl");
	    console.log($ctrl.user);
	    SignupService.setUser($ctrl.user);
  	}).catch(function(){
  		$ctrl.invalidFav = true;
  	});
    
  };

  

}


})();
