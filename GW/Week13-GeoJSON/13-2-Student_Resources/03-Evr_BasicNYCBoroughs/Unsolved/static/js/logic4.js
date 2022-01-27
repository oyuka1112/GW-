// Creating map object
var myMap = L.map("map", {
  center: [ -73.743332681963892, 40.738883099260399 ],
  zoom: 3
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

// If data.beta.nyc is down comment out this link
// var link = "http://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/" +
  "35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";


// Use this link to get the geojson data.
var link = "static/data/nyc.geojson";


// Get our GeoJSON data using d3.json
var data = d3.json(link)
// Create a function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(borough) {

}


// Get our GeoJSON data using d3.json

// Create a geoJSON layer with the retrieved data
// for the fillColor use the chooseColor function and pass in the borough object from the GeoJSON data
    
    // Call on each feature
    onEachFeature: function(feature, layer) {

    // Set mouse events to change map styling
    
      // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
      
       
      // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
      
      // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
      
    // Giving each feature a pop-up with information 

    }
}).addTo(myMap);
});
