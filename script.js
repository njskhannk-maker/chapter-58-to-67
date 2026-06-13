// let mainContent = document.getElementById("main-content");

// console.log(mainContent);

// let childElements = mainContent.children;

// console.log(childElements);

// let renderElements =
// document.getElementsByClassName("render");

// for(let i = 0; i < renderElements.length; i++){

//     document.write(
//         renderElements[i].innerHTML + "<br>"
//     );
// }

// document.getElementById("first-name").value =
// "Alex";

// document.getElementById("last-name").value =
// "Bank";

// document.getElementById("email").value =
// "alexbank@example.com";

// // i
// let mainContent =
// document.getElementById("main-content");

// console.log(mainContent);

// // ii
// let childElements =
// mainContent.children;

// console.log(childElements);

// // iii
// let renderElements =
// document.getElementsByClassName("render");

// for(let i = 0; i < renderElements.length; i++){

//     document.write(
//         renderElements[i].innerHTML + "<br>"
//     );
// }

// // iv
// document.getElementById("first-name").value =
// "Alex";

// // v
// document.getElementById("last-name").value =
// "Bank";

// document.getElementById("email").value =
// "alexbank@example.com";

// i. Get element of id "main-content" and assign it in a variable

// let mainContent = document.getElementById("main-content");


// // ii. Display all child elements of "main-content"

// let childElements = mainContent.children;

// for (let i = 0; i < childElements.length; i++) {
//     console.log(childElements[i]);
// }


// // iii. Get all elements of class "render" and show their innerHTML

// let renderElements = document.getElementsByClassName("render");

// for (let i = 0; i < renderElements.length; i++) {
//     document.write(renderElements[i].innerHTML + "<br>");
// }


// // iv. Fill input value whose element id is "first-name"

// document.getElementById("first-name").value = "Alex";


// // v. Repeat part iv for id "last-name" and "email"

// document.getElementById("last-name").value = "Bank";

// document.getElementById("email").value = "alexbank@example.com";



// QUESTION 2


// i. Node type of element having id="form-content"
let formContent = document.getElementById("form-content");
console.log("Node Type of form-content:", formContent.nodeType);

// ii. Node type of element having id="lastName" and its child node
let lastName = document.getElementById("lastName");
console.log("Node Type of lastName:", lastName.nodeType);
console.log("Child Node Type:", lastName.firstChild.nodeType);

// iii. Update child node of element having id="lastName"
lastName.firstChild.nodeValue = "Last Name: Shaikh";

// iv. Get first and last child of id="main-content"
let mainContent = document.getElementById("main-content");
console.log("First Child:", mainContent.firstElementChild);
console.log("Last Child:", mainContent.lastElementChild);

// v. Get next and previous siblings of id="lastName"
console.log("Previous Sibling:", lastName.previousElementSibling);
console.log("Next Sibling:", lastName.nextElementSibling);

// vi. Get parent node and node type of id="email"
let email = document.getElementById("email");
console.log("Parent Node:", email.parentNode);
console.log("Parent Node Type:", email.parentNode.nodeType);