// Given the following objects
const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false
}

// make an array containing the objects to be cooked
const uncookedFood = [ hamburger, zucchini, chickenBreast, corn, steak]
// make an empty array that will store the objects after the function 'cooks' the meat
const cookedFood = []

// grill function, takes in an object and returns it with the boolean set to true
const grill = currentObject => {
    //return cooked food set to true
    currentObject.cooked = true
    // push the newly cooked object (still represented by 'currentObject') into the empty array cookedFood
    cookedFood.push(currentObject)
}

// for loop iterating over the objects in the uncookedFood array. 
for (let i = 0; i < uncookedFood.length; i++) {
    const currentObject = uncookedFood[i];
    console.log(currentObject)
    // call the grill function and pass in the currentObject. This is where the grilling happens.
    grill(currentObject)
}
console.log(cookedFood)