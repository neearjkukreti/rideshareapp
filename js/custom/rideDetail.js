app.controller('rideDetail', function($scope,$stateParams,$http) {
	 $scope.rideId = $stateParams.id;
	 $scope.ride;
	 var responsePromise = $http.get("../services/index.php/ride/showRide/" + $scope.rideId);
 	 responsePromise.success(function (data, status, headers, config) {
 		 if(data.status == 'success'){
 			$scope.ride = data.ride;
 		 }
     });
});