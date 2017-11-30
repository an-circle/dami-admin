'use strict';

angular.module('myApp.version.version-directive', [])

    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])
//定义用驼峰  使用羊肉串
.directive('routeLinkActive', ['$location', function($location) {
    return function(scope, elm, attrs) {
        //1.监听路由事件
        scope.$on('$stateChangeSuccess',function (event) {
            console.log(event);
            var path=$location.path();
            console.log(path);
            var href=elm.find('a').attr('href').substr(2);
            console.log(href);
            //看path中是否有href这个子串,如果有的话就就把它加上active
            if(path.indexOf(href)!=-1){
                //路由匹配
                elm.addClass("active")
            }else{
                elm.removeClass('active')
            }
        })
    };
}]);
