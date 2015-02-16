app.controller('homeController', function($scope,ride) {
    $scope.recentRides = [];
    $scope.dt = new Date();
    $scope.minDate = new Date();
	
	/*Source Location*/
    $scope.result1 = '';
    $scope.options1 = {
      country: 'in',
      types: '(cities)'
    };
    $scope.details1 = '';
    
    /*Destination Location*/
    $scope.result2 = '';
    $scope.options2 = {
      country: 'in',
      types: '(cities)'
    };
    $scope.details2 = '';   

    /*Serach button click from homepage*/    
    $scope.search = function() {
      rideSearchInput = {'from':[$scope.result1,$scope.details1],'to':[$scope.result2,$scope.details1]};
      window.location='#/search/delhi?destination=dehradun';
    }
    
    /*Init Carousal*/
    $scope.myInterval = 2000;
    var slides = $scope.slides = [];
    slides.push({image:'/rideshareapp/img/1.jpg',text:'Save Petrol'});
    
    
    /*fetch recent rides and update view*/
    ride.fetchRecentRides($scope);
    

   $scope.clear = function () {
     $scope.dt = null;
   };

   $scope.open = function($event) {
     $event.preventDefault();
     $event.stopPropagation();
     $scope.opened = true;
   };

   $scope.dateOptions = {
     formatYear: 'yy',
     startingDay: 1
   };
    
});