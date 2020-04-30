'use strict';
const express = require('express')
const router = express.Router();
router.get('/', (req,res) => {
   
    console.log(req.body, 'req')
   

    let recipe_id = req.body.recipe_id;
    if (recipe_id == 1)
        res.send({"country": "Vietnam",
        "dish": "Authentic Pho",
            "recipe": "https://www.allrecipes.com/recipe/228443/authentic-pho/",
            "lat": 14.0583,
            "long": 108,
            "ingredients": ['3 quarts fat - free chicken broth', '1 onion, sliced into rings', '2 tablespoons hoisin sauce',
            '1 tablespoon oyster sauce', '1 tablespoon minced garlic', '1/2 teaspoon ginger powder', '1/2 teaspoon curry powder',
            '1 pinch ground cinnamon', '1(16 ounce) package dried rice noodles', '1 roasted chicken'],
            "steps": ['Combine broth, onion, hoisin sauce, oyster sauce, garlic, ginger, curry, and cinnamon in a saucepan. Bring to a boil, reduce heat, and simmer until onions are tender, about 5 minutes.',
            'Place noodles in a large bowl and cover with hot water. Set aside until noodles are softened, about 15 minutes. Drain and rinse thoroughly.',
            'Pull meat from roasted chicken and thickly shred. Add to broth. Spoon broth and chicken over noodles.']})
    if (recipe_id == 2)
        res.send({
            "country": "Mexico",
            "dish": "Guacamole",
            "recipe": "https://www.allrecipes.com/recipe/14064/easy-guacamole/",
            "lat": 23,
            "long": -102,
            "ingredients": ['2 avocados', '1 small onion finely chopped', '1 clove garlic, minced',
                '1 ripe tomato, chopped', '1 lime, juiced', 'salt and pepper to taste'],
            "steps": ['Peel and mash avocados in a medium serving bowl', 'Stir in onion, garlic, tomato, lime juice, salt and pepper',
                'Season with remaining lime juice and salt and pepper to taste', 'Chill for half an hour to blend flavors.']})
    if (recipe_id == 3)
        res.send({
            "country": "India ",
            "dish": "Curried Coconut Chicken",
            "recipe": "https://www.allrecipes.com/recipe/68532/curried-coconut-chicken/",
            "lat": 20.5937,
            "long": 78.9629,
            "ingredients": ['2 pounds boneless skinless chicken breasts, cut into 1 / 2 - inch chunks',
                '1 teaspoon salt and pepper, or to taste',
                '1 ½ tablespoons vegetable oil',
                '2 tablespoons curry powder',
                '1/2 onion, thinly sliced',
                '2 cloves garlic, crushed',
                '1(14 ounce) can coconut milk',
                '1(14.5 ounce) can stewed, diced tomatoes',
                '1(8 ounce) can tomato sauce',
                '3 tablespoons sugar'],
            "steps": ['Season chicken pieces with salt and pepper.',
                'Heat oil and curry powder in a large skillet over medium-high heat for two minutes. Stir in onions and garlic, and cook 1 minute more. Add chicken, tossing lightly to coat with curry oil. Reduce heat to medium, and cook for 7 to 10 minutes, or until chicken is no longer pink in center and juices run clear',
                'Season with remaining lime juice and salt and pepper to taste',
                'Pour coconut milk, tomatoes, tomato sauce, and sugar into the pan, and stir to combine.Cover and simmer, stirring occasionally, approximately 30 to 40 minutes']
        })
    else
        res.send([{
            "country": "India ",
            "dish": "Curried Coconut Chicken",
            "recipe": "https://www.allrecipes.com/recipe/68532/curried-coconut-chicken/",
            "lat": 20.5937,
            "long": 78.9629,
            "ingredients": ['2 pounds boneless skinless chicken breasts, cut into 1 / 2 - inch chunks',
                '1 teaspoon salt and pepper, or to taste',
                '1 ½ tablespoons vegetable oil',
                '2 tablespoons curry powder',
                '1/2 onion, thinly sliced',
                '2 cloves garlic, crushed',
                '1(14 ounce) can coconut milk',
                '1(14.5 ounce) can stewed, diced tomatoes',
                '1(8 ounce) can tomato sauce',
                '3 tablespoons sugar'],
            "steps": ['Season chicken pieces with salt and pepper.',
                'Heat oil and curry powder in a large skillet over medium-high heat for two minutes. Stir in onions and garlic, and cook 1 minute more. Add chicken, tossing lightly to coat with curry oil. Reduce heat to medium, and cook for 7 to 10 minutes, or until chicken is no longer pink in center and juices run clear',
                'Season with remaining lime juice and salt and pepper to taste',
                'Pour coconut milk, tomatoes, tomato sauce, and sugar into the pan, and stir to combine.Cover and simmer, stirring occasionally, approximately 30 to 40 minutes']
        },
            {
                "country": "Mexico",
                "dish": "Guacamole",
                "recipe": "https://www.allrecipes.com/recipe/14064/easy-guacamole/",
                "lat": 23,
                "long": -102,
                "ingredients": ['2 avocados', '1 small onion finely chopped', '1 clove garlic, minced',
                    '1 ripe tomato, chopped', '1 lime, juiced', 'salt and pepper to taste'],
                "steps": ['Peel and mash avocados in a medium serving bowl', 'Stir in onion, garlic, tomato, lime juice, salt and pepper',
                    'Season with remaining lime juice and salt and pepper to taste', 'Chill for half an hour to blend flavors.']
            },
            {
                "country": "Vietnam",
                "dish": "Authentic Pho",
                "recipe": "https://www.allrecipes.com/recipe/228443/authentic-pho/",
                "lat": 14.0583,
                "long": 108.,
                "ingredients": ['3 quarts fat - free chicken broth', '1 onion, sliced into rings', '2 tablespoons hoisin sauce',
                    '1 tablespoon oyster sauce', '1 tablespoon minced garlic', '1/2 teaspoon ginger powder', '1/2 teaspoon curry powder',
                    '1 pinch ground cinnamon', '1(16 ounce) package dried rice noodles', '1 roasted chicken'],
                "steps": ['Combine broth, onion, hoisin sauce, oyster sauce, garlic, ginger, curry, and cinnamon in a saucepan. Bring to a boil, reduce heat, and simmer until onions are tender, about 5 minutes.',
                    'Place noodles in a large bowl and cover with hot water. Set aside until noodles are softened, about 15 minutes. Drain and rinse thoroughly.',
                    'Pull meat from roasted chicken and thickly shred. Add to broth. Spoon broth and chicken over noodles.']
            },
            {
                "country": "Italy",
                "dish": "Cannoli",
                "recipe": "https://www.allrecipes.com/recipe/8338/cannoli/",
                "lat": 41.8719,
                "long": 12.5674,
                "ingredients": ['1 cup confectioners sugar',
                '1 pint part - skim ricotta cheese',
                '1/2 cup blanched slivered almonds',
                '1/3 cup mini semi - sweet chocolate chips',  
                '1 tablespoon amaretto liqueur',
                '12 cannoli shells',
                '1 tablespoon confectioners sugar',
                '1 tablespoon unsweetened cocoa powder',
                '12 maraschino cherries'],
                "steps": ['In a large bowl, stir ricotta cheese with 1 cup confectioners sugar until combined. Add almonds, chocolate chips and almond liqueur.',
                    'Carefully spoon into cannoli shells (or pipe from a pastry bag), filling from the center out.',
                    'Sprinkle individual serving plates with powdered sugar and cocoa, or sprinkle on cannoli. Garnish plates with cherries.',
                'Note: 1/8 teaspoon almond extract mixed with 1 tablespoon water can be substituted for the almond liqueur.']
            }

            ])
})

module.exports = router;
