const parameterAge = document.getElementById('age');
const parameterHeight = document.getElementById('height');
const parameterWeight = document.getElementById('weight');
const button = document.getElementById('btn');

parameterAge.addEventListener('keyup', activateButton);
parameterHeight.addEventListener('keyup', activateButton);
parameterWeight.addEventListener('keyup', activateButton);

function activateButton() {
    if (parameterAge.value === '' || parameterHeight.value === '' || parameterWeight.value === '') {
        return button.setAttribute('disabled', '');
    } else {
        return button.removeAttribute('disabled'); 
    }
}


// parameterAge.onkeyup = activateButton;
// parameterHeight.onkeyup = activateButton;
// parameterWeight.onkeyup = activateButton;

// const activateButton = () => {
//     if (parameterAge.value === '' || parameterHeight.value === '' || parameterWeight.value === '') {
//         button.setAttribute('disabled', '');
//     } else {
//         button.removeAttribute('disabled'); 
//     }
// }