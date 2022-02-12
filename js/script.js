// "calculate" button and "clear fields and calculation" button
const parameterAge = document.getElementById('age');
const parameterHeight = document.getElementById('height');
const parameterWeight = document.getElementById('weight');

const male = document.getElementById('gender-male');
const female = document.getElementById('gender-female');
const genderSwitcher = document.querySelector('.switcher');

const activityRadio = document.querySelector('.radios-group');
const activity = document.getElementsByName('activity');

const min = 1.2;
const low = 1.375;
const medium = 1.55;
const high = 1.725;
const max = 1.9;

const form = document.querySelector('.counter__form.form');
const counterResult = document.getElementById('counter-result');

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
    buttonReset.removeAttribute('disabled');
});

buttonReset.addEventListener('click', function() {

    buttonReset.setAttribute('disabled', '');

    counterResult.classList.add('counter__result--hidden');
})

buttonCalculate.addEventListener('click', function(e) {
    e.preventDefault();

    resultCalculation();
});

genderSwitcher.addEventListener('change', function() {
    if (male.checked) {
        female.removeAttribute('checked');
        male.setAttribute('checked', '');
    } else if (female.checked) {
        male.removeAttribute('checked');
        female.setAttribute('checked', '');
    }
});

activityRadio.addEventListener('change', function(activity) {
    for (let i = 0; i < activity.length; i++) {
        if (activity[i].checked) {
            return activity[i];
        }
    }
});

function resultCalculation(parameterAge, parameterHeight, parameterWeight) {
    counterResult.classList.remove('counter__result--hidden');

    if (male.checked) {
        let femaleResult = (10 * parameterWeight) + (6.25 * parameterHeight) - (5 * parameterAge) + 5;
    } else if (female.checked) {
        let femaleResult = (10 * parameterWeight) + (6.25 * parameterHeight) - (5 * parameterAge) - 161;
    };
}