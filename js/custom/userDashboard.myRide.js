app.controller('myRide', function($scope,myride, user, $http) {
    $scope.userid = user.currentUser.id;
    $scope.myOfferedRides = myride.offeredRides;
    $scope.myAppliedRides = myride.appliedRides;
    
    //$scope.oneAtATime = true;
    $scope.getAppliedRides = function(userid){
        var service = "../services/index.php/ride/show/" +userid+"/apply";
        console.log(service);;
        var responsePromise = $http.post(service);
        
        responsePromise.success(function (data, status, headers, config) {
            console.log(data);
            if(data.status == 'success'){
                $scope.myAppliedRides = data.rides;
            }            
        });
        responsePromise.error(function (data, status, headers, config) {
            alert("AJAX failed!");
        });
    }
    $scope.getHostedRides = function(userid){
        var service = "../services/index.php/ride/show/" +userid+"/offer";
        console.log(service);
        var responsePromise = $http.post(service);
        
        responsePromise.success(function (data, status, headers, config) {
            console.log(data);
            if(data.status == 'success'){
                $scope.myOfferedRides = data.rides;
            }
            
        });
        responsePromise.error(function (data, status, headers, config) {
            alert("AJAX failed!");
        });
    }
});