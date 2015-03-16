app.controller('search', function($scope, $stateParams, $http, user) {

    console.log($stateParams.source + $stateParams.destination + $stateParams.searchdate);

    $scope.sourceLat = 1;//rideSearchInput.to[1].geometry.location.k;
    $scope.sourceLog = 1;//rideSearchInput.to[1].geometry.location.D;

    $scope.destLat = 1;//rideSearchInput.from[1].geometry.location.k;
    $scope.destLog = 1;//rideSearchInput.from[1].geometry.location.D;

    $scope.zoom = 5;
    $scope.resultCount = 0;

    var rideSearchInput = {};
    /*Source Location*/
    $scope.result1 = '';
    $scope.options1 = {
        country: 'in',
        types: '(cities)'
    };
    $scope.details1 = '';

    /*Destination Location*/
    $scope.result2 = '';
    $scope.options2 = {
        country: 'in',
        types: '(cities)'
    };
    $scope.details2 = '';   

    /*Serach button click from homepage*/    
    $scope.search = function() {
        rideSearchInput = {'from':[$scope.result1,$scope.details1],'to':[$scope.result2,$scope.details1]};
        var searchDate = "";
        try{
            searchDate = $scope.dt.getDate() + "-" + ($scope.dt.getMonth() + 1) + "-" + $scope.dt.getFullYear();
        }
        catch(e){
        }

        if($scope.result1.length !=0 && $scope.result2.length !=0 
           && $('#from').val() == $scope.result1 && $('#to').val() == $scope.result2
          ){

            window.location='#/search?source='+$scope.result1+'&destination='+$scope.result2+'&searchdate=' + searchDate;
        }
        else alert("Invalid Search Input");
    }
    
    
    
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
    
    $scope.clear = function () {
        $scope.dt = null;
    };

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = !$scope.opened;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        showWeeks:'false'
    };

});