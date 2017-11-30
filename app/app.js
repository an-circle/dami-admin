'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router','ui.router.state.events',
  'myApp.view1',
  'myApp.view1.editUser',
  'myApp.view2',
  'myApp.version',
  'myApp.userService',
    'myApp.viewEdit'

]).
config(['$urlRouterProvider', function($urlRouterProvider) {
  //哈希前缀,与规范一致,强调路由路径,达成规范
  //   $urlRouterProvider.otherwise('/view1')


    $urlRouterProvider.otherwise('/view1');

}]);
