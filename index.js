// Write your code here!
// Remove the main element from the DOM
const main = document.getElementById('main');
main.remove();

// Create a new h1 element
const newHeader = document.createElement('h1');

// Assign an id of 'victory' to the new header
newHeader.id = 'victory';

// Set the text inside the new header
newHeader.textContent = 'Roman is the champion';

// Append the new header to the body
document.body.append(newHeader);
