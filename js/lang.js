let placeholderTextNote = "Short text note";

function setLanguage(language) {
    fetch(`./lang/${language}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('version').textContent = data.version;
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
        });
}

document.addEventListener("DOMContentLoaded", function() {
    setLanguage('en');
});