

$('#block').on('mouseover',function () {
    let x = Math.round(Math.random()*$(window).width())-20; // '-20', чтобы квадрат не исчез вправо
    let y = Math.round(Math.random()*$(window).height())-20; // '-20', чтобы квадрат не исчез вниз
    let a = Math.round(Math.random()*30);
    if (a <= 4) {a+=5} // чтоб квадратик не был слишком маленьким
    if (x <= 0) {x+=20} // чтобы квадрат не исчез влево
    if (y <= 0) {y+=20} // чтобы квадрат не исчез вверх
    $('#text').text(' ').css('outline','0px'); // исчезание текста с рамкой
    $(this).animate({
        left: `${x}px`,
        top: `${y}px`,
        width: `${a}px`,
        height: `${a}px`,
}, 50)      /* '50', чтобы быстрее перемещался квадратик,
но не меньше, чтобы можно было уследить в каком напрвлении он переместится */
});
console.log($(window).width());
console.log($(window).height());