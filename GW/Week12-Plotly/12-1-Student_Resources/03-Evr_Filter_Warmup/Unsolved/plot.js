// Filter the data for movies with an IMDb rating greater than 8.9
//  and then graph each title on the x-axis and the respective metascore on the y-axis.
function filterMovieRatings(data){
    return data.imdbRating > 8.9;
}
// 1. Use the filter method to create a custom filtering function
//  that returns the movies with a rating greater than 8.9
var filteredMovies = topMovies.filter(filterMovieRatings)

// 2. Use filter() to pass the function as its argument

//  Check to make sure your are filtering your movies.
console.log(filteredMovies)
// 3. Use the map method with the arrow function to return all the filtered movie titles.
// var filteredMovieTitle = filteredMovies.map(function (movies){
//     return movies.title;
// })
// console.log(filteredMovieTitle)
//  Check your filtered movie titles.

// 4. Use the map method with the arrow function to return all the filtered movie metascores.
titles = filteredMovies.map(movies => movies.title)
//  Check your filtered movie metascores.
ratings = filteredMovies.map(movie => movie.metascore)
// 5. Create your trace.
trace1 = [{
    x: titles,
    y: ratings,
    type: "bar"
}];

// 6. Create the data array for our plot
var data = trace1;

// 7. Define our plot layout

layout = {
    title: "Movie Ratings over 8.9",
    xaxis: {title: "Novie title"},
    yaxis: {title: "Ratings"}
}
// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout)