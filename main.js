// ====== Build object push to Array ======
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
  // ======== step 4 ========
  // Print the entire Array by iteration
  const arrayElement = document.getElementById('array')
  for (let i = 0; i < employeeList.length; i++) {
      const employee = employeeList[i];
      arrayElement.innerHTML += `
        <div id="${employee.id}" class="card">
                <h3>Name: ${employee.name}</h3>
                    <hr>
                <p>Title: ${employee.title}</p>
                <p>Age: ${employee.age}</p>
        </div>
        `
  }
    





















// ------------orthogonal--------------------------
const pureFunction = (anotherThing) => {        //|
    console.log("I am a pure function")         //|
    return ("I also only return one thing")     //|
}                                               //|
// -------------------------------------------------