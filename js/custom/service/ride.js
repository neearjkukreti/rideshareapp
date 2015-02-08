app.service("ride", function user($http) {
    this.ride = {};
    this.ride.id;
    this.ride.rdate = '2015-02-07';
    this.ride.rtime = '20:45:50';
    this.ride.host = '8';
    this.ride.car_id = '2';
    this.ride.rfrom = 'Delhi';
    this.ride.rto = 'Dehradun';
    this.ride.status = '1';
    this.ride.seats = '3';
    this.ride.rlat = '0.00';
    this.ride.rlong = '0.00';

    this.getRide = function () {
        return this.ride;
    };

    this.postRide = function () {
        alert('hi');
        var serviceUrl = '../service/index.php/ride/create';
        var responsePromise = $http.post(serviceUrl, this.getRide());

        responsePromise.success(function (data, status, headers, config) {
            //check response from service and update View
        });
        responsePromise.error(function (data, status, headers, config) {
            alert("AJAX failed!");
        });
    }

    this.validateRide = function () {
        //validateion code
        return true;
    }

});