var app = angular.module('GetPaid', ['ngStorage']);



app.run(function($rootScope) {
    // Standard variables to be used in other pages
    // Resuable code! :D
    
    $rootScope.heading = "Get Doshed, Get Paid!"
    
    
    
});

app.controller('GameController', function($scope, $interval, $localStorage){
    
    // Set default values
    $scope.$storage = $localStorage.$default({
        // Money
        money: 0,
        displayMoney:0,
        totalDosh:0,
        clickDosh:1,
        
        cowDosh:0,
        piggybankDosh:0,
        walletDosh:0,
        pocketMoneyDosh:0,
        paycheckDosh:0,
        websiteDosh:0,
        salaryDosh:0,
        
        
        // Costs
        clickCost:5,
        cowCost: 1,
        piggybankCost:100,
        walletCost:1500,
        pocketMoneyCost: 20000,
        paycheckCost: 50000,
        websiteCost:75000,
        salaryCost:100000,
        
        // Numbers of Makers
        cows:0,
        piggybanks:0,
        wallets:0,
        pocketMoney:0,
        paycheck:0,
        website:0,
        salary:0,
        
        // Money Formats
        format: ""
        
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
    $scope.pocketMoneyState = "true";
    $scope.paycheckState = "true";
    $scope.websiteState = "true";
    $scope.salaryState = "true";
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
            
            // Buy wallet button state
            if ($scope.$storage.money >= $scope.$storage.walletCost){
                $scope.walletState = "";
                //console.log($scope.cowState);
            }else{
                $scope.walletState = "disabled";
            }
            
            // Buy pocket money button state
            if ($scope.$storage.money >= $scope.$storage.pocketMoneyCost){
                $scope.pocketMoneyState = "";
                //console.log($scope.cowState);
            }else{
                $scope.pocketMoneyState = "disabled";
            }
            
            // Buy pocket money button state
            if ($scope.$storage.money >= $scope.$storage.paycheckCost){
                $scope.paycheckState = "";
                //console.log($scope.cowState);
            }else{
                $scope.paycheckState = "disabled";
            }
            
            // Buy website button state
            if ($scope.$storage.money >= $scope.$storage.websiteCost){
                $scope.websiteState = "";
                //console.log($scope.cowState);
            }else{
                $scope.websiteState = "disabled";
            }
            
            // Buy pocket money button state
            if ($scope.$storage.money >= $scope.$storage.salaryCost){
                $scope.salaryState = "";
                //console.log($scope.cowState);
            }else{
                $scope.salaryState = "disabled";
            }
            
        },50);
        
        // So when it loads it gets run
        // Run every 10th of a second to give the user a smooth looking money counter
        $interval(function(){
            // Add more money and display the money
            $scope.$storage.money += ($scope.$storage.totalDosh/100)
            $scope.$storage.displayMoney = $scope.$storage.money;
            // Check if it's in the millions
            if ($scope.$storage.money >=1000000){
                $scope.$storage.format = "M";
                $scope.$storage.displayMoney = ($scope.$storage.money/1000000);
            } else{
                $scope.$storage.format = "";
            }
        
        },10,0);
       
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
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh);
                $scope.$storage.cowCost += $scope.$storage.cowDosh * 1.2;
                $scope.$storage.cows += 1;
                
               
                console.log('Cows: ' + $scope.$storage.dosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.cows += 1;
                
                $scope.$storage.cowDosh += 0.5//=($scope.$storage.cowDosh * 1.5); 
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh);
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
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh);
                
               
                console.log('Piggys: ' + $scope.$storage.piggybankDosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.piggybanks += 1;
                $scope.$storage.piggybankDosh += 2 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh); 
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
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh);
                
               
                console.log('Wallets: ' + $scope.$storage.walletDosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.wallets += 1;
                $scope.$storage.walletDosh += 5 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh); 
                $scope.$storage.walletCost = (1500 + $scope.$storage.walletDosh * 7);
                 console.log('Wallets: ' + $scope.$storage.walletDosh);
            }
            
        }
    };
    
    // Pocket Money!
    $scope.BuyPocketMoney = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.pocketMoneyCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.pocketMoneyCost;
            
            //... Let the dosh roll in!
            if ($scope.$storage.pocketMoneyDosh <= 0){
                // To get the dosh rolling in on first upgrade
                $scope.$storage.pocketMoneyDosh += 20;
                $scope.$storage.pocketMoneyCost = (20000 + $scope.$storage.pocketMoneyDosh * 7);
                $scope.$storage.pocketMoney += 1;
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh);
                
               
                console.log('Pocket Money: ' + $scope.$storage.pocketMoneyDosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.pocketMoney += 1;
                $scope.$storage.pocketMoneyDosh += 20 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh); 
                $scope.$storage.pocketMoneyCost = (20000 + $scope.$storage.pocketMoneyDosh * 7);
                 console.log('Pocket Money: ' + $scope.$storage.pocketMoneyDosh);
            }
            
        }
    };
    
    // Pay Checks!
    $scope.BuyPaycheck = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.paycheckCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.paycheckCost;
            
            //... Let the dosh roll in!
            if ($scope.$storage.paycheckDosh <= 0){
                // To get the dosh rolling in on first upgrade
                $scope.$storage.paycheckDosh += 100;
                $scope.$storage.paycheckCost = (50000 + $scope.$storage.pocketMoneyDosh * 7);
                $scope.$storage.paycheck += 1;
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh);
                
               
                console.log('Paycheck: ' + $scope.$storage.paycheckDosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.paycheck += 1;
                $scope.$storage.paycheckDosh += 100 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh); 
                $scope.$storage.paycheckCost = (50000 + $scope.$storage.paycheckDosh * 10);
                 console.log('Paycheck: ' + $scope.$storage.paycheckDosh);
            }
            
        }
    };
    
    // Websites!
    $scope.BuyWebsite = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.websiteCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.websiteCost;
            
            //... Let the dosh roll in!
            if ($scope.$storage.websiteDosh <= 0){
                // To get the dosh rolling in on first upgrade
                $scope.$storage.websiteDosh += 300;
                $scope.$storage.websiteCost = (75000 + $scope.$storage.websiteDosh * 12);
                $scope.$storage.website += 1;
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh);
                
               
                console.log('Website: ' + $scope.$storage.websiteDosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.website += 1;
                $scope.$storage.websiteDosh += 100 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh); 
                $scope.$storage.websiteCost = (75000 + $scope.$storage.websiteDosh * 10);
                 console.log('Website: ' + $scope.$storage.websiteDosh);
            }
            
        }
    };
    
    // Salaries!
    $scope.BuySalary = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.salaryCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.salaryCost;
            
            //... Let the dosh roll in!
            if ($scope.$storage.salaryDosh <= 0){
                // To get the dosh rolling in on first upgrade
                $scope.$storage.salaryDosh += 500;
                $scope.$storage.salaryCost = (100000 + $scope.$storage.salaryDosh * 7);
                $scope.$storage.salary += 1;
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh);
                
               
                console.log('Salary: ' + $scope.$storage.salaryDosh);
            
            }else{
                // Add some more dosh and more cost!
                $scope.$storage.salary += 1;
                $scope.$storage.salaryDosh += 100 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh); 
                $scope.$storage.salaryCost = (100000 + $scope.$storage.salaryDosh * 7);
                 console.log('Website: ' + $scope.$storage.salaryDosh);
            }
            
        }
    };
    
    
    // Whoops! Restart your game for a huge cost (but the multi!)
    $scope.reset = function(){
        $scope.$storage.money = 0;
        $scope.$storage.format = "";
        
        $scope.$storage.clickCost = 5;
        $scope.$storage.clickDosh = 1;
        
        $scope.$storage.cowCost = 1;
        $scope.$storage.cows = 0;
        $scope.$storage.cowDosh = 0;
        
        
        $scope.$storage.piggybankCost = 100;
        $scope.$storage.piggybanks = 0;
        $scope.$storage.piggybankDosh = 0;
        
        $scope.$storage.walletCost = 1500;
        $scope.$storage.wallets = 0;
        $scope.$storage.walletDosh = 0;
        
        $scope.$storage.pocketMoneyCost = 20000;
        $scope.$storage.pocketMoneyDosh = 0;
        $scope.$storage.pocketMoney = 0;
        
        $scope.$storage.paycheckCost = 50000;
        $scope.$storage.paycheckDosh = 0;
        $scope.$storage.paycheck = 0;
        
        $scope.$storage.totalDosh = 0;
        
        
        
        // A multiplier??
    };
    
    
});




    

