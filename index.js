const hexCodes = ['#eccae4', '#7e2567'];
const palette = document.getElementById('colour-palette');

for (let i = 0; i < hexCodes.length; i++) {
    const colour = document.createElement('li');

    colour.textContent = hexCodes[i];
    colour.id = hexCodes[i];

    palette.appendChild(colour);
}
