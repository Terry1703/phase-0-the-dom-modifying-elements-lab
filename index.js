
const mainElement = document.querySelector('main#main');
if (mainElement) {
    mainElement.remove();
}

// Define newHeader and set its attributes and text content
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Your Name is the champion';

document.body.appendChild(newHeader);
