var  trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 3, 4, 5],
    type: "scatter"
}
var  trace2 = {
    x: [1, 2, 3, 4, 5],
    y: [4, 6, 8, 10, 12],
    type: "scatter"
}

var layout = {
    title : "multiple scatter",
    xaxis : {
        title: "X",
        titlefont :{
            size: 18, 
            color: "#7f7f7f"
        }
    },
    yaxis: {
        title: "y"
    }
}
var data = [trace1, trace2]
Plotly.newPlot("plot", data)