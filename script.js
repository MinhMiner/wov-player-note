// Generate grid

const gridContainer = document.getElementById("grid-container");

function generateGrid(rows, cols) {
    gridContainer.innerHTML = "";

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        const button = cell.appendChild(document.createElement("button"));
        button.classList.add("edit-button");
        button.addEventListener("click", () => openPopup(button));
        button.textContent = "✏️";

        gridContainer.appendChild(cell);
    }
}

// Generate popup

const popup = document.getElementById("popup");

function generatePopup() {
    popup.innerHTML = "";

    const roles = popup.appendChild(document.createElement("div"));
    roles.classList.add("popup-content");
    roles.classList.add("roles");

    const options = ["👍", "👎", "❓"];

    for (const option of options) {
        const button = document.createElement("button");
        button.classList.add("options");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(option));
        roles.appendChild(button);
    }

    const closeButton = popup.appendChild(document.createElement("button"));
    closeButton.classList.add("close-button");
    closeButton.addEventListener("click", closePopup);
    closeButton.textContent = "Close";
}

window.onload = () => {
    generateGrid(4, 4);
    generatePopup();
};


let activeButton = null;

function openPopup(button) {
    activeButton = button;
    popup.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
}

function selectOption(option) {
    if (activeButton) {
        activeButton.innerHTML = option;
    }
    closePopup();
}
