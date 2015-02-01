app.service("car",function car($http,user){

  this.car = {};
  this.car.id;
  this.car.user_id = user.currentUser.id;
  this.car.plate_no = '';
  this.car.model = '';
  this.car.name = '';
  this.car.grade = '';
  this.car.sterio = '';
  this.car.rating = '';
  this.car.leather_seat = '';
  this.car.extra_info = '';

  /*all existing user cars*/  
  this.userCars = {};
  
  this.getCar = function (pos) {
    if(pos == -1) return this.car; 
    this.userCars[pos];
  };

  this.fetchExistingUserCars = function(){   
  	var responsePromise = $http.get("../services/index.php/usercars");
    _self = this;
    responsePromise.success(function(data, status, headers, config) {
      _self.car = data;
    });
    responsePromise.error(function(data, status, headers, config) {
      alert("AJAX failed!");
    });
  };

  this.saveUser = function(input){
    localStorage.currentUser = JSON.stringify(input);
    localStorage.firstTime = JSON.stringify(user.firstTime);
  };
  
  //this.fetchExistingUserCars();
});