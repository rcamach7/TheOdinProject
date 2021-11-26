// Different Methods of attaching even listeners to buttons.
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => alert("Hello World"));

document.getElementById("btn2").addEventListener("click", clickMeGreeting);
function clickMeGreeting() {
    alert("Goodbye World");
}

// Some example of call backs
// Callbacks are just functions passed into other functions as arguments (as a parameter).
const carBrands = ["Ferrari", "Rolls Royce", "Lamborghini"];
carBrands.forEach( (car) => {
    console.log(car);
});

// e can be used to print info or target and modify the triggered element.
document.getElementById("btn3").addEventListener("click", function(e) {
    //console.log(e);
    e.target.style.background = 'blue';
});