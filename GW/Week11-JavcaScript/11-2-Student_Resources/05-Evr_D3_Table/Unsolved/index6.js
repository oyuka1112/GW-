var button1 = d3.select("#click-me")
// click-me is id
var inputField = d3.select("#input-field")


function handleclick(){
    console.log("Hi, I'm a button");
    console.log(d3.event.target);
}
button1.console("click", handleclick)
// button1.console("mouseover", handleclick)
// button1.console("doubleClick", handleclick)

inputField.on("change", function(){
    var newValue = d3.event.target.value;
    console.log(newValue);
})