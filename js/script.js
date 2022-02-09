// "calculate" button and "clear fields and calculation" button
const parameterAge = document.getElementById('age');
const parameterHeight = document.getElementById('height');
const parameterWeight = document.getElementById('weight');

const genderMale = document.getElementById('gender-male');
const genderFemale = document.getElementById('gender-female');

const activMin = document.getElementById('activity-minimal');
const activLow = document.getElementById('activity-low');
const activMedium = document.getElementById('activity-medium');
const activHigh = document.getElementById('activity-high');
const activMax = document.getElementById('activity-maximal');

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

parameterAge.addEventListener('change', activateResetButton);
parameterHeight.addEventListener('change', activateResetButton);
parameterWeight.addEventListener('change', activateResetButton);

genderMale.addEventListener('change', function() {
    buttonReset.setAttribute('disabled', '');
});

genderFemale.addEventListener('change', function() {
    buttonReset.removeAttribute('disabled'); 
});

function activateResetButton() {
    if (parameterAge.value === '' && parameterHeight.value === '' && parameterWeight.value === '') {
        buttonReset.setAttribute('disabled', '');
    } else {
        buttonReset.removeAttribute('disabled'); 
    }
};