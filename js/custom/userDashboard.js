app.controller('userDashboard', function($scope,$location) {
	JSON.stringify(fbObject);
	$scope.fbObject = fbObject;
	$scope.currentPath = $location.path();
  //service call with fbObject
  //If new user create one in application and return {created:true}
  //existing user {return full user data from system}
  //fbObject
  //if(newuser){
    //load registration form for remaining info
    //window.location='#/userDashboard/profile';
    $location.path($location.path() + "/profile");
  //}
  //else{
    //load dashboard
    //window.location='#/userDashboard/dashboardTools';
  //}
});