'use strict';
var NUMBER_OF_WIZARD = 4;
var namesWizard = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var surnamesWizard = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColorsWizard = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColorsWizard = ['black', 'red', 'blue', 'yellow', 'green'];
var similarListElement = document.querySelector('.setup-similar-list');

var getRandomElement = function (data) {
  var index = Math.floor(Math.random() * data.length);
  return data[index];
};

var generateWizards = function (number, name, surname, coatcolor, eyesColor) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    var wizardElement = {
      name: getRandomElement(name) + ' ' + getRandomElement(surname),
      coatColor: getRandomElement(coatcolor),
      eyesColor: getRandomElement(eyesColor)
    };
    wizards.push(wizardElement);
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var similarWizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var wizards = generateWizards(
    NUMBER_OF_WIZARD,
    namesWizard,
    surnamesWizard,
    coatColorsWizard,
    eyesColorsWizard
);

var showSimilarWizards = function () {
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var renderWizards = function (data) {

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < data.length; i++) {
    fragment.appendChild(renderWizard(data[i]));
  }

  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');
};

showSimilarWizards();
renderWizards(wizards);


/* var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

setupUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];

var makeRandomItemWizard = function (object, data) {
  object.addEventListener('click', function () {
    object.style.fill = getRandomElement(data);
  });
};

var makeRandomColorFireball = function (object, data) {
  object.addEventListener('click', function () {
    object.style.background = getRandomElement(data);
  });
};

makeRandomItemWizard(wizardCoat, coatColorsWizard);
makeRandomItemWizard(wizardEyes, eyesColorsWizard);
makeRandomColorFireball(wizardFireball, fireballColors);
*/
