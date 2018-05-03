// find the button using the ID "alert-button"
alertButton = document.getElementById("alert-button");
console.log(alertButton);

const buttonPress = (event) => {
    console.log("Ive been pressed")
}
x = 1;
alertButton.addEventListener("click", buttonPress)
