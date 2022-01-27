const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));
var fullName = d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].full_name));
var first_Item = d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]))
console.log(first_Item)
// var latitude = first_Item.map(a => a.location[2])
// var longitude  = first_Item.map(a => a.location.longitude)
// console(latitude, longitude)


// reading json data
d3.json(url).then(function(data){
    console.log(data);
})