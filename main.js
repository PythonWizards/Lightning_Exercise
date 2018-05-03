const employeeList = [
  {
    id: '2',
    name: 'Chaz Vanderbilt',
    title: 'High Roller',
    age: '26',
  },
  {
    id: '5',
    name: 'John Dulaney',
    title: 'Lowly Developer',
    age: '29',
  },
  {
    id: '9',
    name: 'Chris Miller',
    title: 'Wizard',
    age: '32',
  },
  {
    id: '1',
    name: 'Chazzette Belmont',
    title: 'CEO',
    age: '30',
  },
];

const listElement = document.getElementById("array");

listElement.innerHTML = `
    <h3>${employeeList[1].name}</h3>
    <br>
    <p>${employeeList[1].title}</p>
    <br>
    <p>${employeeList[1].age}</p>
    <br>
    `;
