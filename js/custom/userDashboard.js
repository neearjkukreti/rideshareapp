app.controller('userDashboard', function($scope, $location, user, $modal) {
	//console.log(user);
	$scope.userObject = user.getCurrentUser();//fbObject;
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
	if(user.firstTime == 'true'){
		$location.path($location.path() + "/profile");
		$scope.firstTimeUser = true;
		user.firstTime = false;
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

    $scope.loadWindow = function (target) {
        console.log(target);
        var modalInstance = $modal.open({
          templateUrl: 'view/'+ target + '.html',
          //controller: 'ModalInstanceCtrl',
          size: 'lg'
        });
        setTimeout(function(){ $($('.modal-dialog')[0]).addClass('modal-lg'); }, 50);
    };
    
    /*ng-click and ng-moveover not working correctly together. Hacked using jquery to achive function*/
    $('.tile').mouseover(function(event){
        var selected = this.textContent.trim().toLowerCase();
        if(selected == 'my ride'){
           $('#message').html("Select to get list of Your Rides");
        }
        else if(selected == 'profile'){
            $('#message').html("Select View/Update your Profile Info");
        }
        else if(selected == 'offer ride'){
            $('#message').html("Select to Post new ride");
        }
        else if(selected == 'messages'){
            $('#message').html("Notification Center");
        }        
        else{
            $('#message').html("Select above Operation to perform");
        }
    });
});