setTimeout(function(){
    siteWelcome.classList.remove('active')
},1000)

window.onscroll = function(){
    if(window.scrollY > 0){     //页面垂直方向滚动距离
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
}

let liTags = document.querySelectorAll('nav.menu > ul > li')
for(let i = 0; i < liTags.length; i++){
    liTags[i].onmouseenter = function(e){
        e.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(e){
        e.currentTarget.classList.remove('active')
    }
}

let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for(let i = 0; i < aTags.length; i++){
    aTags[i].onclick = function(e){
        e.preventDefault()      //阻止a 标签的默认样式
        let a = e.currentTarget;
        let href = a.getAttribute('href')   //a.href会获取到带http的锚点
        let element = document.querySelector(href)
        let top = element.offsetTop
        window.scrollTo(0,top-80)
    }
}




























