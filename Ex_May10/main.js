// Grab Slide list (Returns as an Array)
const slides = document.querySelectorAll('#slides .slide');

// Grab Button element and store in a variable
const next = document.getElementById('next');
const previous = document.getElementById('previous');

// Ensure that the page has a starting point. We use let here because this needs to be 'mutable'.
let currentSlide = 0;

// Next Slide - Calls the gotoSlide function and passes in the current slide but adding 1.
const nextSlide = () => {
    goToSlide(currentSlide+1);
}

// Previous Slide - Calls the gotoSlide function and passes in the current slide but instead of adding it subtracts.
// We want to go backwards so we use subtraction
const previousSlide = () => {
    goToSlide(currentSlide-1);
}

// Go to new slide - Use this and pass in a position in the list of slides you wish to go. 
// For 'scalability', never hardcode what you pass in. Use a variable and append math to it.
const goToSlide = (n) => {
    // slides is the query selector we stored on line 2. Remember it is an array, thus the square brackets.
    // currentSlide is a number in the array at this point. We are just calling it and addind a class to the html element.
    slides[currentSlide].className = 'slide';

    // This is tricky, even for more seasoned developers.
    // We use the % operator to cycle back to zero if we’ve reached the end of the slides. 
    // The % operator divides two numbers and spits out the remainder. 
    currentSlide = (n+slides.length)%slides.length;

    // same as line 27. appending a class to the slide to make it show. I didnt bother with hiding the others 
    // as i used z-index in the CSS, which gives any slide with the 'showing' class highest priorit over all elements.
    slides[currentSlide].className = 'slide showing';
}

// setup for using the buttons to navigate forward or backwards onClick.
next.onclick = () => {
    nextSlide();
};
previous.onclick = () => {
    previousSlide();
};