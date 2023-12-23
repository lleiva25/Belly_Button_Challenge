const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

function init() {
    //Use D3 to select the dropdown menu
    ds.select(("#selDataset"));
    //Use D3 to select the dropdown menu
    let dataset = dropdownMenu.property("value");
    
    //Initialize x and y arrays
    let x: [];
    let y: [];
    //type: "bar" 
    
}