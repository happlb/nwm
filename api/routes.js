'use strict';
const express = require('express')
const router = express.Router();
router.get('/', (req,res) => {
    console.log('recipe id recieved :', req)

    let recipe_id = req.body.recipe_id;
    if (recipe_id == 1)
        res.send({"country": "Vietnam",
        "dish": "Authentic Pho",
            "recipe": "https://www.allrecipes.com/recipe/228443/authentic-pho/",
            "lat": 14.0583,
            "long": 108.,
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
        res.send('guac and nachos')
    else
        res.send('NaRecipe')
})

//router.get('/tasks', () => {/* another function*/})
module.exports = router;
