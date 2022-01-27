d3.select("body").on("change", updatePage);

function updatePage(){
    var dropDownMenu = d3.select("#selectOption")
    var id = dropDownMenu.property("id");
    var value = dropDownMenu.property("value")
    console.log(id);
    console.log(value);
}