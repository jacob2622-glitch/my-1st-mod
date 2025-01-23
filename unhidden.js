// Iterate through all elements and reveal hidden ones
for (let element in elements) {
    if (elements[element].hidden) {
        elements[element].hidden = false; // Set hidden to false to make it visible
    }
}

// Control Mechanism (Optional)
let controlledElement = null;

function controlElement(elementType) {
    controlledElement = elementType;
    console.log("Now controlling:", elementType);
}

document.addEventListener('click', function(event) {
    if (controlledElement) {
        // Get the coordinates of the mouse click
        let x = event.clientX;
        let y = event.clientY;

        // Add the controlled element at the clicked position
        createElement(controlledElement, x, y);
    }
});
