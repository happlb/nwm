var recipe = new Vue({
    el: '#mainMap',
    data: {
        country: 'Vietnam',
        dish: 'Authentic Pho',
        recipe: 'https://www.allrecipes.com/recipe/228443/authentic-pho/'

    }
})

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
        "long": 108.2772

    },
    {
        "country": "Greece",
        "dish": "Souvlaki",
        "recipe": "https://www.allrecipes.com/recipe/228443/authentic-pho/",
        "lat": 39.0742,
        "long": 21.8243

    }
]

for (var i = 0; i < recipeList.length; i++) {
    var popup = new mapboxgl.Popup()
        .setHTML('<h3>' + recipeList[i].country + '</h3><a href="recipe.html">' + recipeList[i].dish + '</a>');


    var marker = new mapboxgl.Marker()
        .setLngLat([recipeList[i].long, recipeList[i].lat])
        .setPopup(popup)
        .addTo(map);
}