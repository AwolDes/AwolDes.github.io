var app = angular.module('GetPaid', ['ngStorage']);



app.run(function($rootScope) {
    // Standard variables to be used in other pages
    // Resuable code! :D
    $rootScope.title = "The Game";
    $rootScope.heading = "Get Paid!"
    
    
    
});

app.controller('GameController', function($scope, $interval, $localStorage){
    
    // Set default values
    $scope.$storage = $localStorage.$default({
        // Money
        money: 0,
        dosh:0,
        // Costs
        cowCost: 1,
        piggybankCost:100,
        // Numbers of Makers
        cows:0,
        piggybanks:0
        
        
    });
    
    
    // For the buy button
    $scope.cowState = "true";
    $scope.piggybankState = "true";
    // So we can round to pretty numbers!
    $scope.Math = window.Math;
    
    // When user clicks moeny, it is increased
    $scope.GetMoney = function($localStorage) { 
        //Access the storage
        $scope.$storage.money += 1;      
    };
    
    // Gets run on the controller intialisation
    // Checks the state of the button and other vairbales
    $scope.checkGameState = function(){
        
        $interval(function(){
            // Buy cow button state
            if ($scope.$storage.money >= $scope.$storage.cowCost){
                $scope.cowState = "";
                //console.log($scope.cowState);
            }else{
                $scope.cowState = "disabled";
            }
            // Piggybank state
            if ($scope.$storage.money >= $scope.$storage.piggybankCost){
                $scope.piggybankState = "";
                
            }else{
                $scope.piggybankState = "disabled";
            } 
            
        },50);
        
        // So when it loads it gets run
        $interval(function(){$scope.$storage.money += $scope.$storage.dosh},1000,0);
       
    };
    
    
   
    // Cash cow! 
    $scope.BuyCow = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.cowCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.cowCost;
            
            //... Let the dosh roll in!
            if ($scope.$storage.dosh <= 0){
                // To get the dosh rolling in on first upgrade
                $scope.$storage.dosh += 0.5;
                $scope.$storage.cowCost += $scope.$storage.dosh * 1.2;
                $scope.$storage.cows += 1;
                
               
                console.log($scope.$storage.dosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.cows += 1;
                $scope.$storage.dosh = ($scope.$storage.dosh * 1.5); 
                $scope.$storage.cowCost += $scope.$storage.dosh * 1.2;
                console.log($scope.$storage.dosh);
            }
            
        }
    };
    
    // Piggybanks!
    $scope.BuyPiggybank = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.piggybankCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.piggybankCost;
            
            //... Let the dosh roll in!
            if ($scope.$storage.dosh <= 0){
                // To get the dosh rolling in on first upgrade
                $scope.$storage.dosh += 1;
                $scope.$storage.piggybankCost += $scope.$storage.dosh * 1.2;
                $scope.$storage.piggybanks += 1;
                
               
                console.log($scope.$storage.dosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.piggybanks += 1;
                $scope.$storage.dosh = ($scope.$storage.dosh * 1.7); 
                $scope.$storage.piggybankCost += $scope.$storage.dosh * 1.5;
                console.log($scope.$storage.dosh);
            }
            
        }
    };
    
    
    // Whoops! Restart your game for a huge cost (but the multi!)
    $scope.reset = function(){
        $scope.$storage.money = 0;
        
        $scope.$storage.cowCost = 1;
        $scope.$storage.cows = 0;
        
        $scope.$storage.piggybankCost = 100;
        $scope.$storage.piggybanks = 0;
        
        $scope.$storage.dosh = 0;
        // A multiplier??
    };
    
    
});




    

