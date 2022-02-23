const parameterAge = document.getElementById('age');
const parameterHeight = document.getElementById('height');
const parameterWeight = document.getElementById('weight');

const genderRadio = document.querySelector('.switcher');
const gender = genderRadio.querySelectorAll('input');

const activityRadio = document.querySelector('.radios-group');
const activity = activityRadio.querySelectorAll('input');

const form = document.getElementById('form');
const userParameters = form.querySelectorAll('input[type="number"]');
const counterResult = document.getElementById('counter-result');

const buttonCalculate = document.getElementById('btn');
const buttonReset = document.querySelector('.form__reset-button');

const resultCaloriesNormal = document.getElementById('calories-norm');
const resultCaloriesMin = document.getElementById('calories-minimal');
const resultCaloriesMax =  document.getElementById('calories-maximal');

const genderParameters = {
    'male': 5,
    'female': -161,
};

const activityParameters = {
    'min': 1.2,
    'low': 1.375,
    'medium': 1.55,
    'high': 1.725,
    'max': 1.9,
};

const currentState = {
    gender: 'male',
    weight: null,
    height: null,
    age: null,
    activity: 'min',
};

const coefParameters = {
    weight: 10,
    height: 6.25,
    age: 5
};

const weightModificator = 0.15;

parameterAge.addEventListener('input', activateCalcButton);
parameterHeight.addEventListener('input', activateCalcButton);
parameterWeight.addEventListener('input', activateCalcButton);

activityRadio.addEventListener('click', choiceActivity);
genderRadio.addEventListener('click', choiceGender);

form.addEventListener('change', function() {
    buttonReset.removeAttribute('disabled');
});

buttonReset.addEventListener('click', function() {
    buttonCalculate.setAttribute('disabled', '');
    counterResult.classList.add('counter__result--hidden');

    setDefaultGender();
    setDefaultUserParameters();
    setDefaultActivity();
});

buttonCalculate.addEventListener('click', function(evt) {
    evt.preventDefault();
    showBlockResult();
    getAllCalories();
});

function activateCalcButton() {
    if (parameterAge.value === '' || parameterHeight.value === '' || parameterWeight.value === '') {
        buttonCalculate.setAttribute('disabled', '');
    } else {
        buttonCalculate.removeAttribute('disabled'); 
    }
};

function choiceGender(evt) {
    if (evt.target.tagName.toLowerCase() != 'input') {
        return;
    } else if (evt.target.value == Object.keys(genderParameters)[0]) {
        gender[1].removeAttribute('checked');
        gender[0].setAttribute('checked', '');
        currentState.gender = 'male';
    } else {
        gender[0].removeAttribute('checked');
        gender[1].setAttribute('checked', '');
        currentState.gender = 'female';
    }
};

function choiceActivity(evt) {
    if (evt.target.tagName.toLowerCase() != 'input') {
        return;
    };

    for (let i = 0; i < activity.length; i++) {

        if (evt.target != activity[i]) {
            activity[i].removeAttribute('checked')
        } else {
            activity[i].setAttribute('checked', '')
        };

        switch (evt.target.value) {
            case 'min':
                currentState.activity = 'min';
                break;
            case 'low':
                currentState.activity = 'low';
                break;
            case 'medium':
                currentState.activity = 'medium';
                break;
            case 'high': 
                currentState.activity = 'high';
                break;
            case 'max': 
                currentState.activity = 'max';
                break;
        }
    }
};

function showBlockResult() {
    counterResult.classList.remove('counter__result--hidden');
};

function getCaloriesNormalize() {
    const weight = coefParameters.weight * parameterWeight.value;
    const height = coefParameters.height * parameterHeight.value;
    const age = coefParameters.age * parameterAge.value;
    
    return Math.round((weight + height - age + getActualGender()) * getActualActivity());
};

function getCaloriesMax() {
    return Math.round(getCaloriesNormalize() + (getCaloriesNormalize() * weightModificator));
};

function getCaloriesMin() {
    return Math.round(getCaloriesNormalize() - (getCaloriesNormalize() * weightModificator));
};

function getAllCalories() {
    resultCaloriesNormal.textContent = getCaloriesNormalize();
    resultCaloriesMin.textContent = getCaloriesMin();
    resultCaloriesMax.textContent = getCaloriesMax();
};

function getActualGender() {
    switch (currentState.gender) {
        case 'male': 
            return genderParameters['male'];

        default:
            return genderParameters['female'];
    }
};

function getActualActivity() {
    switch (currentState.activity) {
        case 'min':
            return activityParameters['min'];
        case 'low':
            return activityParameters['low'];
        case 'medium':
            return activityParameters['medium'];
        case 'high':
            return activityParameters['high'];
        case 'max':
            return activityParameters['max'];
    }
};

function setDefaultGender() {
    const defaultGender = document.getElementById('gender-male');

    for (let i = 0; i < gender.length; i++) {
        if (gender[i] != defaultGender) {
            gender[i].removeAttribute('checked');
        } else {
            defaultGender.setAttribute('checked', '');
        }
    };
};

function setDefaultUserParameters() {
    for (let i = 0; i < userParameters.length; i++) {
        userParameters[i].value = '';
    };
};

function setDefaultActivity() {
    const defaultActivity = document.getElementById('activity-minimal');
    
    for (let i = 0; i < activity.length; i++) {
        if (activity[i] != defaultActivity) {
            activity[i].removeAttribute('checked');
        } else {
            defaultActivity.setAttribute('checked', '');
            currentState.activity = 'min';
        }
    };
};
