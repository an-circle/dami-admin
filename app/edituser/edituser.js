'use strict';

var app=angular.module('myApp.view1.editUser', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state({
        name:'view1.editUser',
        url:'/editUser/{name}',
    templateUrl: 'edituser/edituser.html',
    controller: 'editUserCtrl'
  });
}]);

app.controller('editUserCtrl', ["$scope","$http","$location","$stateParams","UserService",function(sc,$http,$location,$stateParams,UserService) {

// console.log($stateParams.name);
  //当前表单更新的对象
  sc.user=UserService.one($stateParams.name);
    sc.action=sc.user?'更新用户':'新增用户';


  sc.onSubmit=function (valid) {
      if(valid){
          console.log(sc.user);
          var action=sc.action=="更新用户"?"update":"add";
          $http.post('http://localhost/dami/edit-user.php?action='+action,sc.user).then(function (resp) {
              console.log(resp);
              var result=resp.data;
              console.log(result);
              if(result.success){
                  //操作成功
                  //   $location.path("/view1")
                  UserService.setUsers(result.data);
                  //    跳转页面
                  $location.path("/view1");
              }else{
                  alert("操作失败")
              }
          })
      }

  }
}]);
app.controller('updateCtrl',["$scope","$http","$location","UserService",function (sc,$http,$location,UserService) {
    sc.action="更新用户";
    sc.user;
    sc.onSubmit=function () {
        console.log(sc.user);
        $http.post('http://localhost/dami/update.php',sc.user).then(function (resp) {
            console.log(resp);
        })
    }
}]);