setTimeout(function(){
    siteWelcome.classList.remove('active')
},1000)

let specialTags = document.querySelectorAll('[data-x]');
for(let i = 1; i < specialTags.length; i++){
    specialTags[i].classList.add('offset');
}

findClosest()
window.onscroll = function(){
    if(window.scrollY > 0){     //页面垂直方向滚动距离
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
    findClosest()
}
function findClosest(){
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for(let i = 1; i < specialTags.length; i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i;
        }
    }
    // for(let i = 0; i < specialTags.length; i++){
    //     specialTags[i].classList.remove('active')

    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#'+ id +'"]');
    let li = a.parentNode;
    let brotherAndMe = li.parentNode.children;
    for(let i = 0; i < brotherAndMe.length; i++){
        brotherAndMe[i].classList.remove('highlight');
    }
    li.classList.add('highlight');

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

function animate(time){
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i = 0; i < aTags.length; i++){
    aTags[i].onclick = function(e){
        e.preventDefault()      //阻止a 标签的默认样式
        let a = e.currentTarget;
        let href = a.getAttribute('href')   //a.href会获取到带http的锚点
        let element = document.querySelector(href)
        let top = element.offsetTop

        // let n = 25;
        // let t = 250/n;
        let currentTop = window.scrollY;
        let targetTop = top-80;
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
        let s = targetTop - currentTop
        let coords = {y : currentTop};
        let t = Math.abs((s/100)*300)
        if(t > 500){t = 500}
        let tween = new TWEEN.Tween(coords)
            .to({y : targetTop},t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function(){
             window.scrollTo(0,coords.y)
        })
        .start();
    }
}


























