// Generate grid

const gridContainer = document.getElementById("grid-container");

function createEditButton(e) {
    const button = e.appendChild(document.createElement("button"));
    button.classList.add("edit-button");
    button.addEventListener("click", () => openPopup(button));
    button.style.backgroundImage = `url(./images/marker.png)`;
    return button;
}

function generateGrid(rows, cols) {
    gridContainer.innerHTML = "";

    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        const noteButtons = cell.appendChild(document.createElement("div"));
        noteButtons.classList.add("note-buttons");

        const button1 = createEditButton(noteButtons);
        const button2 = createEditButton(noteButtons);

        const inputField = cell.appendChild(document.createElement("input"));
        inputField.classList.add("input-field");
        inputField.type = "text";
        inputField.placeholder = "Ghi chú ngắn";

        gridContainer.appendChild(cell);
    }
}

// Generate popup

const popup = document.getElementById("popup");

function generatePopup() {
    popup.innerHTML = "";

    // General icons
    const generalIcons = popup.appendChild(document.createElement("div"));
    generalIcons.classList.add("popup-content");
    generalIcons.classList.add("generalIcons");

    generalIcons.appendChild(document.createElement("h2")).textContent = "Chung:";
    const generalIconsGrid = generalIcons.appendChild(document.createElement("div"));

    generalIconsGrid.classList.add("grid");

    const options = [
        "./images/general/detectiveDifferentTeam.png",
        "./images/general/detectiveSameTeam.png",
        "./images/general/good.png",
        "./images/general/evil.png",
        "./images/general/unknown.png",
        "./images/general/ssBlue.png",
        "./images/general/ssRed.png",
        "./images/general/gamblerVillagerCorrect.png",
        "./images/general/gamblerVillagerIncorrect.png",
        "./images/general/gamblerWerewolfCorrect.png",
        "./images/general/gamblerWerewolfIncorrect.png",
        "./images/general/gamblerSoloCorrect.png",
        "./images/general/gamblerSoloIncorrect.png",
        "./images/general/headhunterTarget.png",
        "./images/general/instigatorRecruit.png",
        "./images/general/lover.png",
        "./images/general/morticianSuspect.png",
        "./images/general/nightWatchmanProtect.png",
        "./images/general/redLadyVisited.png",
        "./images/general/sectMember.png",
        "./images/general/sheriffSuspect.png",
        "./images/general/violinistResultHappy.png",
        "./images/general/violinistResultSad.png",
    ];

    for (const option of options) {
        let tempCell = generalIconsGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${option})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Village roles
    const villageRoles = popup.appendChild(document.createElement("div"));
    villageRoles.classList.add("popup-content");
    villageRoles.classList.add("villageRoles");

    villageRoles.appendChild(document.createElement("h2")).textContent = "Dân làng:";
    const villageRolesGrid = villageRoles.appendChild(document.createElement("div"));

    villageRolesGrid.classList.add("grid");

    const villageOptions = [
        "./images/village/icon_default_doctor_filled@3x.png",
        "./images/village/icon_default_night_watchman_filled@3x.png",
        "./images/village/icon_default_butcher_filled@3x.png",
        "./images/village/icon_default_bodyguard_filled@3x.png",
        "./images/village/icon_default_tough_guy_filled@3x.png",
        "./images/village/icon_default_seer_apprentice_filled@3x.png",
        "./images/village/icon_default_vigilante_filled@3x.png",
        "./images/village/icon_default_gunner_filled@3x.png",
        "./images/village/icon_default_bully_filled@3x.png",
        "./images/village/icon_default_jailer_filled@3x.png",
        "./images/village/icon_default_warden_filled@3x.png",
        "./images/village/icon_default_red_lady_filled@3x.png",
        "./images/village/icon_default_ghost_lady_filled@3x.png",
        "./images/village/icon_default_priest_filled@3x.png",
        "./images/village/icon_default_marksman_filled@3x.png",
        "./images/village/icon_default_judge_filled@3x.png",
        "./images/village/icon_default_seer_filled@3x.png",
        "./images/village/icon_default_analyst_filled@3x.png",
        "./images/village/icon_default_aura_seer_filled@3x.png",
        "./images/village/icon_default_spirit_seer_filled@3x.png",
        "./images/village/icon_default_gambler_filled@3x.png",
        "./images/village/icon_default_detective_filled@3x.png",
        "./images/village/icon_default_mortician_filled@3x.png",
        "./images/village/icon_default_sheriff_filled@3x.png",
        "./images/village/icon_default_violinist_filled@3x.png",
        "./images/village/icon_default_medium_filled@3x.png",
        "./images/village/icon_default_ritualist_filled@3x.png",
        "./images/village/icon_default_conjuror_filled@3x.png",
        "./images/village/icon_default_mayor_filled@3x.png",
        "./images/village/icon_default_baker_filled@3x.png",
        "./images/village/icon_default_grumpy_grandma_filled@3x.png",
        "./images/village/icon_default_preacher_filled@3x.png",
        "./images/village/icon_default_witch_filled@3x.png",
        "./images/village/icon_default_forger_filled@3x.png",
        "./images/village/icon_default_astronomer_filled@3x.png",
        "./images/village/icon_default_beast_hunter_filled@3x.png",
        "./images/village/icon_default_trapper_filled@3x.png",
        "./images/village/icon_default_flagger_filled@3x.png",
        "./images/village/icon_default_loudmouth_filled@3x.png",
        "./images/village/icon_default_avenger_filled@3x.png",
        "./images/village/icon_default_bellringer_filled@3x.png",
        "./images/village/icon_default_fortune_teller_filled@3x.png",
        "./images/village/icon_default_flower_child_filled@3x.png",
        "./images/village/icon_default_pacifist_filled@3x.png"
    ];

    for (const option of villageOptions) {
        let tempCell = villageRolesGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${option})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Werewolf roles
    const werewolfRoles = popup.appendChild(document.createElement("div"));
    werewolfRoles.classList.add("popup-content");
    werewolfRoles.classList.add("werewolfRoles");

    werewolfRoles.appendChild(document.createElement("h2")).textContent = "Ma sói:";
    const werewolfRolesGrid = werewolfRoles.appendChild(document.createElement("div"));

    werewolfRolesGrid.classList.add("grid");

    const werewolvesOptions = [
        "./images/werewolves/icon_default_junior_werewolf_filled@3x.png",
        "./images/werewolves/icon_default_split_wolf_filled@3x.png",
        "./images/werewolves/icon_default_kitten_wolf_filled@3x.png",
        "./images/werewolves/icon_default_wolffluencer_filled@3x.png",
        "./images/werewolves/icon_default_nightmare_werewolf_filled@3x.png",
        "./images/werewolves/icon_default_voodoo_werewolf_filled@3x.png",
        "./images/werewolves/icon_default_storm_wolf_filled@3x.png",
        "./images/werewolves/icon_default_swamp_wolf_filled@3x.png",
        "./images/werewolves/icon_default_wolf_shaman_filled@3x.png",
        "./images/werewolves/icon_default_wolf_trickster_filled@3x.png",
        "./images/werewolves/icon_default_confusion_wolf_filled@3x.png",
        "./images/werewolves/icon_default_wolf_scribe_filled@3x.png",
        "./images/werewolves/icon_default_shadow_wolf_filled@3x.png",
        "./images/werewolves/icon_default_werewolf_berserk_filled@3x.png",
        "./images/werewolves/icon_default_toxic_wolf_filled@3x.png",
        "./images/werewolves/icon_default_guardian_wolf_filled@3x.png",
        "./images/werewolves/icon_default_wolf_pacifist_filled@3x.png",
        "./images/werewolves/icon_default_jelly_wolf_filled@3x.png",
        "./images/werewolves/icon_default_gentlewolf_filled@3x.png",
        "./images/werewolves/icon_default_alpha_werewolf_filled@3x.png",
        "./images/werewolves/icon_default_stubborn_werewolf_filled@3x.png",
        "./images/werewolves/icon_default_wolf_summoner_filled@3x.png",
        "./images/werewolves/icon_default_ghost_wolf_filled@3x.png",
        "./images/werewolves/icon_default_wolf_seer_filled@3x.png",
        "./images/werewolves/icon_default_sorcerer_filled@3x.png",
        "./images/werewolves/icon_default_blind_werewolf_filled@3x.png",
        "./images/werewolves/icon_default_werewolf_fan_filled@3x.png"
    ];

    for (const option of werewolvesOptions) {
        let tempCell = werewolfRolesGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${option})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Solo roles
    const soloRoles = popup.appendChild(document.createElement("div"));
    soloRoles.classList.add("popup-content");
    soloRoles.classList.add("soloRoles");

    soloRoles.appendChild(document.createElement("h2")).textContent = "Solo:";
    const soloRolesGrid = soloRoles.appendChild(document.createElement("div"));

    soloRolesGrid.classList.add("grid");

    const soloOptions = [
        "./images/solo/icon_default_fool_filled@3x.png",
        "./images/solo/icon_default_headhunter_filled@3x.png",
        "./images/solo/icon_default_anarchist_filled@3x.png",
        "./images/solo/icon_default_serial_killer_filled@3x.png",
        "./images/solo/icon_default_cannibal_filled@3x.png",
        "./images/solo/icon_default_evil_detective_filled@3x.png",
        "./images/solo/icon_default_arsonist_filled@3x.png",
        "./images/solo/icon_default_bomber_filled@3x.png",
        "./images/solo/icon_default_alchemist_filled@3x.png",
        "./images/solo/icon_default_siren_filled@3x.png",
        "./images/solo/icon_default_corruptor_filled@3x.png",
        "./images/solo/icon_default_illusionist_filled@3x.png",
        "./images/solo/icon_default_blight_filled@3x.png",
        "./images/solo/icon_default_bandit_filled@3x.png",
        "./images/solo/icon_default_accomplice_filled@3x.png",
        "./images/solo/icon_default_sect_leader_filled@3x.png",
        "./images/solo/icon_default_zombie_filled@3x.png",
        "./images/solo/icon_default_instigator_filled@3x.png"
    ];

    for (const option of soloOptions) {
        let tempCell = soloRolesGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${option})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Other roles
    const otherRoles = popup.appendChild(document.createElement("div"));
    otherRoles.classList.add("popup-content");
    otherRoles.classList.add("otherRoles");

    otherRoles.appendChild(document.createElement("h2")).textContent = "Khác:";
    const otherRolesGrid = otherRoles.appendChild(document.createElement("div"));

    otherRolesGrid.classList.add("grid");

    const othersOptions = [
        "./images/others/icon_default_cursed_filled@3x.png",
        "./images/others/icon_default_grave_robber_filled@3x.png",
        "./images/others/icon_default_lurker_filled@3x.png",
        "./images/others/icon_default_cupid_filled@3x.png",
        "./images/others/icon_default_villager_filled@3x.png",
        "./images/others/icon_default_president_filled@3x.png",
        "./images/others/icon_default_assassin_filled@3x.png",
        "./images/others/icon_default_easter_bunny_filled@3x.png",
        "./images/others/icon_default_pumpkin_king_filled@3x.png",
        "./images/others/icon_default_santa_filled@3x.png"
    ];

    for (const option of othersOptions) {
        let tempCell = otherRolesGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${option})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Random roles
    const randomRoles = popup.appendChild(document.createElement("div"));
    randomRoles.classList.add("popup-content");
    randomRoles.classList.add("randomRoles");

    randomRoles.appendChild(document.createElement("h2")).textContent = "Ngẫu nhiên:";
    const randomRolesGrid = randomRoles.appendChild(document.createElement("div"));

    randomRolesGrid.classList.add("grid");

    const randomOptions = [
        "./images/random/icon_default_random_villager_normal_filled@3x.png",
        "./images/random/icon_default_random_villager_strong_filled@3x.png",
        "./images/random/icon_default_random_protector@3x.png",
        "./images/random/icon_default_random_doctor@3x.png",
        "./images/random/icon_default_random_information@3x.png",
        "./images/random/icon_default_random_info_secondary@3x.png",
        "./images/random/icon_default_random_sheriff@3x.png",
        "./images/random/icon_default_random_control@3x.png",
        "./images/random/icon_default_random_villagekiller@3x.png",
        "./images/random/icon_default_random_witch@3x.png",
        "./images/random/icon_default_random_support@3x.png",
        "./images/random/icon_default_random_vote_manipulator@3x.png",
        "./images/random/icon_default_random_werewolf_filled@3x.png",
        "./images/random/icon_default_random_werewolf_strong@3x.png",
        "./images/random/icon_default_random_werewolf_weak@3x.png",
        "./images/random/icon_default_random_werewolf_info@3x.png",
        "./images/random/icon_default_random_shaman@3x.png",
        "./images/random/icon_default_random_crowd_control@3x.png",
        "./images/random/icon_default_random_rolechanged@3x.png",
        "./images/random/icon_default_random_voting_filled@3x.png",
        "./images/random/icon_default_random_killer_filled@3x.png",
        "./images/random/icon_default_random_teamrole@3x.png",
        "./images/random/icon_default_random_squid@3x.png",
        "./images/random/icon_default_random_all_filled@3x.png",
        
    ];

    for (const option of randomOptions) {
        let tempCell = randomRolesGrid.appendChild(document.createElement("div"));
        tempCell.classList.add("cell");

        const button = document.createElement("button");
        button.classList.add("options");
        button.style.backgroundImage = `url(${option})`;
        button.addEventListener("click", () => selectOption(option));
        tempCell.appendChild(button);
    }

    // Close button
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
        activeButton.style.backgroundImage = `url(${option})`;
    }
    closePopup();
}
