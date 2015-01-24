var app = angular.module('myApp', ['ngAutocompletemap','ngMap','facebook','ui.router']);
/*Routing in route.js*/

/*Config FB App ID*/
app.config([
    'FacebookProvider',
    function(FacebookProvider) {
     var myAppId = '823509664375931';
     FacebookProvider.init(myAppId);     
    }
]);

/*Root variables*/
var rideSearchInput = {};
var login = false;
var fbObject;
/*End of root variables*/

app.controller('mainCtrl', function($scope, $timeout, Facebook) {
  var userIsConnected = false;
  $scope.logged = false;

  $scope.loginUser = function() {
        if(!userIsConnected) {
          $scope.login();
        }
        else {
          window.location = '#/userDashboard';
        }
  };
  
  $scope.login = function() {
         Facebook.login(function(response) {
          if (response.status == 'connected') {
            $scope.logged = true;
            $scope.pullUserInfoFromFB();
          }
          else{
            //alert('error in login');
          }        
        });
   };
   
   $scope.pullUserInfoFromFB = function() {
      Facebook.api('/me', function(response) {
        /**
         * Using $scope.$apply since this happens outside angular framework.
         */
        $scope.$apply(function() {
          $scope.user = response;
          fbObject = $scope.user;
          console.log(angular.fromJson(fbObject));
          window.location = '#/userDashboard';
        });        
      });
   };
});