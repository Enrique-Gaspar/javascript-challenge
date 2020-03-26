// from data.js, which is a list of dictionaries
var tableData = data;

// YOUR CODE HERE!
// Select where is the table in the html, add it here as a variable
var tableQuique = d3.select('#table-quique');

// once you know where the table is going to be, you have to add a function
// that insert the data when it is required.

function funcionParaInsertarDatos(data) {
    //For each 'element' in the dataset (in this case, calle 'data'), the function
    // will push the data into a row of the table (created before), but careful!
    // you have to specify that you want that information 'appended' in the table row 
    // abbreviated here as 'tr'.
    data.forEach(element => {
        var row = tableQuique.append('tr');
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
    
};

// Execue the function I just ceated
//funcionParaInsertarDatos(tableData);

//var button = d3.select('#filter-refr');
//button.on('click', href = 'index.html');

// Select the button
var button = d3.select('#filter-btn');

// What to do whenever the button is clicked? It executes the function
// we created before

button.on('click', function () {
    //first I need to find the key, in this case, the date
    var qqDateTime = d3.select('#datetime'); 
    // then, the function will retrieve the values inside the key
    var qqValueOfDateTime = qqDateTime.property('value'); 
    // finally, the function will print the values
     console.log(qqDateTime);
     console.log(qqValueOfDateTime);

     var dataFiltered1 = tableData.filter(event => event.datetime === qqValueOfDateTime);
    console.log(dataFiltered1);
    //tableQuique.html('');
     funcionParaInsertarDatos(dataFiltered1);
    
    //first I need to find the key, in this case, the city
    var qqCity = d3.select('#city'); 
    // then, the function will retrieve the values inside the key
    var qqValueOfCity = qqCity.property('value'); 
    // finally, the function will print the values
     console.log(qqCity);
     console.log(qqValueOfCity);

     var dataFiltered2 = tableData.filter(event => event.city === qqValueOfCity);
    console.log(dataFiltered2);
    //tableQuique.html('');
     funcionParaInsertarDatos(dataFiltered2);
    
    //first I need to find the key, in this case, the State
    var qqState = d3.select('#state'); 
    // then, the function will retrieve the values inside the key
    var qqValueOfState = qqState.property('value'); 
    // finally, the function will print the values
     console.log(qqState);
     console.log(qqValueOfState);

     var dataFiltered3 = tableData.filter(event => event.state === qqValueOfState);
    console.log(dataFiltered3);
    //tableQuique.html('');
     funcionParaInsertarDatos(dataFiltered3);
    
    //first I need to find the key, in this case, the Country
    var qqCountry = d3.select('#country'); 
    // then, the function will retrieve the values inside the key
    var qqValueOfCountry = qqCountry.property('value'); 
    // finally, the function will print the values
     console.log(qqCountry);
    console.log(qqValueOfCountry);
    
     var dataFiltered4 = tableData.filter(event => event.country === qqValueOfCountry);
    console.log(dataFiltered4);
    //tableQuique.html('');
     funcionParaInsertarDatos(dataFiltered4);
    
    //first I need to find the key, in this case, the shape
    var qqShape = d3.select('#shape'); 
    // then, the function will retrieve the values inside the key
    var qqValueOfShape = qqShape.property('value'); 
    // finally, the function will print the values
     console.log(qqShape);
     console.log(qqValueOfShape);

     var dataFiltered5 = tableData.filter(event => event.shape === qqValueOfShape);
     console.log(dataFiltered5);

     //tableQuique.html('');
     funcionParaInsertarDatos(dataFiltered5);
 });




