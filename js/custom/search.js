app.controller('search', function($scope, $stateParams, $http, user) {

    console.log($stateParams.source + $stateParams.destination + $stateParams.searchdate);

    $scope.sourceLat = 1;//rideSearchInput.to[1].geometry.location.k;
    $scope.sourceLog = 1;//rideSearchInput.to[1].geometry.location.D;

    $scope.destLat = 1;//rideSearchInput.from[1].geometry.location.k;
    $scope.destLog = 1;//rideSearchInput.from[1].geometry.location.D;

    $scope.zoom = 5;
    $scope.resultCount = 0;

    var rideSearchInput = {};
    
    rideSearchInput.source = $stateParams.source;
    rideSearchInput.destination = $stateParams.destination;
    
    if($stateParams.searchdate){
        rideSearchInput.searchdate = $stateParams.searchdate;
    }
    else{
        rideSearchInput.searchdate = "";
    }
    
    $scope.rideSearchInput = rideSearchInput;
    var responsePromise = $http.get("../services/index.php/search",rideSearchInput);
    responsePromise.success(function(data, status, headers, config) {
        $scope.avialableRideList = data.searchdata;
        $scope.resultCount = $scope.avialableRideList.length;
    });
    responsePromise.error(function(data, status, headers, config) {
        alert("AJAX failed!");
    });

    $scope.applyride = function (rideId){
        var inputData = {};
        inputData.userid = user.currentUser.id;
        inputData.rideid = rideId;

        var responsePromise = $http.post("../services/index.php/ride/apply",inputData);
        responsePromise.success(function(data, status, headers, config) {
            alert(JSON.stringify(data));
        });
    }

});