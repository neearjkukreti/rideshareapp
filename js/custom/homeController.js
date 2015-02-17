app.controller('homeController', function($scope,ride) {
    $scope.recentRides = [];
    //$scope.dt = new Date();
    $scope.minDate = new Date();
    $scope.showButtonBar = false;
    $scope.showWeekNumbers = false;
    
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
        var searchDate = "";
        try{
            searchDate = $scope.dt.getDate() + "-" + ($scope.dt.getMonth() + 1) + "-" + $scope.dt.getFullYear();
        }
        catch(e){
        }
        
        if($scope.result1.length !=0 && $scope.result2.length !=0 
            && $('#from').val() == $scope.result1 && $('#to').val() == $scope.result2
          ){
            
            window.location='#/search?source='+$scope.result1+'&destination='+$scope.result2+'&searchdate=' + searchDate;
        }
        else alert("Invalid Search Input");
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
        $scope.opened = !$scope.opened;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        showWeeks:'false'
    };

});