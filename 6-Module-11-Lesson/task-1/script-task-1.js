/**
 * We have a list of elements on html page
 * 1. Print a text content of elements
 * 2. Add element 'Coke'
 * 3. Color text in list in red
 */

const elements = document.querySelectorAll('li');
elements.forEach(el => console.log(el.textContent));

const ul = document.querySelector('ul');
const cokeNode = document.createElement('li');
// cokeNode.append(document.createTextNode('Coke'));
// cokeNode.innerText = 'Coke';
cokeNode.textContent = 'Coke';
ul.append(cokeNode);

document.querySelectorAll('li').forEach(el => (el.style.color = 'Red'));
