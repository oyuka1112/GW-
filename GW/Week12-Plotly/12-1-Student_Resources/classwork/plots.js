var trace = {
    x :["beer", "wine"],
    y : [22.7, 17.1],
    type : "bar" 
    // type: "line"
};
var layout = {
    title: "BAC by Drink", 
    xaxis: {title: "Drink"},
    yaxis: {title: "BAC"}
}

// Plotly.newPlot("plot", [trace], layout);

////For pie chart you need to chnage
// var trace = {
//     labels :["beer", "wine"],
//     balues : [22.7, 17.1],
//     type : "pie" 
//     // type: "line"
// };
// var layout = {
//     title: "BAC by Drink", 
//     xaxis: {title: "Drink"},
//     yaxis: {title: "BAC"}
// }

// Plotly.newPlot("plot", [trace], layout);