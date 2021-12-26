'use strict'

document.getElementById('add').addEventListener('click', function(){
    let food_name = document.getElementById('food_name')
    let country_origin = document.getElementById('country_origin');
    let table = document.getElementById('info_table');
    let row_count = table.rows.length;
    let row = table.insertRow(row_count);
    row.insertCell(0).innerHTML = '<input type="button" value="Delete" onClick="delete_row(this)">';
    row.insertCell(1).innerHTML = food_name.value;
    row.insertCell(2).innerHTML = country_origin.value;
});

function delete_row(data){
    let index = data.parentNode.parentNode.rowIndex;
    let table = document.getElementById('info_table');
    let row_count = table.rows.length;
    let row = table.deleteRow(index);
}