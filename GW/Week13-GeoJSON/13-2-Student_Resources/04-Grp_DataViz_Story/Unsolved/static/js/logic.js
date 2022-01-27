// Creating map object
var myMap = L.map("map", {
    center: [42, -71],
    zoom: 10
  });
  
// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Use this link to get the geojson data.
var link = "static/data/Fire_Districts.geojson"
var dep = "static/data/Fire_Departments.geojson"
// Get our GeoJSON data using d3.json
d3.json(link,function(data){
    console.log(data);

    L.geoJSON(data,{
        style:function (feature){
          return {
        weight:1.5,
        fillOpacity : 0.5,
        fillColor: "pink"}
        }}).addTo(myMap);
})
d3j