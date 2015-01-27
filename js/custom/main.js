var app = angular.module('myApp', ['ui.bootstrap','ngAutocompletemap','ngMap','facebook','ui.router','ngProgress']);
/*Routing in route.js*/

/*Config FB App ID*/
app.config([
    'FacebookProvider',
    function(FacebookProvider) {
     var myAppId = '823509664375931';
     FacebookProvider.init(myAppId);     
    }
]);

app.run(function($rootScope, $location,ngProgress) {
    $rootScope.location = $location;
    
    if(typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
    }
    
    $rootScope.$on('$stateChangeStart', function() {
        ngProgress.start();
        $('#loading').show()
      });

      $rootScope.$on('$stateChangeSuccess', function() {
    	  ngProgress.complete();
    	  $('#loading').hide();
      });
    
});

app.service("user",function user(){
	this.user = null;
	if(localStorage.currentUser){
		try{
			this.currentUser = JSON.parse(localStorage.currentUser);
		}
		catch(e){}
	}
});

/*Root variables*/
var rideSearchInput = {};
var login = false;
var fbObject;
/*End of root variables*/

app.controller('mainCtrl', function($scope, $timeout, $location, $http, Facebook, ngProgress, user) {
  var userIsConnected = false;
  $scope.logged = false;

  /*User already logged in, page was refreshed*/
  if(user.currentUser){
	  $scope.logged = true;
  }
  
  $scope.postRide = function() {
	  $scope.loadUserDashboard();
  };
  
  $scope.logout = function() {
	  localStorage.removeItem("currentUser");
	  window.location.reload();
  };
  
  $scope.loginUser = function() {
        if(!userIsConnected) {
          $scope.login();
        }
        else {
        	$scope.loadUserDashboard();
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
   
   $scope.loadUserDashboard = function() {
	   if($location.path().indexOf('userDashboard') !=-1){
		   window.location = '#/userDashboard/offerRide';
	   }
	   else {
		   window.location = '#/userDashboard';
	   }
	   //($location.path() + "/offerRide");
   };
   
   $scope.pullUserInfoFromFB = function() {
      Facebook.api('/me', function(response) {
        /**
         * Using $scope.$apply since this happens outside angular framework.
         */
        $scope.$apply(function() {
          $scope.user = response;

          /*Store data to  service*/
          user.currentUser = $scope.user;
          localStorage.currentUser = JSON.stringify($scope.user);

          var responsePromise = $http.post("../services/index.php/user",user.currentUser);
          responsePromise.success(function(data, status, headers, config) {

	          if(data.status == 'USER_CREATED'){
	        	  //localStorage.lastname = data;
	        	  localStorage.firstTimeUser = 'true';
	        	  $scope.loadUserDashboard();
	          }
	          else{
	        	  alert('logged in succesfully');
	          }
	          console.log(data);
	          //new user
	          //window.location = '#/userDashboard';
          });
          responsePromise.error(function(data, status, headers, config) {
            alert("AJAX failed!");
          });
        });        
      });
   };
});