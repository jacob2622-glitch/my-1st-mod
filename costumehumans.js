// Define Man
elements.man = {
    color: "#FFD700",
    behavior: [
        "XX|M2|XX",
        "XX|M1|XX",
        "XX|XX|XX"
    ],
    category: "life",
    state: "solid",
    density: 1200,
    tick: function(pixel) {
        // Check if the man is touching wood or tree
        if (isTouching(pixel.x, pixel.y, elements.wood) || isTouching(pixel.x, pixel.y, elements.tree)) {
            // Break the element and make it fall
            let targetElement = getElementAt(pixel.x, pixel.y);
            if (targetElement === elements.wood || targetElement === elements.tree) {
                // Break and make it fall
                setElementAt(pixel.x, pixel.y, elements.broken_wood);
            }
        }
    }
};

// Define Woman
elements.woman = {
    color: "#FF69B4",
    behavior: behaviors.HUMAN,
    category: "life",
    state: "solid",
    density: 1100,
    tick: function(pixel) {
        // Make the woman eat faster
        if (pixel.eating && pixel.eating > 0) {
            pixel.eating += 1; // Double the eating speed
        }
    }
};

// Define Broken Wood
elements.broken_wood = {
    color: "#8B4513",
    behavior: behaviors.POWDER,
    category: "debris",
    state: "solid",
    density: 500
};

// Control Mechanism
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
