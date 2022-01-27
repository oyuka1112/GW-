// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
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

// City markers
var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: "8,550,405"
},
{
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: "2,720,546"
},
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: "2,296,224"
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: "3,971,883"
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: "446,599"
}
];

// var marker = L.marker(cities[0].location,{
//   title: cities[0].name,
// }).addTo(myMap);

// marker.bindPopup("<h1> New York  </h1>" ,
//  " <h2> {cities[0].population} </h2> ")

// Add code to create a marker for each city below and add it to the map

// newyork;
// chicago;
// houston;
// la;
// omaha;

// for (var i = 0; i<cities.length; i++){
//   var city = cities[i];
//   L.marker(city.location)
//     .bindPopup("<h1>" + city.name + "</h1>  <h2> Population: "+ city.population + "</h2>")
//     .addTo(myMap);
// }
// with for loop
// cities.forEach(
//  city => L.marker(city.location)
//    .bindPopup(`<h1> ${city.name} </h1> 
               //<hr/>
//                <h2> Population: ${city.population}  </h2>`)
//    .addTo(myMap)
// );

for (var i = 0; i<cities.length; i++){
  L.circle(city[i].location, {
    fillOpacity: 0.2,
    color: "white",
    fillcolor: "purple",
    radius: markerSize(cities[i].population)

}).bindPopup("<h1>" + cities[i].name + "</h1>  <h2> Population: "+ cities[i].population + "</h2>")
.addTo(myMap);
}
