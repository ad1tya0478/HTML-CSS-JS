// DOM Manipulation means using javascript to change the content, structure, or style of a web
// page while it's running 


/*
// Creating elements //
const plm = document.createElement("p");   // Creating a new HTML Element, a <p>
plm.innerText = "This is a text added dynamically";   // Setting the text content of the new <p> tag
document.body.appendChild(plm);   // First pointing to the body and then adding <p>, appendChild = adding a new element at the end of the line, always 
console.log(plm);
*/


/*
// Insert Elements //
const span = document.createElement("span");
span.innerText = "I am a span";

const plme = document.querySelector("p"); // Finds the p tag on othe page and stores it in plme.
// console.log(plme.nextElementSibling);
// document.body.insertBefore(span, plme);  // Placing the span element before the plme element inside the body, so that it will appear above 
// the plme element.
document.body.insertBefore(span, plme.nextElementSibling);  // Inserting span before the next sibling of plme, putting after plme but before the next element, in the middle.
*/

/*
// Modifying Content // 
const plm = document.querySelector("p"); // Queryselector selects the first element that matches a css-style, in this we are selecting p tag 
console.log(plm.innerHTML);  // innerhtml get or sets the HTML content inside an element. Show tags + text inside

plm.innerHTML = "<u>Hello</u> How are you doing.?";  // do not set innerHTML with user input, you open the gates to XSS attacks,
//  a hacker can put any malicious script in your code, to save yourself, use libraries like DOMPurify

const divl = document.querySelector("div");

console.log("Inner text: ", divl.innerText);  // innerText - doesn't show a text if it is hidden, slower
console.log("Text Content: ", divl.textContent); // textContent - get all text, hidden or not, better for performance and raw text
*/

/*
// Removing elements // 
let list = document.getElementById("mylist");
const remove = list.children[0];
list.removeChild(remove);  // Removechild - removes a specific child from a parent 

const plm = document.createElement("p");
list.replaceChildren(plm);  // Replace Child - Erase all existng children, the adds new ones(if any).

document.getElementById("removeMe").remove();  // Remove - Removes the elements itself, no parent needed.
*/

/*
//  Read, Write and Remove Attributes // 
const image = document.querySelector("img");

console.log(image.getAttribute('alt'));

image.setAttribute("src", "./wow.png");
image.setAttribute("alt", "Nasdaq Stock Exchange");

image.removeAttribute("height");

image.hasAttribute("src");  // True
image.hasAttribute("height"); // False
*/


/*
// Traversing/Navgating DOM //

// ParentElement and // parentNode
const span = document.getElementById("text");
console.log("Parent Element: ", span.parentElement); // ParentElement - Returns the parent if it's an element, use it when you only care about HTML Elements.
console.log("Parent Node: ", span.parentNode);  // parentNode - Returns any parent, element or not, use it when you might deal with non-elements too.

// Children and childNodes 
const main = document.getElementById("main-id");

console.log("children: ", main.children);
console.log("Child Node: ", main.childNodes);

console.log("First Child ", main.firstChild);
console.log("First Child Element ", main.firstElementChild);
*/

/*
// Manipulating Styles //
const p = document.getElementById("p-id");
console.log(p.style);
p.style.backgroundColor = "pink";
*/

/*
// Manipulating Classes //
const mainDiv = document.getElementById("main-id");
 console.log(mainDiv.className);

 mainDiv.className = "secondary-class";
 console.log(mainDiv.className);


console.log(mainDiv.classList);

mainDiv.classList.add("test");  // Add - Adds a class if it's not already here.

mainDiv.classList.remove("layout"); // Remove - Removes the class
 
mainDiv.classList.replace("main-class", "secondary-class");  // Replace - Swaps one class for another

console.log("Does it have test?", mainDiv.classList.contains("test"));  // Contains - Checks if the element has that class, return true or false

console.log("Does it have test?", mainDiv.classList.contains("main-class"));

mainDiv.classList.toggle("test");  // Toggle - Adds if it is missing, removes it if present.
*/

/*
// Controlling Visibilities // 
const mainDiv = document.getElementById("main-id");
mainDiv.style.display = "block";

mainDiv.style.visibility = "hidden";  // Visibilty - Element is hidden but still takes place, with this we can change the visibility of the object

mainDiv.style.opacity = "1";   // Opacity - Element is fully transparent, still there and clickable. Takes space and responds to events unless blocked.
*/






