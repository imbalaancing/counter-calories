// "calculate" button and "clear fields and calculation" button
const parameterAge = document.getElementById('age');
const parameterHeight = document.getElementById('height');
const parameterWeight = document.getElementById('weight');

const form = document.querySelector('.counter__form.form');
const buttonCalculate = document.getElementById('btn');
const buttonReset = document.querySelector('.form__reset-button');

parameterAge.addEventListener('input', activateCalcButton);
parameterHeight.addEventListener('input', activateCalcButton);
parameterWeight.addEventListener('input', activateCalcButton);

function activateCalcButton() {
    if (parameterAge.value === '' || parameterHeight.value === '' || parameterWeight.value === '') {
        buttonCalculate.setAttribute('disabled', '');
    } else {
        buttonCalculate.removeAttribute('disabled'); 
    }
};

form.addEventListener('change', function() {
    if (!form) {
        buttonReset.disabled = true;
    } else {
        buttonReset.disabled = false;
    }
});

    buttonReset.addEventListener('click', function() {
        buttonReset.disabled = true;
    });