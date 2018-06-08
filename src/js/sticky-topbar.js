!function () {
    window.addEventListener('scroll',function(){
        if(window.scrollY > 0){     //页面垂直方向滚动距离
            topNavBar.classList.add('sticky')
        }else{
            topNavBar.classList.remove('sticky')
        }
    })
}.call()


