app.controller('userDashboard', function($scope) {
  //service call with fbObject
  //If new user create one in application and return {created:true}
  //existing user {return full user data from system}
  //fbObject
  //if(newuser){
    //load registration form for remaining info
    window.location='#/userDashboard/accountDetails';
  //}
  //else{
    //load dashboard
    //window.location='#/userDashboard/dashboardTools';
  //}
  
  JSON.stringify(fbObject);
  $scope.fbObject = fbObject;
});