// Declarations
const gridContainer = document.getElementById("grid-container");
const popupOverlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");
let enableOneIconNoteOnly = false;
let disableTextNote = false;
let disableSuggestIconNote = false;
let gridSize = 4;
let activeButton = null;

// Generate grid

function createEditButton(e, cellWeight) {
    const button = e.appendChild(document.createElement("button"));
    button.classList.add("edit-button");
    button.addEventListener("click", () => openPopup(button));
    button.style.backgroundImage = `url(./images/marker.png)`;
    
    button.style.width = `${cellWeight * 0.12}vw`;
    button.style.height = `${cellWeight * 0.12}vw`;
    
    return button;
}

function generateGrid(rows, cols) {
    gridContainer.innerHTML = "";
    let cellWeight, cellHeight;
    switch (cols) {
        case 3:
            gridContainer.style.gridTemplateColumns = "repeat(3, 30vw)";
            cellWeight = 30;
            cellHeight = 27;
            break;
        case 5:
            gridContainer.style.gridTemplateColumns = "repeat(5, 18vw)";
            cellWeight = 18;
            cellHeight = 16;
            break;
        default:
            gridContainer.style.gridTemplateColumns = "repeat(4, 23vw)";
            cellWeight = 23;
            cellHeight = 20;
            break;
    }

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.style.width = `${cellWeight}vw`;
        cell.style.height = `${cellHeight}vh`;

        const noteButtons = cell.appendChild(document.createElement("div"));
        noteButtons.classList.add("note-buttons");

        const button1 = createEditButton(noteButtons, cellWeight);

        if (!enableOneIconNoteOnly) {
            const button2 = createEditButton(noteButtons, cellWeight);
        }

        if (!disableTextNote) {
            const inputField = cell.appendChild(document.createElement("input"));
            inputField.classList.add("input-field");
            inputField.type = "text";
            inputField.placeholder = placeholderTextNote;

            if (!disableSuggestIconNote) {
                const suggestIconNote = createEditButton(noteButtons, cellWeight);
                suggestIconNote.classList.add("suggested-icon");
                suggestIconNote.style.backgroundImage = `url("./images/misc/suggestedMarker.png")`;

                inputField.addEventListener("input", function() {
                    updateSuggestedIcon(suggestIconNote, inputField.value);
                });
            }           
        }

        gridContainer.appendChild(cell);
    }
}

// Generate popup

function generatePopup() {
    popup.innerHTML = "";

    // General icons
    const generalIcons = popup.appendChild(document.createElement("div"));
    generalIcons.classList.add("popup-content");
    generalIcons.classList.add("generalIcons");

    const generalIconsTitle = generalIcons.appendChild(document.createElement("h2"));
    generalIconsTitle.id = "general-icons-title";
    generalIconsTitle.textContent = "General:";
    const generalIconsGrid = generalIcons.appendChild(document.createElement("div"));

    generalIconsGrid.classList.add("grid");

    for (const option of generalOptions) {
        let tempCell = generalIconsGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${getImageUrlFromName(option)})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Village roles
    const villageRoles = popup.appendChild(document.createElement("div"));
    villageRoles.classList.add("popup-content");
    villageRoles.classList.add("villageRoles");

    const villageRolesTitle = villageRoles.appendChild(document.createElement("h2"));
    villageRolesTitle.id = "village-roles-title";
    villageRolesTitle.textContent = "Village:";
    const villageRolesGrid = villageRoles.appendChild(document.createElement("div"));

    villageRolesGrid.classList.add("grid");

    for (const option of villageOptions) {
        let tempCell = villageRolesGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${getImageUrlFromName(option)})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Werewolf roles
    const werewolfRoles = popup.appendChild(document.createElement("div"));
    werewolfRoles.classList.add("popup-content");
    werewolfRoles.classList.add("werewolfRoles");

    const werewolfRolesTitle = werewolfRoles.appendChild(document.createElement("h2"));
    werewolfRolesTitle.id = "werewolf-roles-title";
    werewolfRolesTitle.textContent = "Werewolves:";
    const werewolfRolesGrid = werewolfRoles.appendChild(document.createElement("div"));

    werewolfRolesGrid.classList.add("grid");

    for (const option of werewolvesOptions) {
        let tempCell = werewolfRolesGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${getImageUrlFromName(option)})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Solo roles
    const soloRoles = popup.appendChild(document.createElement("div"));
    soloRoles.classList.add("popup-content");
    soloRoles.classList.add("soloRoles");

    soloRolesTitle = soloRoles.appendChild(document.createElement("h2"));
    soloRolesTitle.id = "solo-roles-title";
    soloRolesTitle.textContent = "Solo:";
    const soloRolesGrid = soloRoles.appendChild(document.createElement("div"));

    soloRolesGrid.classList.add("grid");

    for (const option of soloOptions) {
        let tempCell = soloRolesGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${getImageUrlFromName(option)})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Other roles
    const otherRoles = popup.appendChild(document.createElement("div"));
    otherRoles.classList.add("popup-content");
    otherRoles.classList.add("otherRoles");

    const otherRolesTitle = otherRoles.appendChild(document.createElement("h2"));
    otherRolesTitle.id = "other-roles-title";
    otherRolesTitle.textContent = "Others:";
    const otherRolesGrid = otherRoles.appendChild(document.createElement("div"));

    otherRolesGrid.classList.add("grid");

    for (const option of othersOptions) {
        let tempCell = otherRolesGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${getImageUrlFromName(option)})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Random roles
    const randomRoles = popup.appendChild(document.createElement("div"));
    randomRoles.classList.add("popup-content");
    randomRoles.classList.add("randomRoles");

    const randomRolesTitle = randomRoles.appendChild(document.createElement("h2"));
    randomRolesTitle.id = "random-roles-title";
    randomRolesTitle.textContent = "Random:";
    const randomRolesGrid = randomRoles.appendChild(document.createElement("div"));

    randomRolesGrid.classList.add("grid");

    for (const option of randomOptions) {
        let tempCell = randomRolesGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${getImageUrlFromName(option)})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Close button
    const closeButton = popup.appendChild(document.createElement("button"));
    closeButton.classList.add("close-button");
    closeButton.addEventListener("click", closePopup);
    closeButton.textContent = "Close";
}

// Event listeners

window.onload = () => {
    generateGrid(4, 4);
    generatePopup();
};

document.getElementById('one-icon-only-checkbox').addEventListener('change', function() {
    enableOneIconNoteOnly = this.checked;
    console.log('Enable 1 Icon Note Only:', enableOneIconNoteOnly);
    generateGrid(gridSize, gridSize);
});

document.getElementById('disable-text-note-checkbox').addEventListener('change', function() {
    disableTextNote = this.checked;
    console.log('Disable Text Note:', disableTextNote);
    generateGrid(gridSize, gridSize);

    if (disableTextNote) {
        document.getElementById('suggest-icon-feature').style.display = "none";
    } else {
        document.getElementById('suggest-icon-feature').style.display = "flex";
    }
});

document.getElementById('disable-suggest-icon-checkbox').addEventListener('change', function() {
    disableSuggestIconNote = this.checked;
    console.log('Disable Suggest Icon Note:', disableSuggestIconNote);
    generateGrid(gridSize, gridSize);
});

popupOverlay.addEventListener("click", closePopup);

popup.addEventListener("click", function(event) {
    event.stopPropagation();
});

// Others

function getImageUrlFromName(name) {
    return iconMap[normalizeVietnamese(name)];
}

function changeGridSize(size) {
    gridSize = size;
    generateGrid(size, size);
}

function openPopup(button) {
    activeButton = button;
    popup.style.display = "block";
    popupOverlay.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closePopup() {
    popup.style.display = "none";
    popupOverlay.style.display = "none";
    document.body.style.overflow = "auto"
}

function selectOption(option) {
    if (activeButton) {
        activeButton.style.backgroundImage = `url(${getImageUrlFromName(option)})`;
    }
    closePopup();
}

function normalizeVietnamese(str) {
    return str.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
}

function updateSuggestedIcon(suggestIconNote, inputText) {
    const normalizedText = normalizeVietnamese(inputText);
    const imageUrl = iconMap[normalizedText];
    if (imageUrl) {
        suggestIconNote.style.backgroundImage = `url(${imageUrl})`;
    } else {
        suggestIconNote.style.backgroundImage = `url("./images/misc/suggestedMarker.png")`;
    }
}

// Redirections

function redirectToChangeLog() {
    window.location.href = "change-log.html";
}

function redirectToHome() {
    window.location.href = "index.html";
}

document.getElementById("facebook-info-button").onclick = function() {
    window.open("https://www.facebook.com/96tsubasa", "_blank");
}

document.getElementById("discord-info-button").onclick = function() {
    window.open("https://discord.gg/Ms8SvJFnAN", "_blank");
}