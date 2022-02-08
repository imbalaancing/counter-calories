const parameterAge = document.getElementById('age');
const parameterHeight = document.getElementById('height');
const parameterWeight = document.getElementById('weight');

const button = document.getElementById('btn');

const activateButton = () => {
    if (parameterAge.value === '' || parameterHeight.value === '' || parameterWeight.value === '') {
        return button.setAttribute('disabled', '');
    }
    return button.removeAttribute('disabled');
}

parameterAge.onkeyup = activateButton;
parameterHeight.onkeyup = activateButton;
parameterWeight.onkeyup = activateButton;

