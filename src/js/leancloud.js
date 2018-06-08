!function(){
    let view = View('section.message')



    let model = {
        init:function () {
            let APP_ID = 'bwAIbxiYxzybIYnrvbJiCpKi-gzGzoHsz';
            let APP_KEY = 'G8Bz1DWsgyFAojKWaKCKO8Rd';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        //获取数据
        fetch: function(){
            let query = new AV.Query('Message')
            return query.find()     //Promise 对象
        },
        //创建数据
        save:function(name,content){
            let Message = AV.Object.extend('Message');
            let message = new Message();
            return message.save({   //Promise 对象
                name: name,
                content: content
            })
        }
    }

    let controller = {
        view:null,
        model:null,
        messageList:null,
        init : function(view,model){
            this.view = view
            this.model = model
            this.messageList = view.querySelector("#messageList")
            this.form = view.querySelector("form")
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },

        loadMessages:function () {
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}:${item.content}`;
                        this.messageList.appendChild(li)
                    })
                },
                function (error) {

                })
            .then(      //处理上一个then的结果
                () => {},(error) => {console.log(error)}
            )
        },
        bindEvents:function(){
            this.form.addEventListener('submit',(e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage:function(){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name,content).then(function(object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}`;
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                let content = myForm.querySelector('input[name=content]').value = ''
                let name = myForm.querySelector('input[name=name]').value = ''
            })
        }
    }
    controller.init(view,model)
}.call()









