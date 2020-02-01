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
var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var getRandomValue = function (value) {
  var index = Math.floor(Math.random() * value.length);
  return value[index];
};

var generateWizards = function (number, name, surname, coatcolor, eyesColor) {
  var wizards = [];
  for (var i = 0; i < number; i++) {
    var wizardElement = {
      name: getRandomValue(name) + ' ' + getRandomValue(surname),
      coatColor: getRandomValue(coatcolor),
      eyesColor: getRandomValue(eyesColor)
    };
    wizards.push(wizardElement);
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function () {
  var wizards = generateWizards(
      NUMBER_OF_WIZARD,
      namesWizard,
      surnamesWizard,
      coatColorsWizard,
      eyesColorsWizard
  );
  document.querySelector('.setup').classList.remove('hidden');

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');
};

renderWizards();
