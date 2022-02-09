// "calculate" button and "clear fields and calculation" button
const parameterAge = document.getElementById('age');
const parameterHeight = document.getElementById('height');
const parameterWeight = document.getElementById('weight');

const buttonCalculate = document.getElementById('btn');
const buttonReset = document.querySelector('.form__reset-button');

parameterAge.addEventListener('keyup', activateCalcButton);
parameterHeight.addEventListener('keyup', activateCalcButton);
parameterWeight.addEventListener('keyup', activateCalcButton);

function activateCalcButton() {
    if (parameterAge.value === '' || parameterHeight.value === '' || parameterWeight.value === '') {
        return buttonCalculate.setAttribute('disabled', '');
    } else {
        return buttonCalculate.removeAttribute('disabled'); 
    }
};

parameterAge.addEventListener('keyup', activateResetButton);
parameterHeight.addEventListener('keyup', activateResetButton);
parameterWeight.addEventListener('keyup', activateResetButton);

function activateResetButton() {
    if (parameterAge.value === '' && parameterHeight.value === '' && parameterWeight.value === '') {
        return buttonReset.setAttribute('disabled', '');
    } else {
        return buttonReset.removeAttribute('disabled'); 
    }
};
