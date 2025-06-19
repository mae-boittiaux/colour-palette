import { hexCodes } from "./hex-codes.js";

const palette = document.getElementById('colour-palette');

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

for (let i = 0; i < hexCodes.length; i++) {
    const colour = document.createElement('li');

    const colourText = document.createElement('div');
    colourText.className = "colour-code";
    colourText.textContent = '#' + hexCodes[i];

    colour.id = 'colour-' + hexCodes[i];

    addCSS(`#${colour.id}{ background-color: #${hexCodes[i]}; }`);

    colour.appendChild(colourText);
    palette.appendChild(colour);

    colour.addEventListener('click', () => {
        navigator.clipboard.writeText(colour.textContent);
        displayNotification(hexCodes[i]);
    });
}

function displayNotification(hexCode) {
    const notification = document.createElement('div');

    notification.className = "notification";
    notification.id = 'notification-' + hexCode;
    notification.textContent = "#" + hexCode + " copied to clipboard";

    const notificationsElement = document.getElementById('notification-list');
    notificationsElement.appendChild(notification);

    sleep(3000).then(() => { notification.remove(); });
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
