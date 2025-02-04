let placeholderTextNote = "Short text note";
let popUpContentGeneralIconText = "General:";
let popUpContentVillageRolesText = "Village:";
let popUpContentWerewolfRolesText = "Werewolves:";
let popUpContentSoloRolesText = "Solo:"
let popUpContentOtherRolesText = "Others:"
let popUpContentRandomRolesText = "Random:"

function setLanguage(language) {
    fetch(`./lang/${language}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('change-log-title').textContent = data.changeLogTitle;
            document.getElementById('maintainer').textContent = data.maintainer;
            document.getElementById('settings-title').textContent = data.settingsTitle;
            document.getElementById('settings-warning').textContent = data.settingsWarning;
            document.getElementById('settings-player-count').textContent = data.settingsPlayerCount;
            document.getElementById('settings-one-icon-note-only').textContent = data.settingsOneIconNoteOnly;
            document.getElementById('settings-disable-text-note').textContent = data.settingsDisableTextNote;
            document.getElementById('settings-disable-suggesting-icon-note').textContent = data.settingsDisableSuggestingIconNote;

            placeholderTextNote = data.placeholderTextNote;
            Array.from(document.getElementsByClassName('input-field')).forEach(element => {
                element.placeholder = data.placeholderTextNote;
            });

            popUpContentGeneralIconText = data.popUpContentGeneralIconText;
            document.getElementById('general-icons-title').textContent = popUpContentGeneralIconText;

            popUpContentVillageRolesText = data.popUpContentVillageRolesText;
            document.getElementById('village-roles-title').textContent = popUpContentVillageRolesText;

            popUpContentWerewolfRolesText = data.popUpContentWerewolfRolesText;
            document.getElementById('werewolf-roles-title').textContent = popUpContentWerewolfRolesText;

            popUpContentSoloRolesText = data.popUpContentSoloRolesText;
            document.getElementById('solo-roles-title').textContent = popUpContentSoloRolesText;

            popUpContentOtherRolesText = data.popUpContentOtherRolesText;
            document.getElementById('other-roles-title').textContent = popUpContentOtherRolesText;

            popUpContentRandomRolesText = data.popUpContentRandomRolesText;
            document.getElementById('random-roles-title').textContent = popUpContentRandomRolesText;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    setLanguage('en');
});