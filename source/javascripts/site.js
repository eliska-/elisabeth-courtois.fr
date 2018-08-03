$(function () {
  $('.skill-value').each(function (_i, skillValue) {
    var $skillValue = $(skillValue);
    var value = $skillValue.text();
    var intValue = parseInt(value.replace('/10', ''));

    var bullets = [];
    var i;

    for (i = 0; i < intValue; i++) {
      bullets.push('<span class="skill-bullet"></span>')
    }
    for (i; i < 10; i++) {
      bullets.push('<span class="skill-bullet mod-empty"></span>')
    }

    $skillValue.html(bullets.join(''));
  });
});
