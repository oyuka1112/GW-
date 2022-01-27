var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
var top5 = sortedCities.slice(0,5)

var cityNames = top5.map(a => a.City);
// var cityGrowth = top5.map(a => a.Increase_from_2016)
var cityGrowth = top5.map(a => parseInt(a.Increase_from_2016));

// var trace = [{
//     x: cityNames,
//     y: cityGrowth,
//     type: "bar"
// }]
// layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis:{title: "City"},
//     yaxis: {title: "Growth"}
// }

// Plotly.newPlot("bar-plot", trace, layout)
var top7 = sortedCities.slice(0,7)

var cityNames7 = top7.map(a => a.City);
var cityPopulation = top7.map(a => parseFloat(a.population));

var trace2 = [{
    x: cityNames7,
    y: cityPopulation,
    type: "bar"
}]
layout2 = {
    title: "Most Populated Cities",
    xaxis:{title: "City"},
    yaxis: {title: "Population"}
}

Plotly.newPlot("bar-plot", trace2, layout2)
 




