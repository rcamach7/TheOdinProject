// Sends entire array
const cars = ["Lexus LFA", "Porsche GT2 RS", "Rolls Royce Drophead"];
cars[3] = "Lexus LS400"
document.getElementById("carBrands").innerHTML = cars;

// Sends an object, also known as JSON, but only a specific key / member
let jason = {
    "name": "Jason",
    "age": 26
}
document.getElementById("myNameBox").innerHTML = jason.name;

// Sends a text file that will generate a UL with LI items based on the array.
const oatMealRecipe = ["Water", "Milk", "Old Fashioned Oatmeal", "Honey"];

// Generate UL
let listBuilder = "<ul>";
for (let i = 0; i < oatMealRecipe.length; i++) {
    listBuilder = listBuilder + "<li>" + oatMealRecipe[i] + "</li>";
}
listBuilder = listBuilder + "</ul>";
// Send text file, for our list to be generated
document.getElementById("recipeHolder").innerHTML = listBuilder;

// Build new element, then inserts it into the DOM! 
const div = document.createElement("div");
const text = document.createTextNode("INSERTION OF VIRUS");
div.style.color = "yellow";
div.setAttribute("id", "virusDiv");
div.appendChild(text);

const currElement = document.getElementById("firstMainElement");
currElement.appendChild(div);




