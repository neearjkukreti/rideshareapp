app.service("ride", function user($http) {
    this.currentRide = {};
    this.currentRide.id;
    this.currentRide.rdate;
    this.currentRide.rtime;
    this.currentRide.host;
    this.currentRide.car_id;
    this.currentRide.rfrom;
    this.currentRide.rto;
    this.currentRide.status = 1;
    this.currentRide.seats = 3;
    this.currentRide.available_seats = 3;
    this.currentRide.rlat = '0.00';
    this.currentRide.rlong = '0.00';
    this.currentRide.cars;

    this.getRide = function () {
        return this.currentRide;
    };

    this.postRide = function () {
        console.log(this.currentRide);
        var serviceUrl = '../rideshareappservice/index.php/ride/create';
        //var serviceUrl = '../service/index.php/ride/create';
        var responsePromise = $http.post(serviceUrl, this.getRide());

        responsePromise.success(function (data, status, headers, config) {
            console.log(data);//check response from service and update View
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