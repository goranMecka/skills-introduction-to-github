
const data = [
    ["Antonio", true, 5],
    ["Marija", false],
    ["Darko", true, 3],
    ["Mia Khalifa", true, 10]
    
  ];
  
function toCamelCase(inputString){
    return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();

}  
function createTableRow(name, voted, value){
    const tableRow = document.createElement('tr');


const nameCell = document.createElement('td');
nameCell.textContent = name;
tableRow.appendChild(nameCell)


 const statusCell = document.createElement('td');
 statusCell.textContent = voted ? 'Voted' : `Didn't vote`;
 tableRow.appendChild(statusCell);


 if (typeof value !== 'undefined'){
    const voteCell = document.createElement('td');
    voteCell.textContent = voted;
    tableRow.appendChild(voteCell);
 }

 const myTable = document.getElementById('voting-table')
 myTable.appendChild(tableRow);


}

const inputName = prompt('Enter a valid name');
const camelCaseName = toCamelCase(inputName);

let foundArrData = data.find(entry => entry[0].toLowerCase() === camelCaseName.toLowerCase());

if(foundArrData){
    createTableRow(foundArrData[0], foundArrData[1], foundArrData[2]);
}
else {
    alert('Name not found in the list')
}