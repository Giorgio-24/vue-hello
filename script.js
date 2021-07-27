console.log('Vue è connesso', Vue)
Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            message: 'Hey you!',
            imageLocation: 'http://www.maxagency.com/blog/wp-content/uploads/2019/05/obama-meme.jpg'
        }
    }
);
