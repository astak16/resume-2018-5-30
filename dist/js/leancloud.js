'use strict';

!function () {
    var view = View('section.message');

    var model = {
        init: function init() {
            var APP_ID = 'bwAIbxiYxzybIYnrvbJiCpKi-gzGzoHsz';
            var APP_KEY = 'G8Bz1DWsgyFAojKWaKCKO8Rd';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        //获取数据
        fetch: function fetch() {
            var query = new AV.Query('Message');
            return query.find(); //Promise 对象
        },
        //创建数据
        save: function save(name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({ //Promise 对象
                name: name,
                content: content
            });
        }
    };

    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function init(view, model) {
            this.view = view;
            this.model = model;
            this.messageList = view.querySelector("#messageList");
            this.form = view.querySelector("form");
            this.model.init();
            this.loadMessages();
            this.bindEvents();
        },

        loadMessages: function loadMessages() {
            var _this = this;

            this.model.fetch().then(function (messages) {
                var array = messages.map(function (item) {
                    return item.attributes;
                });
                array.forEach(function (item) {
                    var li = document.createElement('li');
                    li.innerText = item.name + ':' + item.content;
                    _this.messageList.appendChild(li);
                });
            }, function (error) {}).then( //处理上一个then的结果
            function () {}, function (error) {
                console.log(error);
            });
        },
        bindEvents: function bindEvents() {
            var _this2 = this;

            this.form.addEventListener('submit', function (e) {
                e.preventDefault();
                _this2.saveMessage();
            });
        },
        saveMessage: function saveMessage() {
            var myForm = this.form;
            var content = myForm.querySelector('input[name=content]').value;
            var name = myForm.querySelector('input[name=name]').value;
            this.model.save(name, content).then(function (object) {
                var li = document.createElement('li');
                li.innerText = object.attributes.name + ':' + object.attributes.content;
                var messageList = document.querySelector('#messageList');
                messageList.appendChild(li);
                var content = myForm.querySelector('input[name=content]').value = '';
                var name = myForm.querySelector('input[name=name]').value = '';
            });
        }
    };
    controller.init(view, model);
}.call();