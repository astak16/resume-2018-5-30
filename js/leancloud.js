var APP_ID = 'bwAIbxiYxzybIYnrvbJiCpKi-gzGzoHsz';
var APP_KEY = 'G8Bz1DWsgyFAojKWaKCKO8Rd';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let myFrom = doecument.querySelector('#postMessageForm')
myFrom.addEventListener('submit',function(e){
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let Message = AV.Object.extend('Message');
    let message = new Message();
    message.save({
        content: content
    }).then(function(object) {

    })
})

