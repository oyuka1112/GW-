console.log(data);


// Trace1 for the Greek Data
Greek_Names = {
    x: data.map(element => element.pair),
    y: data.map(element => element.greekSearchResults),
    name: "Greek Result",
    type: "bar"
}

// Trace 2 for the Roman Data
trace1 = {
    x: data.map(element => element.pair),
    y: data.map(element => element.romanSearchResults),
    name: "Roman Result",
    type: "bar"
}

// Combining both traces
var data = [Greek_Names, trace1]

// Apply the group barmode to the layout
layout = {
    title: "Greek vs Roman search result",
    xaxis: {title: "Search times",
    font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
    yaxis: {title : "Names"}
}

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout)