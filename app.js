new Vue({
    el: '#app',
    data:{
        name :'Genclik',
        job : 'koplak'
    },
    methods : {
        greet : function(time) {
            return 'Selamat '+ time 
        }
    }
});