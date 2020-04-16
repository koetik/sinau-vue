new Vue({
    el: '#app',
    data:{
        name :'Genclik',
        job : 'koplak',
        website : 'https://github.com/koetik/',
        websiteTag : '<a href="https://github.com/koetik/" target="blank"> website on v-html</a>',
        age : 20,
        x : 0,
        y : 0,
    },
    methods : {
        greet : function(time) {
            return 'Selamat '+ time 
        },
        add : function(val) {
            this.age += val
        },
        substract : function(val) {
            this.age -= val
        },
        updateXY : function(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
});