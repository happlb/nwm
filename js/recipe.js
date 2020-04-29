var recipeList = [
    {
        "country": "Vietnam",
        "dish": "Authentic Pho",
        "recipe": "https://www.allrecipes.com/recipe/228443/authentic-pho/",
        "lat": 14.0583,
        "long": 108.,
        "ingredients": ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
        "steps": ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

    },
    {
        "country": "Greece",
        "dish": "Souvlaki",
        "recipe": "https://www.allrecipes.com/recipe/228443/authentic-pho/",
        "lat": 39.0742,
        "long": 21.8243

    }
]

var i = 0;

var recipe = new Vue({
    el: '#recipe',
    data: {
        country: recipeList[i].country,
        dish: recipeList[i].dish,

    }
})

var ingredients = new Vue({
    el: '#ingredients',
    data: {
        items: recipeList[i].ingredients
    }
})

var steps = new Vue({
    el: '#steps',
    data: {
        items: recipeList[i].steps
    }
})

var source = new Vue({
    el: '#source',
    data: {
       
         recipe: recipeList[i].recipe
    }
})

