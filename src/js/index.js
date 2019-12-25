// 轮播图
var ul_li = document.querySelectorAll('.slideshow ul li');
var ol_li = document.querySelectorAll('.slideshow ol li');

// 无缝链接
var nav_img_ul = document.querySelector('.nav_img ul');

// 轮播图
var index = 0;
var timer;

for (var i = 0, len = ul_li.length; i < len; i++) {
    ul_li[i].index = i;
    ul_li[i].onmouseenter = function () {
        clearInterval(timer);
        index = this.index;
        activeOne();
    }
    ul_li[i].onmouseleave = function () {
        start();
    }
}

function activeOne() { //清除所有的激活状态
    for (var i = 0, len = ul_li.length; i < len; i++) {
        ol_li[i].classList.remove('nvi');
        ul_li[i].classList.remove('active');
    }
    ul_li[index].classList.add('active');
    ol_li[index].classList.add('nvi');
}

function start() {
    timer = setInterval(function () {
        index++;
        if (index > ol_li.length - 1) {
            index = 0;
        }
        activeOne();
    }, 2000);
}

// 无缝链接
var time;
var number = 0;

nav_img_ul.innerHTML += nav_img_ul.innerHTML;

function AutoPlay() {
    clearInterval(time);
    time = setInterval(function () {
        number--;
        if (number == -900) {
            number = 0;
        }
        $(".nav_img ul").css("left", number);
    }, 50);
}
AutoPlay();

// 鼠标滑入暂停
$(".nav_img ul li").bind({
    mouseover: function () {
        clearInterval(time);
    },
    mouseout: function () {
        AutoPlay();
    }
});
