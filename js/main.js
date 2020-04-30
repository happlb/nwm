mapboxgl.accessToken = 'pk.eyJ1IjoiaGFwcGxiIiwiYSI6ImNrOWtoNnJwMzA0MnAzZW5uajZhZncza2QifQ.l0fHJIJaiwamw4T6eJ9Hfw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [40.52, 34.34],
    zoom: 1.25
});

var recipeList = [
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
        "country": "Mexico",
        "dish": "Guacamole",
        "recipe": "https://www.allrecipes.com/recipe/14064/easy-guacamole/",
        "lat":23,
        "long": -102,
        "ingredients": ['2 avocados', '1 small onion finely chopped', '1 clove garlic, minced',
            '1 ripe tomato, chopped', '1 lime, juiced', 'salt and pepper to taste'],
        "steps": ['Peel and mash avocados in a medium serving bowl', 'Stir in onion, garlic, tomato, lime juice, salt and pepper',
            'Season with remaining lime juice and salt and pepper to taste', 'Chill for half an hour to blend flavors.']
    }
]

for (var i = 0; i < recipeList.length; i++) {
    var popup = new mapboxgl.Popup()
        .setHTML('<h3>' + recipeList[i].country + '</h3><a   onclick="passVariable(this,'+i+')">' + recipeList[i].dish + '</a>');
        
   // <a href="link.html" onclick="passVariable(this)">Link</a>

    var marker = new mapboxgl.Marker()
        .setLngLat([recipeList[i].long, recipeList[i].lat])
        .setPopup(popup)
        .addTo(map);
}
function getRecipe(i) {
   

    console.log('I in main.js->', i);
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
}
