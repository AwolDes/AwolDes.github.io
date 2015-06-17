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
        totalDosh:0,
        clickDosh:1,
        
        cowDosh:0,
        piggybankDosh:0,
        walletDosh:0,
        
        // Costs
        clickCost:5,
        cowCost: 1,
        piggybankCost:100,
        walletCost:1500,
        // Numbers of Makers
        cows:0,
        piggybanks:0,
        wallets:0
        
        
    });
    
    /*
    $scope.makers = [
        {
            name:'Cash Cows',
            cost:$scope.$storage.cowCost,
            dosh:$scope.$storage.cowDosh,
            number:$scope.$storage.cows,
            buttonText:'Cow',
            function:'BuyCow()'
        },
        
        {
            name:'Puggy Banks;',
            cost:$scope.$storage.piggybankCost,
            dosh:$scope.$storage.piggybankDosh,
            number:$scope.$storage.piggybanks,
            buttonText:'Piggy Bank',
            function:'BuyPiggybank()'
        }
        
        
        ]*/
    
    
    // For the buy button
    $scope.cowState = "true";
    $scope.piggybankState = "true";
    $scope.clickerState = "true";
    $scope.walletState = "true";
    // So we can round to pretty numbers!
    $scope.Math = window.Math;
    
    // When user clicks moeny, it is increased
    $scope.GetMoney = function($localStorage) { 
        //Access the storage
        $scope.$storage.money += $scope.$storage.clickDosh;      
    };
    
    // Gets run on the controller intialisation
    // Checks the state of the button and other vairbales
    $scope.checkGameState = function(){
        
        $interval(function(){
            // Buy clicker button state
            if ($scope.$storage.money >= $scope.$storage.clickCost){
                $scope.clickerState = "";
                //console.log($scope.cowState);
            }else{
                $scope.clickerState = "disabled";
            }
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
            // Buy wallet button state
            if ($scope.$storage.money >= $scope.$storage.walletCost){
                $scope.walletState = "";
                //console.log($scope.cowState);
            }else{
                $scope.walletState = "disabled";
            }
            
        },50);
        
        // So when it loads it gets run
        // Run every 10th of a second to give the user a smooth looking money counter
        $interval(function(){$scope.$storage.money += $scope.$storage.totalDosh/100},10,0);
       
    };
    
    // Upgrade clicker!
    $scope.BuyClicker = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.clickCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.clickCost;
            
            //... Let the dosh roll in!
            
            // Add some more dosh and more cost!
                
                
                $scope.$storage.clickDosh = $scope.$storage.clickDosh*2 //=($scope.$storage.cowDosh * 1.5); 
                //$scope.$storage.money = ($scope.$storage.money + $scope.$storage.clickDosh);
                $scope.$storage.clickCost = $scope.$storage.clickCost * 10;
                console.log('Clicker: ' + $scope.$storage.clickDosh);
            }
            
        };
    
   
    // Cash cow! 
    $scope.BuyCow = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.cowCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.cowCost;
            
            //... Let the dosh roll in!
            if ($scope.$storage.cowDosh <= 0){
                // To get the dosh rolling in on first upgrade
                $scope.$storage.cowDosh += 0.5;
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh);
                $scope.$storage.cowCost += $scope.$storage.cowDosh * 1.2;
                $scope.$storage.cows += 1;
                
               
                console.log('Cows: ' + $scope.$storage.dosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.cows += 1;
                
                $scope.$storage.cowDosh += 0.5//=($scope.$storage.cowDosh * 1.5); 
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh);
                $scope.$storage.cowCost = $scope.$storage.cowDosh * 3;
                console.log('Cows: ' + $scope.$storage.cowDosh);
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
            if ($scope.$storage.piggybankDosh <= 0){
                // To get the dosh rolling in on first upgrade
                $scope.$storage.piggybankDosh += 2;
                $scope.$storage.piggybankCost = (100 + $scope.$storage.piggybankDosh * 7);
                $scope.$storage.piggybanks += 1;
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh);
                
               
                console.log('Piggys: ' + $scope.$storage.piggybankDosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.piggybanks += 1;
                $scope.$storage.piggybankDosh += 2 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh); 
                $scope.$storage.piggybankCost = (100 + $scope.$storage.piggybankDosh * 7);
                 console.log('Piggys: ' + $scope.$storage.piggybankDosh);
            }
            
        }
    };
    
    // Wallets!
    $scope.BuyWallet = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.walletCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.walletCost;
            
            //... Let the dosh roll in!
            if ($scope.$storage.walletDosh <= 0){
                // To get the dosh rolling in on first upgrade
                $scope.$storage.walletDosh += 5;
                $scope.$storage.walletCost = (1500 + $scope.$storage.walletDosh * 7);
                $scope.$storage.wallets += 1;
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh);
                
               
                console.log('Wallets: ' + $scope.$storage.walletDosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.wallets += 1;
                $scope.$storage.walletDosh += 5 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh); 
                $scope.$storage.walletCost = (1500 + $scope.$storage.walletDosh * 7);
                 console.log('Wallets: ' + $scope.$storage.walletDosh);
            }
            
        }
    };
    
    
    // Whoops! Restart your game for a huge cost (but the multi!)
    $scope.reset = function(){
        $scope.$storage.money = 0;
        
        $scope.$storage.clickCost = 5;
        $scope.$storage.clickDosh = 1;
        
        $scope.$storage.cowCost = 1;
        $scope.$storage.cows = 0;
        
        
        $scope.$storage.piggybankCost = 100;
        $scope.$storage.piggybanks = 0;
        
        $scope.$storage.walletCost = 1500;
        $scope.$storage.wallets = 0; 
        
        $scope.$storage.totalDosh = 0;
        $scope.$storage.cowDosh = 0;
        $scope.$storage.piggybankDosh = 0;
        $scope.$storage.walletDosh = 0;
        // A multiplier??
    };
    
    
});




    

