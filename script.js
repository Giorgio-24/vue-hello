console.log('Vue è connesso', Vue)
Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            message: 'Hey you!'
        }
    }
);
