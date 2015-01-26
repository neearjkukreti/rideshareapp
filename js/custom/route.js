app.config(function($stateProvider, $urlRouterProvider,FacebookProvider) {
    FacebookProvider.init("823509664375931");
    $stateProvider
        .state('home',{
                    url:'/',
                    templateUrl:'view/home.html',
                    controller: 'homeController'
        })
        .state('about',{
                    url:'/about',
                    templateUrl:'view/about.html',
                    controller: 'about'
        })
        .state('search',{
                    url:'/search',
                    templateUrl:'view/search.html',
                    controller: 'search'
        })
        .state('rideDetail',{
                    url:'/rideDetail',
                    templateUrl:'view/rideDetail.html',
                    controller: 'rideDetail'
        })
        /*.state('postRide',{
                    url:'/postRide',
                    templateUrl:'view/postRide.html',
                    controller: 'postRide'
        })*/
        .state('userDashboard',{
                    url:'/userDashboard',
                    templateUrl:'view/userDashboard.html',
                    controller: 'userDashboard'
        })
        .state('userDashboard.myRide',{
                    url:'/myRide',
                    templateUrl:'view/myRide.html',
                    controller: 'myRide'
        })
        .state('userDashboard.offerRide',{
                    url:'/offerRide',
                    templateUrl:'view/offerRide.html',
                    controller: 'offerRide'
        })
        .state('userDashboard.profile',{
        			url:'/profile',
        			templateUrl:'view/profile.html',
        			controller: 'profile'
        })
        .state('userDashboard.messages',{
        			url:'/messages',
        			templateUrl:'view/messages.html',
        			controller: 'messages'
        });
        
        $urlRouterProvider.otherwise('/');       
});

/*app.config(function($routeProvider,FacebookProvider) {
    FacebookProvider.init("823509664375931");
    $routeProvider
        .when('/', {
            templateUrl: 'view/home.html',
            controller: 'homeController'
        })
        .when('/about', {
            templateUrl: 'view/about.html',
            controller: 'about'
        })
        .when('/search', {
            templateUrl: 'view/search.html',
            controller: 'search'
        })
        .when('/rideDetail', {
            templateUrl: 'view/rideDetail.html',
            controller: 'rideDetail'
        })
        .when('/postRide', {
            templateUrl: 'view/postRide.html',
            controller: 'postRide'
        })
        .when('/userDashboard', {
            templateUrl: 'view/userDashboard.html',
            controller: 'userDashboard'
        })
        .otherwise({
            redirectTo: '/',
        });
});*/