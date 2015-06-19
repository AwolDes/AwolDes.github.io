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
        displayCost:1,
        totalDosh:0,
        clickDosh:1,
        // 1st row
        cowDosh:0,
        piggybankDosh:0,
        walletDosh:0,
        // 2nd Row
        pocketMoneyDosh:0,
        paycheckDosh:0,
        websiteDosh:0,
        salaryDosh:0,
        // 3rd Row
        pizzaBusinessDosh:0,
        icecreamBusinessDosh:0,
        clothingStoreDosh:0,
        foodBusinessDosh:0,
        
        
        // Costs
        // 1st row
        clickCost:5,
        cowCost: 1,
        piggybankCost:100,
        walletCost:1500,
        // 2nd row
        pocketMoneyCost: 20000,
        paycheckCost: 50000,
        websiteCost:75000,
        salaryCost:100000,
        // 3rd row
        pizzaBusinessCost:150000,
        icecreamBusinessCost:200000,
        clothingStoreCost:300000,
        foodBusinessCost:400000,
        
        // Numbers of Makers
        // 1st row
        cows:0,
        piggybanks:0,
        wallets:0,
        // 2nd row
        pocketMoney:0,
        paycheck:0,
        website:0,
        salary:0,
        // 3rd row
        pizzaPlaces:0,
        icecreamPlaces:0,
        clothingStores:0,
        foodBusinesses:0,
        
        // Money Formats
        format: "",
        foodFormat:""
        
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
    $scope.dosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh)
    
    console.log($scope.dosh)
    // For the buy button
    // 1st Row
    $scope.cowState = "true";
    $scope.piggybankState = "true";
    $scope.clickerState = "true";
    $scope.walletState = "true";
    // 2nd Row
    $scope.pocketMoneyState = "true";
    $scope.paycheckState = "true";
    $scope.websiteState = "true";
    $scope.salaryState = "true";
    // 3rd row
    $scope.pizzaPlaceState = "true";
    $scope.icecreamPlaceState = "true";
    $scope.clothingStoreState = "true";
    $scope.foodBusinessState = "true";
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
            
            // Buy salary button state
            if ($scope.$storage.money >= $scope.$storage.salaryCost){
                $scope.salaryState = "";
                //console.log($scope.cowState);
            }else{
                $scope.salaryState = "disabled";
            }
            
            // Buy pizza place button state
            if ($scope.$storage.money >= $scope.$storage.pizzaBusinessCost){
                $scope.pizzaPlaceState = "";
                //console.log($scope.cowState);
            }else{
                $scope.pizzaPlaceState = "disabled";
            }
            
            // Buy ice cream button state
            if ($scope.$storage.money >= $scope.$storage.icecreamBusinessCost){
                $scope.icecreamPlaceState = "";
                //console.log($scope.cowState);
            }else{
                $scope.icecreamPlaceState = "disabled";
            }
            
            // Buy clothing store button state
            if ($scope.$storage.money >= $scope.$storage.clothingStoreCost){
                $scope.clothingStoreState = "";
                //console.log($scope.cowState);
            }else{
                $scope.clothingStoreState = "disabled";
            }
            
            // Buy clothing store button state
            if ($scope.$storage.money >= $scope.$storage.foodBusinessCost){
                $scope.foodBusinessState = "";
                //console.log($scope.cowState);
            }else{
                $scope.foodBusinessState = "disabled";
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
            
            if ($scope.$storage.foodBusinessCost >= 1000000){
                
                $scope.$storage.foodFormat = "M"; 
                $scope.$storage.displayCost = ($scope.$storage.foodBusinessCost/1000000);
            }else{
               $scope.$storage.displayCost = $scope.$storage.foodBusinessCost;
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
                $scope.$storage.clickCost = $scope.$storage.clickCost * 5;
                console.log('Clicker: ' + $scope.$storage.clickDosh);
            }
            
        };
    
   
    // Cash cow! 
    $scope.BuyCow = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.cowCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.cowCost;
            
                // Add some more dosh and more cost!
                $scope.$storage.cows += 1;
                
                $scope.$storage.cowDosh += 0.5//=($scope.$storage.cowDosh * 1.5); 
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh );
                
                $scope.$storage.cowCost = $scope.$storage.cowDosh * 3;
                console.log('Cows: ' + $scope.$storage.cowDosh);
            }
            
        };
    
    
    // Piggybanks!
    $scope.BuyPiggybank = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.piggybankCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.piggybankCost;
            
            //... Let the dosh roll in!
                // Add some more dosh and more cost!
                $scope.$storage.piggybanks += 1;
                $scope.$storage.piggybankDosh += 2 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh );
                $scope.$storage.piggybankCost = (100 + $scope.$storage.piggybankDosh * 7);
                 console.log('Piggys: ' + $scope.$storage.piggybankDosh);
            }
            
        };
    
    // Wallets!
    $scope.BuyWallet = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.walletCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.walletCost;
            
            //... Let the dosh roll in!
            
                // Add some more dosh and more cost!
                $scope.$storage.wallets += 1;
                $scope.$storage.walletDosh += 5 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh ); 
                $scope.$storage.walletCost = (1500 + $scope.$storage.walletDosh * 7);
                 console.log('Wallets: ' + $scope.$storage.walletDosh);
            }
            
        };
    
    
    // Pocket Money!
    $scope.BuyPocketMoney = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.pocketMoneyCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.pocketMoneyCost;
            
            //... Let the dosh roll in!
                // Add some more dosh and more cost!
                $scope.$storage.pocketMoney += 1;
                $scope.$storage.pocketMoneyDosh += 20 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh );
                $scope.$storage.pocketMoneyCost = (20000 + $scope.$storage.pocketMoneyDosh * 7);
                 console.log('Pocket Money: ' + $scope.$storage.pocketMoneyDosh);
            }
            
        };
    
    
    // Pay Checks!
    $scope.BuyPaycheck = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.paycheckCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.paycheckCost;
            
            //... Let the dosh roll in!
                // Add some more dosh and more cost!
                $scope.$storage.paycheck += 1;
                $scope.$storage.paycheckDosh += 100 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh );
                $scope.$storage.paycheckCost = (50000 + $scope.$storage.paycheckDosh * 10);
                 console.log('Paycheck: ' + $scope.$storage.paycheckDosh);
            }
            
        };
    
    // Websites!
    $scope.BuyWebsite = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.websiteCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.websiteCost;
            
            //... Let the dosh roll in!
            
                // Add some more dosh and more cost!
                $scope.$storage.website += 1;
                $scope.$storage.websiteDosh += 300 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh );
                $scope.$storage.websiteCost = (75000 + $scope.$storage.websiteDosh * 10);
                 console.log('Website: ' + $scope.$storage.websiteDosh);
            }
            
        };
    
    // Salaries!
    $scope.BuySalary = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.salaryCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.salaryCost;
            
            //... Let the dosh roll in!
                // Add some more dosh and more cost!
                $scope.$storage.salary += 1;
                $scope.$storage.salaryDosh += 500 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh );
                $scope.$storage.salaryCost = (100000 + $scope.$storage.salaryDosh * 7);
                 console.log('Website: ' + $scope.$storage.salaryDosh);
            }
            
        };
    
    // Pizzas!
    $scope.BuyPizza = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.pizzaBusinessCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.pizzaBusinessCost;
            
            //... Let the dosh roll in!
            
                // Add some more dosh and more cost!
                $scope.$storage.pizzaPlaces += 1;
                $scope.$storage.pizzaBusinessDosh += 750 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh );
                $scope.$storage.pizzaBusinessCost = (150000 + $scope.$storage.pizzaBusinessDosh * 7);
                 console.log('Pizza: ' + $scope.$storage.pizzaBusinessDosh);
            }
            
        };
    
    // Ice cream!
    $scope.BuyIcecream = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.icecreamBusinessCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.icecreamBusinessCost;
            
            //... Let the dosh roll in!
                // Add some more dosh and more cost!
                $scope.$storage.icecreamPlaces += 1;
                $scope.$storage.icecreamBusinessDosh += 1000 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh );
                $scope.$storage.icecreamBusinessCost = (200000 + $scope.$storage.pizzaBusinessDosh * 9);
                 console.log('Icecream: ' + $scope.$storage.icecreamBusinessDosh);
            }
            
        };
    
    // Clothing Stores!
    $scope.BuyClothing = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.clothingStoreCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.clothingStoreCost;
            
            //... Let the dosh roll in!
                // Add some more dosh and more cost!
                $scope.$storage.clothingStores += 1;
                $scope.$storage.clothingStoreDosh += 2000 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh );
                $scope.$storage.clothingStoreCost = (300000 + $scope.$storage.clothingStoreDosh * 10);
                 console.log('Clothing: ' + $scope.$storage.clothingStoreDosh);
            }
            
        };
    
    // Clothing Stores!
    $scope.BuyFood = function(){
        // If you got more money than the cost...
        
        if ($scope.$storage.money >= $scope.$storage.foodBusinessCost){
            
            // Take some money
            $scope.$storage.money -= $scope.$storage.foodBusinessCost;
            
            //... Let the dosh roll in!
           
                // Add some more dosh and more cost!
                $scope.$storage.foodBusinesses += 1;
                $scope.$storage.foodBusinessDosh += 5000 //=($scope.$storage.piggybankDosh * 1.7)
                $scope.$storage.totalDosh = ($scope.$storage.cowDosh + $scope.$storage.piggybankDosh + $scope.$storage.walletDosh + $scope.$storage.pocketMoneyDosh + $scope.$storage.paycheckDosh + $scope.$storage.websiteDosh + $scope.$storage.salaryDosh + $scope.$storage.pizzaBusinessDosh + $scope.$storage.icecreamBusinessDosh + $scope.$storage.clothingStoreDosh + $scope.$storage.foodBusinessDosh );
                $scope.$storage.foodBusinessCost = (400000 + $scope.$storage.foodBusinessDosh * 10);
                 console.log('Food: ' + $scope.$storage.foodBusinessDosh);
            }
            
        };
    
    
    // Whoops! Restart your game for a huge cost (but the multi!)
    $scope.reset = function(){
        $scope.$storage.money = 0;
        $scope.$storage.format = "";
        $scope.$storage.foodFormat="";
        
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
        
        $scope.$storage.websiteCost = 75000;
        $scope.$storage.websiteDosh = 0;
        $scope.$storage.website = 0;
        
        $scope.$storage.salaryCost = 100000;
        $scope.$storage.salaryDosh = 0;
        $scope.$storage.salary = 0;
        
        $scope.$storage.pizzaBusinessCost = 150000;
        $scope.$storage.pizzaBusinessDosh = 0;
        $scope.$storage.pizzaPlaces = 0;
        
        $scope.$storage.icecreamBusinessCost = 200000;
        $scope.$storage.icecreamBusinessDosh = 0;
        $scope.$storage.icecreamPlaces = 0;
        
        $scope.$storage.clothingStoreCost = 300000;
        $scope.$storage.clothingStoreDosh = 0;
        $scope.$storage.clothingStores = 0;
        
        $scope.$storage.foodBusinessCost = 400000;
        $scope.$storage.foodBusinessDosh = 0;
        $scope.$storage.foodBusinesses = 0;
        
        $scope.$storage.totalDosh = 0;
        
        
        
        // A multiplier??
    };
    
    
});




    

