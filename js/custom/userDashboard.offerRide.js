app.controller('offerRide', function ($scope, ride, user, $http) {
    //user ride service to do things
    $scope.rideObj = ride.currentRide;
    $scope.userObject = user.currentUser;
    //$scope.rideObj.cars = $scope.userObject.cars;
    $scope.rideObj.host = $scope.userObject.id;

    $scope.getCarDetails = function () {
        var userdetails = {"id": $scope.userObject.id, "type": "user_id"};
        var serviceUrl = '../rideshareappservice/index.php/car/getDetails';
        //var serviceUrl = '../service/index.php/car/getDetails';
        var responsePromise = $http.post(serviceUrl, userdetails);

        responsePromise.success(function (data, status, headers, config) {
            console.log(data.details);
            return data.details;
        });
        responsePromise.error(function (data, status, headers, config) {
            alert("AJAX failed!");
        });
    }
    $scope.rideObj.cars = $scope.getCarDetails();
    $scope.offerRide = function () {
        $scope.onSaveRide();
    };
    $scope.onSaveRide = function () {
        ride.postRide();
        /*if(ride.validateRide()) {
         ride.postRide();
         }
         else {
         alert('invalid ride input');
         }*/
    }

});