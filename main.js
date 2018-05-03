// Array of employes set in Keyless objects
// Each Object in the array has the following information. They all are strings.:
// id: integer
// name: string
// title: string
// age: string

const employeeList = [
  {
    id: 2,
    name: 'Chaz Vanderbilt',
    title: 'High Roller',
    age: '26',
  },
  {
    id: 5,
    name: 'John Dulaney',
    title: 'Lowly Developer',
    age: '29',
  },
  {
    id: 9,
    name: 'Chris Miller',
    title: 'Wizard',
    age: '32',
  },
  {
    id: 1,
    name: 'Chazzette Belmont',
    title: 'CEO',
    age: '30',
  },
];

// get the 'array' div and 'bookmark' it by saving it in a variable
const listElement = document.getElementById('array');

// use the previously set variable to grab the 'array' div and use JS's .innerHTML built in function to inject HTML
listElement.innerHTML = `
    <div id=${employeeList[1].id} class="card">
        <h3>${employeeList[1].name}</h3>
            <br>
        <p>${employeeList[1].title}</p>
            <br>
        <p>${employeeList[1].age}</p>
            <br>
    </div>
    `;
