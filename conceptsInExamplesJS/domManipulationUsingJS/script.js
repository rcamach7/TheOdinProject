// Main container div that already exists, and I will be injecting elements into it via JS
const containerDiv = document.getElementById("container");

// Inject new text elements with X text. (injects it below any other existing elements)
//Also added styling inline, AND by giving it a class and using external styling
const newText = document.createElement("p");
newText.style.color = "red";
newText.textContent = "Hey I'm red!";
containerDiv.appendChild(newText);

const newTextTwo = document.createElement("h3");
newTextTwo.classList.toggle("myLargeText");
newTextTwo.textContent = "I’m a blue h3!";
containerDiv.appendChild(newTextTwo);

// Create a new div, inject contents inside of it, then append it to the main container.
const myDiv = document.createElement("div");
myDiv.classList.toggle("secondContainer");

const textInsideDiv = document.createElement("h1");
textInsideDiv.textContent = "I'm in a div";
myDiv.appendChild(textInsideDiv)

const textInsideDiv2 = document.createElement("p");
textInsideDiv2.textContent = "ME TOO!";
myDiv.appendChild(textInsideDiv2);

containerDiv.appendChild(myDiv);

