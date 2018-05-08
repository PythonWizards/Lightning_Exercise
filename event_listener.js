// ======== Button 1 ========

// find the button using the ID "alert-button"
alertButton = document.getElementById('alert-button');

//define a function to be used when the button is clicked
const buttonPress = event => {
  alert('Ive been pressed');
};

// use add event listener to tell your javascript what to do and when to do it
alertButton.addEventListener('click', buttonPress);

// ======== Button 2 ========

// find the button using the ID "change-text"
changeButton = document.getElementById('change-button');

//define a function to be used when the button is clicked
const changeText = event => {
  textOptions = [
    'I have been changed!',
    'You have changed me!',
    'Why?!?!?!?!',
    'Stop It!!!',
    "Don't you dare click it again!",
    'You Monster',
  ];
  changeButton.innerHTML = textOptions[Math.floor(Math.random() * 6)];
};

// use add event listener to tell your javascript what to do and when to do it
changeButton.addEventListener('click', changeText);

// ======== Button 3 & 4 ========

// find the button using the ID "change-text"
addStarButton = document.getElementById('addStar-button');

//define a function to be used when the button is clicked
const addStars = event => {
  document.getElementById('stars').innerHTML += '*';
};

// use add event listener to tell your javascript what to do and when to do it
addStarButton.addEventListener('click', addStars);

// find the button using the ID "change-text"
removeStarButton = document.getElementById('removeStar-button');

//define a function to be used when the button is clicked
const removeStars = event => {
  document.getElementById('stars').innerHTML = document
    .getElementById('stars')
    .innerHTML.slice(0, -1);
};

// use add event listener to tell your javascript what to do and when to do it
removeStarButton.addEventListener('click', removeStars);

// ======== Input 1 & Button 5 ========
const copyTextInput = document.getElementById('copyText-input');
const copyTextButton = document.getElementById('copyText-button');

const copyText = event => {
  document.getElementById('copyText').innerHTML = copyTextInput.value;
};

copyTextButton.addEventListener('click', copyText);

// ======== Input 2 ========
const liveCopyInput = document.getElementById('liveCopy-input');

const liveCopyText = event => {
  document.getElementById('liveCopyText').innerHTML = liveCopyInput.value;
};

liveCopyInput.addEventListener('keyup', liveCopyText);

// ======== Button 6 ========
const hoverButton = document.getElementById('hover-button');

const makeRed = event => {
  hoverButton.style.color = 'red';
};

const makeBlack = event => {
  hoverButton.style.color = 'black';
};

hoverButton.addEventListener('mouseover', makeRed);
hoverButton.addEventListener('mouseout', makeBlack);

// delete all buttons!!
const deleteButton = document.getElementById('remove_Button');
const deleteAll = event => {
  console.log('Adios');
  let grabElement = document.querySelectorAll('button');
  for (let i = 0; i < grabElement.length; i++) {
    const deletion = grabElement[i].remove();
    console.log('i exist');
  }
};
deleteButton.addEventListener('click', deleteAll);


const parent = document.getElementById("parent")



const clickFunction = event => {

  var box = document.createElement("div");
  box.style.width = `${Math.floor(Math.random() * 200) + 50}px`;
  box.style.height = `${Math.floor(Math.random() * 200) + 50}px`;
  box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  parent.appendChild(box);
}

parent.addEventListener('click', clickFunction)