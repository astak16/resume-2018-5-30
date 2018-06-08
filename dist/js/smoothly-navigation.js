'use strict';

!function () {
    var liTags = document.querySelectorAll('nav.menu > ul > li');
    for (var i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (e) {
            e.currentTarget.classList.add('active');
        };
        liTags[i].onmouseleave = function (e) {
            e.currentTarget.classList.remove('active');
        };
    }

    var aTags = document.querySelectorAll('nav.menu > ul > li > a');

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    for (var _i = 0; _i < aTags.length; _i++) {
        aTags[_i].onclick = function (e) {
            e.preventDefault(); //阻止a 标签的默认样式
            var a = e.currentTarget;
            var href = a.getAttribute('href'); //a.href会获取到带http的锚点
            var element = document.querySelector(href);
            var top = element.offsetTop;

            // let n = 25;
            // let t = 250/n;
            var currentTop = window.scrollY;
            var targetTop = top - 80;
            // let s = (targetTop - currentTop)/n;
            // let i = 0;
            // let id = setInterval(() => {
            //     if(i === n){
            //         window.clearInterval(id);
            //         return;
            //     }
            //     i = i + 1;
            //     window.scrollTo(0,currentTop + s * i)
            // },t);
            var s = targetTop - currentTop;
            var coords = { y: currentTop };
            var t = Math.abs(s / 100 * 300);
            if (t > 500) {
                t = 500;
            }
            var tween = new TWEEN.Tween(coords).to({ y: targetTop }, t).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
                window.scrollTo(0, coords.y);
            }).start();
        };
    }
}.call();