// Define Man
elements.man = {
    color: "#FFD700",
    behavior: behaviors.HUMAN,
    category: "life",
    state: "solid",
    density: 1200
};

// Define Woman
elements.woman = {
    color: "#FF69B4",
    behavior: behaviors.HUMAN,
    category: "life",
    state: "solid",
    density: 1100
};
let controlledElement = null;

function controlElement(elementType) {
    controlledElement = elementType;
    console.log("Now controlling:", elementType);
}

// Example control usage
controlElement('man');  // Now controlling man
document.addEventListener('click', function(event) {
    if (controlledElement) {
        // Get the coordinates of the mouse click
        let x = event.clientX;
        let y = event.clientY;

        // Add the controlled element at the clicked position
        createElement(controlledElement, x, y);
    }
});
document.addEventListener('click', function(event) {
    if (controlledElement) {
        // Get the coordinates of the mouse click
        let x = event.clientX;
        let y = event.clientY;

        // Add the controlled element at the clicked position
        createElement(controlledElement, x, y);
    }
});
