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

var generateWizards = function (numbers, names, surnames, coatColors, eyesColors) {
  var wizards = [];
  for (var i = 0; i < numbers; i++) {
    var wizardElement = {
      name: getRandomElement(names) + ' ' + getRandomElement(surnames),
      coatColor: getRandomElement(coatColors),
      eyesColor: getRandomElement(eyesColors)
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
  data.forEach(function (index) {
    fragment.appendChild(renderWizard(index));
  });

  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');
};

showSimilarWizards();
renderWizards(wizards);
