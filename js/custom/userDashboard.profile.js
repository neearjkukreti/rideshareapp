app.controller('profile', function($scope,user,car, $http) {
	
	$scope.userObj = user.currentUser;//fbObject;
	
	//$scope.gender = 'Other';
	$scope.rate = 0;
	$scope.max = 10;
	$scope.isReadonly = false;	  
	$scope.car = {}; //new car
	$scope.mycars = $scope.userObj.cars;
	$scope.isCarCollapsed = true;
		
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
	
	$scope.saveCar = function(value) {
		$scope.car.user_id = $scope.userObj.id;
	    var responsePromise = $http.post("../services/index.php/car/create",$scope.car);
	    	responsePromise.success(function(data, status, headers, config) {
	    	console.log(data);
        	$scope.mycars = data.cars; // update view
        	user.saveUserCar(data.cars);
        	$scope.car = {};
        	$scope.isCarCollapsed = true;
	    });
	};
	
	$scope.updateCar = function(value) {
		console.log(value);
	    var responsePromise = $http.post("../services/index.php/car/update",value);
	    	responsePromise.success(function(data, status, headers, config) {
	    	console.log(data);
        	$scope.mycars = data.cars; // update view
        	user.saveUserCar(data.cars);
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