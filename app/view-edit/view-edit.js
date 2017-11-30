'use strict';

angular.module('myApp.viewEdit', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state({
      name:'view2.viewEdit',
        url:'/view2.viewEdit',
    templateUrl: 'view-edit/view-edit.html',
    controller: 'ViewEditCtrl'
  });
}])

.controller('ViewEditCtrl', [function() {

}]);