'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state({
        //状态名
      name:'view1',
      url:"/view1",//url地址
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
}])

.controller('View1Ctrl', ["$scope","$http","$state","UserService",function(sc,$http,$state,UserService) {
  // jsonp
   sc.users=UserService.getUsers();
   console.log(sc.users);
   if(!sc.users){
       UserService.all().then(function (resp) {
           console.log(UserService.all())

           sc.users=UserService.getUsers();
       });
    }
    sc.addUser=function () {
        $state.go('view1.editUser',{name:''});
        // console.log($location.path)
    };
   sc.updateUser=function (name) {
       // $location.path("/view1.update")
       // $state.path("/view1.editUser/"+name);
       $state.go('view1.editUser',{name:name});

   }
    // $http.jsonp('http://localhost/dami/getusers_cors.php').then(function (resp) {
    //     console.log(resp);
    //     sc.users=resp.data;
    // })
}]);