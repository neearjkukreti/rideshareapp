app.service("ride",function user($http){  
  this.ride = {};
  this.ride.id;
  this.ride.rdate;
  this.ride.rtime;
  this.ride.host;
  this.ride.car_id;
  this.ride.rfrom;
  this.ride.rto;
  this.ride.status;
  this.ride.seats;
  this.ride.rlat;
  this.ride.rlong;

  this.getRide = function () {
    return this.ride;
  };

  this.postRide = function () {
    var responsePromise = $http.post("serviceURL",this.getRide());
          
    responsePromise.success(function(data, status, headers, config) {
      //check response from service and update View
    });
    responsePromise.error(function(data, status, headers, config) {      
      alert("AJAX failed!");
    });
  }
  
  this.validateRide = function () {
    //validateion code
    return true;
  }
  
});