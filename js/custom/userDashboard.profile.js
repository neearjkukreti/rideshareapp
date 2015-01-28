app.controller('profile', function($scope,user, $http) {
	
	$scope.userObj = user.currentUser;//fbObject;	
	
	//$scope.gender = 'Other';
	$scope.rate = 0;
	$scope.max = 10;
	$scope.isReadonly = false;	  
	
	$scope.hoveringOver = function(value) {
	    $scope.overStar = value;
	    $scope.percent = 100 * (value / $scope.max);
	};

	$scope.saveProfile = function(value) {
      console.log($scope.userObject);
	    var responsePromise = $http.post("../services/index.php/user",$scope.userObject);
      responsePromise.success(function(data, status, headers, config) {
        
        /*Store data to  service*/
        //user.currentUser = data.userObject;
        //localStorage.currentUser = JSON.stringify(user.currentUser);
          
        //alert(data.status);
        console.log(data);
        //new user
        //window.location = '#/userDashboard';
      });
	};
  	
	$scope.ratingStates = [
	                       {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	                       {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	                       {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	                       {stateOn: 'glyphicon-heart'},
	                       {stateOff: 'glyphicon-off'}
	                     ];

	
});