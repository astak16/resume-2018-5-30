'use strict';

alert(2);

!function () {
    var specialTags = document.querySelectorAll('[data-x]');
    for (var i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    }

    findClosestAndRemoveOffset();

    window.addEventListener('scroll', function () {
        findClosestAndRemoveOffset();
    });

    function findClosestAndRemoveOffset() {
        var specialTags = document.querySelectorAll('[data-x]');
        var minIndex = 0;
        for (var _i = 1; _i < specialTags.length; _i++) {
            if (Math.abs(specialTags[_i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = _i;
            }
        }
        // for(let i = 0; i < specialTags.length; i++){
        //     specialTags[i].classList.remove('active')

        specialTags[minIndex].classList.remove('offset');
        var id = specialTags[minIndex].id;
        var a = document.querySelector('a[href="#' + id + '"]');
        var li = a.parentNode;
        var brotherAndMe = li.parentNode.children;
        for (var _i2 = 0; _i2 < brotherAndMe.length; _i2++) {
            brotherAndMe[_i2].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }
}.call();