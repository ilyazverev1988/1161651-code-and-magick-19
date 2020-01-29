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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var text = function (ctx, word, x, y) {
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(word, x, y);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  text(ctx, 'Ура вы победили!', TEXT_X, TEXT_Y);
  text(ctx, 'Список результатов:', TEXT_X, TEXT_Y + TEXT_GAP);
  var maxTime = getMaxElement(times);

  var renderColumn = function (left, bottom, columnHeight, color) {
    ctx.fillStyle = color;
    ctx.fillRect(left, bottom - columnHeight, BAR_WIDTH, columnHeight);
  };

  var color =
    names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240%, 100%, 50%)';


  for (var i = 0; i < names.length; i++) {
    ctx.fillText(
        names[i],
        CLOUD_X + GAP + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
        BASELINE + 5
    );

    renderColumn(CLOUD_X + GAP + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i, BASELINE, (BAR_HEIGHT * times[i]) / maxTime, color);

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GAP + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * i,
        BASELINE - (BAR_HEIGHT * times[i]) / maxTime - 20
    );
  }


};

