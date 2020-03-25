// from data.js
var tableData = data;

// YOUR CODE HERE!

var tableQuique = d3.select('#table-quique');

function funcionParaInsertarDatos(data) {
    //where am I going to put the data? 
    data.forEach(element => {
        var row = tableQuique.append('tr');
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
    
};

// Execue the function I just ceated
funcionParaInsertarDatos(tableData);

// Select the button
var button = d3.select('#filter-btn');

// What to do whenever the button is clicked? It executes the function
// we created before

button.on('click', function () {
     var qqDateTime = d3.select('#datetime'); //first I need to find the key
     var qqValueOfDateTime = qqDateTime.property('value'); // second, i need to get the value inside the key
     console.log(qqDateTime);
     console.log(qqValueOfDateTime);

     var dataFiltered = tableData.filter(event => event.datetime === qqValueOfDateTime);
     console.log(dataFiltered);

   
     tableQuique.html('');
     funcionParaInsertarDatos(dataFiltered);
 });




