'use strict';

var getMaxElement = function (arr) {
  return Math.max.apply(this, arr);
};

var getRandom = function (number) {
  return Math.ceil(Math.random() * number);
};

window.renderStatistics = function (ctx, names, times) {

  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var COLUMN_WIDTH = 40;

  var getBlueWithRandomSaturation = function () {
    return 'hsl(240, ' + getRandom(100) + '%, 50%)';
  };

  var renderText = function (strings, x, y) {
    var FONT_PROPERTIES = ['16px', 'PT Mono'];
    var LINE_HEIGHT = 20;
    var BASIC_FONT_COLOR = '#000';
    var TOP_TEXT_X_POS = CLOUD_X + 50;
    var TOP_TEXT_Y_POS = 40;
    x = x || TOP_TEXT_X_POS;
    y = y || TOP_TEXT_Y_POS;
    ctx.font = FONT_PROPERTIES.join(' ');
    ctx.fillStyle = BASIC_FONT_COLOR;
    strings.forEach(function (string, index) {
      ctx.fillText(string, x, y + (LINE_HEIGHT * index));
    });
  };

  var renderTopText = function () {
    var TOP_TEXT_STRINGS = ['Ура вы победили!', 'Список результатов:'];
    renderText(TOP_TEXT_STRINGS);
  };

  var renderCloud = function (x, y, color) {
    var CLOUD_WIDTH = 420;
    var CLOUD_HEIGHT = 270;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderCloudWithShadow = function () {
    var GAP = 10;
    var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
    var SHADOW_COLOR = 'rgba(0, 0, 0, 0.3)';
    renderCloud(CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
    renderCloud(CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  };

  var renderColumn = function (left, bottom, columnHeight, color) {
    ctx.fillStyle = color; // устанавливаем цвет
    ctx.fillRect(left, bottom - columnHeight, COLUMN_WIDTH, columnHeight); // отрисовываем прямоугольник, во втором аргументе
    // вычитаем высоту столбца, так как нужна верхняя
    // координата, а у нас базовая линия гистограммы внизу
  };

  var renderHist = function (columnHeight, left, name, time) {
    var HISTOGRAM_BASE = 250; // нижняя граница гистограммы
    var MY_COLOR = 'rgba(255, 0, 0, 1)'; // цвет игрока "Вы"
    var userTimeTextY = HISTOGRAM_BASE - columnHeight - 10; // координата Y для текста времени
    var userNameTextY = HISTOGRAM_BASE + 20; // координата Y для текста имени
    var color = name === 'Вы' ? MY_COLOR : getBlueWithRandomSaturation(); // установка цвета
    time = Math.round(time); // округление времени
    renderText([time], left, userTimeTextY); // отрисовка текста времени
    renderText([name], left, userNameTextY); // отрисовка текста имени
    renderColumn(left, HISTOGRAM_BASE, columnHeight, color); // отрисовка столбца, передаем левую границу столбца, нижнюю
    // границу гистограммы, высоту столбца и цвет
  };

  var renderHistogram = function () {
    var HISTOGRAM_LEFT = CLOUD_X + 50; // левая граница гистограммы
    var COLUMN_HEIGHT = 150; // максимальная высота столбца гистограммы
    var COLUMN_GAP = 50; // расстояние между столбцами
    var maxTime = getMaxElement(times); // находим максимальное время, ему будет соответствовать столбец
    // максимальной высоты, остальные пропорционально меньше
    names.forEach(function (name, i) { // итерируемся по массиву names, name - элемент массива names в текущей итерации
      var time = times[i]; // time - элемент массива times в текущей итерации
      var currentColumnHeight = time / maxTime * COLUMN_HEIGHT; // вычисление высоты текущего столбца
      var currentColumnX = HISTOGRAM_LEFT + (i * (COLUMN_WIDTH + COLUMN_GAP)); // вычисление левой границы текущего столбца
      renderHist(currentColumnHeight, currentColumnX, name, time); // отрисовываем текущий столбец, передаем в функцию
      // меняющиеся данные - текущие высоту столбца, левую границу
      // столбца, имя и значение времени
    });
  };

  var init = function () {
    renderCloudWithShadow();
    renderTopText();
    renderHistogram();
  };

  init();

};
