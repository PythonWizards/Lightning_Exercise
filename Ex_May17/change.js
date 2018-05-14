// Get the 'html' element using querySelector. Store it in a variable.
const htmlBackGround = document.querySelector('html')
    // set the backroundColor to 'lightyellow'
    htmlBackGround.style.backgroundColor = 'lightyellow'

// Get the 'section' element using querySelector. Store it in a variable.
const mainSection = document.querySelector('section')
    // Add a '1px dashed Black' border to the stored section
    mainSection.style.border = '1px dashed black'
    // also give the section a width of '40%'
    mainSection.style.width = '40%'
    // give the main section a 'textalign' property of center
    mainSection.style.textAlign = 'center'
    // give the main section a cursor of 'crosshair'
    mainSection.style.cursor = "crosshair"

// Get the 'sloppyClassNames' element using getElementsByClassName. Store it in a variable. Remember that the DOM will bring back an array, use brackets to pick the right element
const firstDiv = document.getElementsByClassName('sloppyClassNames')[0]
    // add a 'backgroundColor' of tomato to the class 'sloppyClassNames'
    firstDiv.style.backgroundColor = 'tomato'

// Get the 'sloppyClassNames' element using getElementsByClassName. Store it in a variable. See above instructions for dealing with this array
const secondDiv = document.getElementsByClassName('sloppyClassNames')[1]
    // add a 'backgroundColor' of goldenrod to the class 'sloppyClassNames'
    secondDiv.style.backgroundColor = 'goldenrod'

// Get the 'listofWords' element using getElementById. Store it in a variable.
const unorderedList = document.getElementById('listOfWords')
    // add a border of '2px solid magenta' to the unorderlist
    unorderedList.style.border = '2px solid magenta'
    // add a width of '40%'
    unorderedList.style.width = '40%'

// Get the 'li' elements using querySelectorAll. Store it in a variable. This returns a DOMString. We can perform methods on this DOMString as if it were an array. Here you should use a for loop to add a border of '0.5px dotted black' to each listItem.
const listItems = document.querySelectorAll('li')
    console.log(listItems)
    for (let i = 0; i < listItems.length; i++) {
        const currentListItem = listItems[i];
        currentListItem.style.border = '0.5px dotted black'
    }

