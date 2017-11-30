'use strict';

angular.module('myApp.userService', [])

    .factory('UserService', ['$http', function($http) {
        var users;
        return {
            all:function () {
            return  $http.jsonp('http://localhost/dami/get_users.php?jsonp_callback=JSON_CALLBACK').success(function (resp) {
                    console.log(resp);
                    users=resp;
                });






            },
            //找到name的数据
            one:function (name) {
                if(users){
                    for (var i = 0; i < users.length; i++) {
                        var u = users[i];
                        if(u.name===name){
                            return u;
                        }

                    }

                    return null;

                }

            },
            getUsers:function () {
                return users;
            },
            setUsers:function (usrs) {
                users=usrs;
            }




        }
    }]);