app.controller('userDashboard', function($scope) {
  //service call with fbObject
  //If new user create one in application and return {created:true}
  //existing user {return full user data from system}
  
  //if(newuser){
    //load registration form for remaining info
    window.loation='#/userDashboard/accountDetails';
  //}
  //else{
    //load dashboard
    window.loation='#/userDashboard/dashboardTools';
  //}
  
  JSON.stringify(fbObject);
  $scope.fbObject = fbObject;
});