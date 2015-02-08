var app = angular.module('myApp', ['ui.bootstrap', 'ngAutocompletemap', 'ngMap', 'facebook', 'ui.router', 'ngProgress']);
/*Routing in route.js*/

/*Config FB App ID*/
app.config([
    'FacebookProvider',
    function (FacebookProvider) {
        var myAppId = '823509664375931';
        FacebookProvider.init(myAppId);
    }
]);

app.run(function ($rootScope, $location, ngProgress) {
    $rootScope.location = $location;

    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
    }

    $rootScope.$on('$stateChangeStart', function () {
        ngProgress.start();
        $('#loading').show()
    });

    $rootScope.$on('$stateChangeSuccess', function () {
        ngProgress.complete();
        $('#loading').hide();
    });

});

/*Root variables*/
var rideSearchInput = {};
//var login = false;
//var fbObject;
/*End of root variables*/

app.controller('mainCtrl', function ($scope, $timeout, $location, $http, Facebook, ngProgress, user, ride) {
    var userIsConnected = false;
    $scope.logged = false;

    /*User already logged in, page was refreshed*/
    if (user.islogin) {
        $scope.logged = true;
    }

    $scope.postRide = function () {
        $scope.loadUserDashboard();
    };
    $scope.offerRide = function () {
        ride.postRide();
    };

    $scope.logout = function () {
        user.logout();
        window.location.reload();
    };

    $scope.loginUser = function () {
        user.login($scope);
    };

    $scope.loadUserDashboard = function () {
        if ($location.path().indexOf('userDashboard') != -1) {
            window.location = '#/userDashboard/offerRide';
        }
        else {
            window.location = '#/userDashboard';
        }
        //($location.path() + "/offerRide");
    };
});