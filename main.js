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
// console.log(employeeList)

// ======== Step 1 ========
console.log(employeeList.keys)
listElement.innerHTML += `
    ${employeeList}
`;

// ======== Step 2 ========
console.log(employeeList[0])

// ======== Step 3 ========
const outputElement = document.getElementById('selected_Output');
outputElement.innerHTML += `
    <div id=${employeeList[1].id} class="card">
        <h3>${employeeList[1].name}</h3>
            <hr>
        <p>${employeeList[1].title}</p>
        <p>${employeeList[1].age}</p>
    </div>
    `;


// ======== step 4 ========
// const outputElement = document.getElementById('selected_Output');
// for (let i = 0; i < employeeList.length; i++) {
//         const loopOutput = employeeList[i];
//         outputElement.innerHTML += `
//             <div id=${loopOutput.id} class="card">
//                 <h3>Name: ${loopOutput.name}</h3>
//                 <hr>
//                 <p>Title: ${loopOutput.title}</p>
//                 <p>Age: ${loopOutput.age}</p>
//             </div>
    
//     `;}
