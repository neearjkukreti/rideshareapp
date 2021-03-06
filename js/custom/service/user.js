app.service("user",function user(Facebook, $http,$rootScope){
  this.isConnectedtoFb = false;
  this.islogin = false;
  this.firstTime = false;
  
  this.currentUser = {};
  this.currentUser.id;
  this.currentUser.fb_id;
  this.currentUser.firstname;
  this.currentUser.lastname;
  this.currentUser.gender;
  this.currentUser.email_id;
  this.currentUser.mobile;
  this.currentUser.dob;
  
  //extended info from user_detail
  this.currentUser.privacy = 0;
  this.currentUser.chat = 1;
  this.currentUser.pet = 0;
  this.currentUser.music = 1;
  this.currentUser.smoking = 1;
  this.currentUser.food = 1;
  this.currentUser.lang_known='English';
  this.currentUser.profession = '';
  this.currentUser.ext_info = '';
  
  this.getCurrentUser = function () {
    return this.currentUser;
  };
  this.offlinelogin = function($scope){
	  _self = this;
      /*Logged in with FB, check for user in app DB*/
	  response = '{"id":"10203200159989914","email":"neerajdoonmail@yahoo.com","first_name":"Neeraj","gender":"male","last_name":"Kukreti","link":"https://www.facebook.com/app_scoped_user_id/10203200159989914/","locale":"en_US","name":"Neeraj Kukreti","timezone":5.5,"updated_time":"2015-02-08T06:45:14+0000","verified":true}';
      var responsePromise = $http.post("../services/index.php/user",JSON.parse(response));
      
      responsePromise.success(function(data, status, headers, config) {
        if(data.status == 'USER_CREATED'){
          _self.firstTime = true;
        }
        else _self.firstTime = false;
        /*Persist user in local storage*/
        _self.saveUser(data.userObject,data.status);
        
        /*Update user service singleton*/
        _self.currentUser = data.userObject;
        
        if(_self.firstTime){
          $scope.loadUserDashboard();
        }
        else{
          $scope.logged = true;
        }
          console.log(_self.currentUser);
          //new user
          //window.location = '#/userDashboard';
      });
      responsePromise.error(function(data, status, headers, config) {
        alert("AJAX failed!");
      });
  };
  
  this.initUserFromSession = function(){   
  	try{
      if(localStorage.currentUser){
  		this.currentUser = JSON.parse(localStorage.currentUser);
        this.isConnected = true;
        this.islogin = true;
        this.firstTime = localStorage.firstTime == 'true'?true:false;
  	  }	
  	}
    catch(e){}
  };
  
  this.logout = function(){
    localStorage.removeItem("currentUser");
    localStorage.removeItem("firstTime");
    this.isConnected = false;
    this.islogin = false;
  };
  
  this.saveUserCar = function(cars){
	  this.currentUser.cars = cars;
	  localStorage.firstTime = JSON.stringify(this.currentUser);
  };
  
  this.login = function($scope) {
	  this.offlinelogin($scope);
	  return;
      _self = this;
      
      Facebook.login(function(response) {
      $scope.$apply(function() {
          if (response.status == 'connected') {            
            _self.isConnected = true;
            _self.islogin = true;
            $scope.logged = _self.islogin;            
            return _self.pullUserInfoFromFB($scope);
          }
          else{
            return false;
          }        
      });
      });
   };

  this.saveUser = function(input){
    localStorage.currentUser = JSON.stringify(input);
    localStorage.firstTime = JSON.stringify(user.firstTime);
  };
  
  this.pullUserInfoFromFB = function($scope) {
      _self = this;
      
      Facebook.api('/me', function(response) {
      $scope.$apply(function() {
          /*Logged in with FB, check for user in app DB*/
          var responsePromise = $http.post("../services/index.php/user",response);
          
          responsePromise.success(function(data, status, headers, config) {
            if(data.status == 'USER_CREATED'){
              _self.firstTime = true;
            }
            else _self.firstTime = false;
            /*Persist user in local storage*/
            _self.saveUser(data.userObject,data.status);
            
            /*Update user service singleton*/
            _self.currentUser = data.userObject;
            
            if(_self.firstTime){
              $scope.loadUserDashboard();
            }
            else{
              $scope.logged = true;
            }
	          console.log(_self.currentUser);
	          //new user
	          //window.location = '#/userDashboard';
          });
          responsePromise.error(function(data, status, headers, config) {
            alert("AJAX failed!");
          });
        //});        
      });
      });
   };
  
  this.initUserFromSession();
  console.log(this.currentUser);
});