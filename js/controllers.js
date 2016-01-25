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
            
            {
			"id": 21,
			"title":"Chip Butty",
			"link":"http://www.wikihow.com/Make-a-Chip-Butty"

		},

		{
			"id": 22,
			"title":"Pepperoni Pasta",
			"link":"http://www.kevinandamanda.com/recipes/dinner/pepperoni-pizza-pasta.html"

		},

		{
			"id": 23,
			"title":"Chicken Skewers",
			"link":"http://www.taste.com.au/recipes/21164/barbecued+lime+and+mint+chicken+skewers?ref=collections,kebab-recipes"

		},

		{
			"id": 24,
			"title":"Lasange",
			"link":"http://www.taste.com.au/recipes/23005/lasagne"

		},

		{
			"id": 25,
			"title":"Salami & Cheese Sandwhich",
			"link":"http://www.taste.com.au/recipes/39936/salami+and+swiss+cheese+bagel+sandwich?ref=collections,sandwich-recipes"

		},

		{
			"id": 26,
			"title":"Burritos",
			"link":"http://www.taste.com.au/recipes/17618/beef+and+bean+burritos"

		},

		{
			"id": 27,
			"title":"Chicken Enchiladas",
			"link":"http://www.gimmesomeoven.com/best-chicken-enchiladas-ever/"

		},

		{
			"id": 28,
			"title":"Curried Sausages",
			"link":"http://www.taste.com.au/recipes/32769/curried+sausages"

		},

		{
			"id": 29,
			"title":"Steak",
			"link":"http://www.taste.com.au/recipes/28722/mixed+pepper+crusted+steak+with+mushroom+salad"

		},

		{
			"id": 30,
			"title":"Lamb Chops",
			"link":"http://www.taste.com.au/recipes/35292/rosemary+and+garlic+lamb+chops"

		},

		{
			"id": 31,
			"title":"Caremelized Salmon",
			"link":"http://pinchofyum.com/caramelized-salmon"

		},

		{
			"id": 32,
			"title":"Garlic Prawns",
			"link":"http://www.taste.com.au/recipes/7307/garlic+prawns"

		},

		{
			"id": 33,
			"title":"Noodle Stir Fry",
			"link":"http://www.taste.com.au/recipes/22276/speedy+mince+and+noodle+stir+fry"

		},

		{
			"id": 34,
			"title":"Pad Thai",
			"link":"http://www.taste.com.au/recipes/27420/pad+thai"

		},

		{
			"id": 35,
			"title":"Japanese-style Beef",
			"link":"http://www.taste.com.au/recipes/39291/japanese+style+beef+with+miso+mash+and+daikon+salad?"

		},

		{
			"id": 36,
			"title":"Beef Rendang",
			"link":"http://www.taste.com.au/recipes/20950/beef+rendang"

		},

		{
			"id": 37,
			"title":"Crispy Pancakes",
			"link":"http://www.taste.com.au/recipes/23670/banh+xeo+crispy+pancakes"

		},

		{
			"id": 38,
			"title":"Fried Rice",
			"link":"http://www.taste.com.au/recipes/20745/chinese+fried+rice"

		},

		{
			"id": 39,
			"title":"Korma",
			"link":"http://www.taste.com.au/recipes/35869/chicken+korma+with+greens"

		},

		{
			"id": 40,
			"title":"Butter Chicken",
			"link":"http://www.taste.com.au/recipes/40135/butter+chicken"

		},

		{
			"id": 41,
			"title":"Curry Puffs",
			"link":"http://www.taste.com.au/recipes/22682/curry+puffs"

		},

		{
			"id": 42,
			"title":"Madras Curry",
			"link":"http://www.taste.com.au/recipes/28452/madras+curry"

		},

		{
			"id": 43,
			"title":"Prawn Caesar",
			"link":"http://www.taste.com.au/recipes/5261/prawn+caesar"

		},

		{
			"id": 44,
			"title":"Fish Pie",
			"link":"http://www.taste.com.au/recipes/4484/fish+pie"

		},

		{
			"id": 45,
			"title":"Mini Meat Pies",
			"link":"http://www.taste.com.au/recipes/9461/mini+meat+pies"

		},

		{
			"id": 46,
			"title":"Pavlova",
			"link":"http://www.taste.com.au/recipes/14031/pavlova"

		},

		{
			"id": 47,
			"title":"Chicken & Bacon Burger",
			"link":"http://www.taste.com.au/recipes/34054/chicken+and+bacon+burger"

		},

		{
			"id": 48,
			"title":"Lamb & Proscutto Burger",
			"link":"http://www.taste.com.au/recipes/21429/lamb+and+prosciutto+burger"

		},

		{
			"id": 49,
			"title":"Bruschetta Pasta",
			"link":"http://www.taste.com.au/recipes/4499/bruschetta+pasta"

		},

		{
			"id": 50,
			"title":"Mexican Omlette",
			"link":"http://www.taste.com.au/recipes/7358/mexican+omelette"

		}
            
            
            
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