'use strict';
var wizardNameFunction = function () {
  var wizardName = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var randomName = Math.floor(Math.random() * wizardName.length);
  return wizardName[randomName];
};

var wizardSurnameFunction = function () {
  var wizardSurname = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var randomSurname = Math.floor(Math.random() * wizardSurname.length);
  return wizardSurname[randomSurname];
};

var wizardCoatColorFunction = function () {
  var wizardCoatColor = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var randomCoatColor = Math.floor(Math.random() * wizardCoatColor.length);
  return wizardCoatColor[randomCoatColor];
};

var wizardEyesColorFunction = function () {
  var wizardEyesColor = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var randomEyesColor = Math.floor(Math.random() * wizardEyesColor.length);
  return wizardEyesColor[randomEyesColor];
};

var wizards = [
  {
    name: wizardNameFunction() + ' ' + wizardSurnameFunction(),
    coatColor: wizardCoatColorFunction(),
    eyesColor: wizardEyesColorFunction()
  },
  {
    name: wizardNameFunction() + ' ' + wizardSurnameFunction(),
    coatColor: wizardCoatColorFunction(),
    eyesColor: wizardEyesColorFunction()
  },
  {
    name: wizardNameFunction() + ' ' + wizardSurnameFunction(),
    coatColor: wizardCoatColorFunction(),
    eyesColor: wizardEyesColorFunction()
  },
  {
    name: wizardNameFunction() + ' ' + wizardSurnameFunction(),
    coatColor: wizardCoatColorFunction(),
    eyesColor: wizardEyesColorFunction()
  }
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

document.querySelector('.setup').classList.remove('hidden');


var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
