angular.module('app.controllers', [])

.controller('recipeControl', function($scope, $http) {
    /*$http.get('js/recipes.json')
        .success(function(data){
        $scope.recipes = data;
    })*/
    var recipeList = {
        
        "recipes":[
            {
                "id":1,
                "title":"Bacon Egg Cups",
                "link":"http://www.food.com/recipe/bacon-and-egg-cups-116152"
            },
            {
                "id":2,
                "title": "Triple Cheese Toastie",
                "link":"http://boroughmarket.org.uk/kappacaseins-three-cheese-toastie"
            },
            {
                "id":3,
                "title": "Butterfly Salmon",
                "link":"http://www.food.com/recipe/marinated-grilled-butterflied-salmon-127959"
            },
            
            {
                "id":4,
                "title": "Prawns with Gnocchi",
                "link":"http://allrecipes.com.au/recipe/17572/prawns-with-gnocchi.aspx?o_is=Hub_TopRecipe_4"
            },
            
            {
                "id":5,
                "title": "Spicy Chicken Stir Fry",
                "link":"http://www.taste.com.au/recipes/27205/spicy+chicken+and+cashew+stir+fry?ref=collections,stir-fry-recipes"
            },
            
            {
                "id":6,
                "title": "Sticky Chicken",
                "link":"http://allrecipes.com/recipe/143082/sweet-sticky-and-spicy-chicken/"
            },
            
            {
                "id":7,
                "title": "Pasta Bake",
                "link":"http://www.taste.com.au/recipes/23518/best+ever+macaroni+cheese?ref=collections,pasta-bake-recipes"
            },
            
            {
                "id":8,
                "title": "Lamb Roast",
                "link":"http://www.taste.com.au/recipes/1717/rosemary+and+garlic+roast+lamb"
            },
            
            {
                "id":9,
                "title": "Chipotle Mango Chicken",
                "link":"http://www.tonyastaab.com/2012/08/chipotle-mango-chicken-recipe.html"
            },
            
            {
                "id":10,
                "title": "Baked Potatoes & Chicken Skillet",
                "link":"http://roxanashomebaking.com/slow-baked-potatoes-and-chicken-skillet-recipe/"
            },
            
            {
                "id":11,
                "title": "Creamy Potato Bake",
                "link":"http://www.taste.com.au/recipes/1758/creamy+potato+bake"
            },
            
            {
                "id":12,
                "title": "Caesar Salad",
                "link":"http://www.taste.com.au/recipes/17139/caesar+salad"
            },
            
            {
                "id":13,
                "title": "Baked Indian Fish Pilaf",
                "link":"http://www.taste.com.au/recipes/22860/baked+indian+fish+pilaf?ref=collections,barramundi-recipes"
            },
            
            {
                "id":14,
                "title": "Beef Nachos",
                "link":"http://www.taste.com.au/recipes/7539/beef+nachos"
            },
            
            {
                "id":15,
                "title": "Sushi",
                "link":"http://www.taste.com.au/recipes/18216/sushi"
            },
            
            {
                "id":16,
                "title": "Homemade Pizza",
                "link":"http://www.taste.com.au/recipes/collections/pizza+recipes"
            },
            
            {
                "id":17,
                "title": "Banoffee Pies",
                "link":"http://www.taste.com.au/recipes/2350/banoffee+pies"
            },
            
            {
                "id":18,
                "title": "Fish & Chips",
                "link":"http://www.taste.com.au/recipes/1960/beer+battered+fish+and+chips"
            },
            
            {
                "id":19,
                "title": "Crispy Pork Tacos",
                "link":"http://www.seriouseats.com/recipes/2010/07/no-waste-tacos-de-carnitas-with-salsa-verde-recipe.html"
            },
            
            {
                "id":20,
                "title": "Beef Burgers",
                "link":"http://www.taste.com.au/recipes/34743/homemade+beef+burger"
            },
            
            
            
        ]

    }
    $scope.recipe = recipeList.recipes[0];
    
    //$scope.keys = $scope.recipes.keys("one");
    $scope.newRecipe = function(){
        
        var random = recipeList.recipes[Math.floor(Math.random() * recipeList.recipes.length)];
        
        $scope.recipe = random;
        console.log(recipeList.recipes[0])
        console.log(random);
    }
})