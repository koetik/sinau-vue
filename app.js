new Vue({
    el: '#app',
    data:{
        name :'Genclik',
        job : 'koplak',
        website : 'https://github.com/koetik/',
        websiteTag : '<a href="https://github.com/koetik/"> website on v-html</a>'
    },
    methods : {
        greet : function(time) {
            return 'Selamat '+ time 
        }
    }
});