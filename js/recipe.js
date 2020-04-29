var recipeList = [
    {
        "country": "Vietnam",
        "dish": "Authentic Pho",
        "recipe": "https://www.allrecipes.com/recipe/228443/authentic-pho/",
        "lat": 14.0583,
        "long": 108.,
        "ingredients": ['3 quarts fat - free chicken broth','1 onion, sliced into rings','2 tablespoons hoisin sauce',
            '1 tablespoon oyster sauce','1 tablespoon minced garlic','½ teaspoon ginger powder','½ teaspoon curry powder',
            '1 pinch ground cinnamon','1(16 ounce) package dried rice noodles','1 roasted chicken'],
        "steps": ['Combine broth, onion, hoisin sauce, oyster sauce, garlic, ginger, curry, and cinnamon in a saucepan. Bring to a boil, reduce heat, and simmer until onions are tender, about 5 minutes.',
            'Place noodles in a large bowl and cover with hot water. Set aside until noodles are softened, about 15 minutes. Drain and rinse thoroughly.',
            'Pull meat from roasted chicken and thickly shred. Add to broth. Spoon broth and chicken over noodles.']

    },
    {
        "country": "Mexico",
        "dish": "Guacamole",
        "recipe": "https://www.allrecipes.com/recipe/14064/easy-guacamole/",
        "lat": 102.5528,
        "long": 23.6345,
        "ingredients": ['2 avocados', '1 small onion finely chopped', '1 clove garlic, minced',
            '1 ripe tomato, chopped', '1 lime, juiced', 'salt and pepper to taste'],
        "steps": ['Peel and mash avocados in a medium serving bowl', 'Stir in onion, garlic, tomato, lime juice, salt and pepper',
            'Season with remaining lime juice and salt and pepper to taste','Chill for half an hour to blend flavors.']
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

