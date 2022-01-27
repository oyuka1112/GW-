// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels
var provider = Object.keys(data.us)
console.log(provider)

// Display the default plot
function init(){
  trace = {
    labels : provider,
    values : us,
    type: "pie"
  }
  Plotly.newPlot("pie", [trace])
}

// On change to the DOM, call getData()
d3.select("body").on("change", updateChart)
// Function called by DOM changes
function updateChart(){
   // Assign the value of the dropdown menu option to a variable
  var dropDownMenu = d3.select("#selData")
  var value = dropDownMenu.property("value")
  // Initialize an empty array for the country's data

  var y = [] 
  if (value === "Uk"){
    y = uk
  }
  else if(value === "Canada" ){
    y = canada
  }
  else if(value === "Us"){
    y = us
  }
 
  Plotly.restyle( "pie", "values", [y])
}
 
// Update the restyled plot's values
init()