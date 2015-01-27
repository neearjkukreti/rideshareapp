app.controller('profile', function($scope,user) {
	
	$scope.userObject = user.currentUser;//fbObject;
	
	$scope.firstTimeUser = localStorage.firstTimeUser;
	$scope.userObj = {};
	$scope.userObj.firstName = $scope.userObject.first_name;
	$scope.userObj.lastName = $scope.userObject.last_name;
	
	$scope.gender = 'Other';
	$scope.rate = 0;
	$scope.max = 10;
	$scope.isReadonly = false;
	  
	
	$scope.hoveringOver = function(value) {
	    $scope.overStar = value;
	    $scope.percent = 100 * (value / $scope.max);
	};
	
	$scope.ratingStates = [
	                       {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	                       {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	                       {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	                       {stateOn: 'glyphicon-heart'},
	                       {stateOff: 'glyphicon-off'}
	                     ];

	
});