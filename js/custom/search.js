app.controller('search', function($scope, $http,user) {
  /*$scope.sample = function() {
    alert('sample method called');
    console.log('sample method called');
  }*/   
  if(typeof(Storage) !== "undefined") {
      localStorage.setItem("rideSearchInput", rideSearchInput);
  }
      
  try{
    $scope.sourceCity = rideSearchInput.from[0];
    $scope.destinationCity = rideSearchInput.to[0];
  }
  catch(e){
    /*If coming directly hitting serach, re-direct to homepage*/
    if(typeof(Storage) !== "undefined") {
      if(localStorage.getItem("rideSearchInput")){
        rideSearchInput = localStorage.getItem("rideSearchInput");
        $scope.sourceCity = rideSearchInput.from[0];
        $scope.destinationCity = rideSearchInput.to[0]; 
      }
    }
    else window.location='#/';
  }

  /*$('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });*/

  
  $scope.sourceLat = rideSearchInput.to[1].geometry.location.k;
  $scope.sourceLog = rideSearchInput.to[1].geometry.location.D;
  
  $scope.destLat = rideSearchInput.from[1].geometry.location.k;
  $scope.destLog = rideSearchInput.from[1].geometry.location.D;
  
  $scope.zoom = 5;
  $scope.resultCount = 5;
  console.log(rideSearchInput);
  
  
  var responsePromise = $http.get("../services/index.php/search",rideSearchInput);
  responsePromise.success(function(data, status, headers, config) {
 $scope.avialableRideList = data.searchdata;
 
    console.log(data);
    
  });
  responsePromise.error(function(data, status, headers, config) {
    alert("AJAX failed!");
  });
  

$scope.applyride=function(ride_id)

	{
	$scope.applydata.rideid=ride_id;
	$scope.applydata.userid=user.id;
	console.log($scope.applydata);

	 var responsePromise = $http.get("../services/index.php/ride/apply", $scope.applydata);
  	responsePromise.success(function(data, status, headers, config) {
 	$scope.avialableRideList = data.searchdata;
 
    	console.log(data);
    
  });
  responsePromise.error(function(data, status, headers, config) {
    alert("AJAX failed!");
  });

}

  
});