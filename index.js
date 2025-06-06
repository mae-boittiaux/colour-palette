const hexCodes = ['eccae4', '7e2567'];
const palette = document.getElementById('colour-palette');

const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

for (let i = 0; i < hexCodes.length; i++) {
    const colour = document.createElement('li');

    colour.textContent = '#' + hexCodes[i];
    colour.id = 'colour-' + hexCodes[i];

    addCSS(`#${colour.id}{ background-color: #${hexCodes[i]}; }`);

    palette.appendChild(colour);
}
