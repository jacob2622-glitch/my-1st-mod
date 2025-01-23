// Function to make selected humans fight
function makeSelectedHumansFight() {
    let selectedHumans = [];
    
    // Gather all selected humans
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let pixel = pixels[y][x];
            if (pixel && pixel.selected) {
                selectedHumans.push(pixel);
            }
        }
    }
    
    // Make them fight
    if (selectedHumans.length >= 2) {
        for (let i = 0; i < selectedHumans.length; i++) {
            selectedHumans[i].fighting = true;
        }
    }
}

// Add a button to select humans and make them fight
document.addEventListener('keypress', function(event) {
    if (event.key === 's') {
        // Toggle selection of humans
        let x = Math.floor(event.clientX / pixelSize);
        let y = Math.floor(event.clientY / pixelSize);
        let pixel = pixels[y][x];
        if (pixel && pixel.element === "human") {
            pixel.selected = !pixel.selected;
            console.log("Selected:", pixel);
        }
    }
    if (event.key === 'f') {
        // Make selected humans fight
        makeSelectedHumansFight();
    }
});

// Update human behavior to include fighting logic
elements.human.tick = function(pixel) {
    if (pixel.fighting) {
        let neighbors = getNeighbors(pixel.x, pixel.y, 1);
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (neighbor && neighbor.element === 'human' && neighbor.fighting) {
                neighbor.health -= 1;
                if (neighbor.health <= 0) {
                    neighbor.element = "blood"; // Change to blood when defeated
                    neighbor.fighting = false;
                }
            }
        }
        pixel.health -= 1;
        if (pixel.health <= 0) {
            pixel.element = "blood"; // Change to blood when defeated
            pixel.fighting = false;
        }
    }
};
