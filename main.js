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

const arrayOfEmployees = document.getElementById("array");

arrayOfEmployees.innerHTML = `
    <h1>${employeeList[1].name}</h1>
    <h1>${employeeList[1].title}</h1>
    <h1>${employeeList[1].age}</h1>
    `;
