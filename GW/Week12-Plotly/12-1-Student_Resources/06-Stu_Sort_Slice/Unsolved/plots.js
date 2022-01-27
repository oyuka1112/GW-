// Sort the data by Greek search results
var newData = data.sort((a,b) => 
b.greekSearchResults-a.greekSearchResults);
// Slice the first 10 objects for plotting
var top10 = newData.slice(0,10)
// Reverse the array to accommodate Plotly's defaults
var trace1 = [{
    x: top10.map(row => row.greekName),
    y: top10.map(row => row.greekSearchResults),
    type: "hbar"
}]
// Trace1 for the Greek Data

// data

// Apply the group bar mode to the layout

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", trace1)