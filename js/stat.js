'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_X = 120;
var TEXT_Y = 30;
var TEXT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var BASELINE = 250;
var textMassive = ['Ура вы победили!', 'Список результатов:'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandom = function (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};

var getMaxElement = function (arr) {
  return Math.max.apply(Math, arr);
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

var renderColumn = function (ctx, left, bottom, columnHeight, color) {
  ctx.fillStyle = color;
  ctx.fillRect(left, bottom - columnHeight, BAR_WIDTH, columnHeight);
};

window.renderStatistics = function (ctx, names, times) {

  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  for (var i = 0; i < textMassive.length; i++) {
    renderText(ctx, textMassive[i], TEXT_X, TEXT_Y + i * TEXT_GAP);
  }

  for (i = 0; i < names.length; i++) {
    var color = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + getRandom(0, 200) + '%, 50%)';
    var nameX = CLOUD_X + GAP + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i;
    var nameY = BASELINE + 5;
    var barHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var numberY = BASELINE - (BAR_HEIGHT * times[i]) / maxTime - 20;
    renderText(ctx, names[i], nameX, nameY);
    renderColumn(ctx, nameX, BASELINE, barHeight, color);
    renderText(ctx, Math.round(times[i]), nameX, numberY);
  }
};

