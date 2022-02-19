const parameterAge = document.getElementById('age');
const parameterHeight = document.getElementById('height');
const parameterWeight = document.getElementById('weight');

const switcher = document.querySelector('.switcher');
const gender = switcher.querySelectorAll('input');
let actualGender;

const activityRadio = document.querySelector('.radios-group');
const activity = activityRadio.querySelectorAll('input');
let actualActivity;

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

    buttonCalculate.setAttribute('disabled', '');

    counterResult.classList.add('counter__result--hidden');
});

buttonCalculate.addEventListener('click', function(evt) {
    evt.preventDefault();

    resultCalculation();

    document.getElementById('calories-norm').textContent = getCaloriesNormalize();
    document.getElementById('calories-minimal').textContent = getCaloriesMin();
    document.getElementById('calories-maximal').textContent = getCaloriesMax();
});

switcher.addEventListener('click', choiceGender);

function choiceGender(evt) {

    for (let i = 0; i < gender.length; i++) {
        if (evt.target != gender[i]) {
            gender[i].removeAttribute('checked');
        } else {
            gender[i].setAttribute('checked', '')
        };

        if (gender[i].checked) {
            actualGender = Number(gender[i].dataset.gender);
        }
    }
};

activityRadio.addEventListener('click', choiceActivity);

function choiceActivity(evt) {
    const elementType = 'input';

    if (evt.target.tagName.toLowerCase() != elementType) {
        return;
    }

    for (let i = 0; i < activity.length; i++) {
        if (evt.target != activity[i]) {
            activity[i].removeAttribute('checked')
        } else {
            activity[i].setAttribute('checked', '')
        };

        if (activity[i].checked) {
            actualActivity = Number(activity[i].dataset.activity);
        }
    }
};

function resultCalculation() {
    counterResult.classList.remove('counter__result--hidden');
};

function getCaloriesNormalize() {
    const weight = 10 * parameterWeight.value;
    const height = 6.25 * parameterHeight.value;
    const age = 5 * parameterAge.value;
    
    return Math.round((weight + height - age + actualGender) * actualActivity);
};

function getCaloriesMax() {
    return Math.round(getCaloriesNormalize() + (getCaloriesNormalize() * 0.15));
};

function getCaloriesMin() {
    return Math.round(getCaloriesNormalize() - (getCaloriesNormalize() * 0.15));
};
