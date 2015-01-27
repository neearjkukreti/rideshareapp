app.controller('userDashboard', function($scope, $location, user) {
	//console.log(user);
	JSON.stringify(fbObject);
	$scope.fbObject = user.currentUser;//fbObject;
	$scope.currentPath = $location.path();
	$scope.oneAtATime = true;
	$scope.firstTimeUser = false;
  //service call with fbObject
  //If new user create one in application and return {created:true}
  //existing user {return full user data from system}
  //fbObject
  //if(newuser){
    //load registration form for remaining info
    //window.location='#/userDashboard/profile';
	if(localStorage.firstTimeUser == 'true'){
		$location.path($location.path() + "/profile");
		$scope.firstTimeUser = true;
		localStorage.firstTimeUser = false;
	}
	else {
		$location.path($location.path() + "/offerRide");
	}
  //}
  //else{
    //load dashboard
    //window.location='#/userDashboard/dashboardTools';
  //}
    
    /*Logic to show currently selected left nav as active*/
    $scope.getClass = function(path) {
        if ($location.path().indexOf(path)!=-1) {
          return "active";
        } else {
          return "";
        }
    }
    
    
});