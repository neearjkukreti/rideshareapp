app.controller('homeController', function($scope) {
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
      window.location='#/search';
    }
    
    /*Init Carousal*/
    $scope.myInterval = 2000;
    var slides = $scope.slides = [];
    slides.push({image:'/rideshareapp/img/1.jpg',text:'Save Petrol'});
});