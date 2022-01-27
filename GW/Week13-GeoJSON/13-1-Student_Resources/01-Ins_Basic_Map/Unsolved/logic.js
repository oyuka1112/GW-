// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.myMap("map", {
    center: [45.52, -122.67],
    zoom:13
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map

L.tileLayer("",{
attribution: "",
titleSize: 512,
maxZoom: 18,
zoomOffset: -1,
id: "mapbox/streets -v11",
accessToken: API_KEY
}).addTo(myMap);

var marker = L.marker([45.42, -122.67],{
    draggable: true,
    title: "My First Marker"
}).addTo(myMap);

marker.bindPopup("<b> Hello There! </b>")