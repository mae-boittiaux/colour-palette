const hexCodes = [
    '00000000',
    '333333',
    'a0a0a0',
    'cecece',
    'f0f0f0',
    'fdfdfd',
    'f8f8f2',
    'f5e497',
    '928135',
    'eccae4',
    '7e2567',
    'ebc597',
    'f2843e',
    '855821',
    'c7dcf0',
    '6272a4',
    '31597e',
    '4b5575',
    '343746',
    '191a21',
    'e0d2ec',
    'bd76ad',
    '340a57',
    'd1ecba',
    '214107',
    'dd0534',
    '9b1818',
];

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
