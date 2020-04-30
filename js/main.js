mapboxgl.accessToken = 'pk.eyJ1IjoiaGFwcGxiIiwiYSI6ImNrOWtoNnJwMzA0MnAzZW5uajZhZncza2QifQ.l0fHJIJaiwamw4T6eJ9Hfw';

var recipeList = [];
makeReq();

function makeReq() {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:3000/tasks?");
    request.setRequestHeader("Content-Type", "application/json");
    request.send()  
    /*var params = {
        "recipe_id": 2
    }*/
    //request.send(JSON.stringify(params))
    request.onload = () => {
        if (request.status == 200) {
            console.log(request.response);
            recipeList = request.response;
            recipeList = JSON.parse(recipeList)
            genMap();
        } else {
            console.log("error");
        }
    }
}

function genMap() {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [40.52, 34.34],
        zoom: 1.25
    });


    for (var i = 0; i < recipeList.length; i++) {
       
        var popup = new mapboxgl.Popup()
            .setHTML('<h3>' + recipeList[i].country + '</h3><button  onclick="passVariable(this,' + i + ')">' + recipeList[i].dish + '</button>');

       /* var marker = new mapboxgl.Marker
            .setLngLat([30 , 30])
            .setLngLat([recipeList[i].long , recipeList[i].lat])
            .setPopup(popup)
            .addTo(map);*/
        var marker = new mapboxgl.Marker()
            .setLngLat([recipeList[i].long, recipeList[i].lat])
            .setPopup(popup)
            .addTo(map);
    }
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
