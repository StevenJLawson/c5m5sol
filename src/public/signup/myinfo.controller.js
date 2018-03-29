(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'user'];
function MyInfoController(MenuService, user) {
  var $ctrl = this;

  if (user) {
    $ctrl.user = user;
    MenuService.getItem(user.favorite)
      .then(function(response) {
        $ctrl.item = response;
      })
      .catch(function(response) {
        console.log(response);
      });
  }
};

})();