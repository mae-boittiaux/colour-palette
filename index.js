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
    });
}
