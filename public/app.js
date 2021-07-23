
import "https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js";


const start= document.querySelector("#start");
const stop= document.querySelector("#stop");


const coordinates =[];


start.addEventListener("click", () =>{
 //watchPosition will get position everytime browser thinks
 //the position changed
  navigator.geolocation.watchPosition( data => {
    console.log("hello");
   console.log(data);
   console.log(coordinates);
   coordinates.push([data.coords.longitude,data.coords.latitude]);
   window.localStorage.setItem("coordinates", JSON.stringify(coordinates));

   }, (error) => console.log(error),
   {
      enableHighAccuracy:true
   }
   

 );

});



  //mapbox expects the opposite of coordinates, it wants longitude and then latitude
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZS1ydG8xIiwiYSI6ImNrcmR4Y2Y3dDF3bTcydWxxenNlMTI4bmQifQ.aR6NAaPodQLDgePGeVQ7hQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:[13.40497, 51.520023],
zoom: 15
});

map.on('load', function () {
    map.addSource('route', {
    type: 'geojson',
    data: {
    type: 'Feature',
    properties: {},
    geometry: {
    type: 'LineString',
    coordinates:coordinates
    }
    }
    });
    map.addLayer({
    id: 'route',
    type: 'line',
    source: 'route',
    layout: {
    'line-join': 'round',
    'line-cap': 'round'
    },
    paint: {
    'line-color': '#FF0000',
    'line-width': 10
    }
    });
    });