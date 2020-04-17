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
        nama : '',
        jabatan : '',
        keperluan : '',
        nilaiA : 0,
        nilaiB : 0,
        available : true,
        nearby : false
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
        },
        rekap : function() {
            alert('nama : '+ this.nama + ' Jabatan : '+ this.jabatan +' keperluan : '+this.keperluan)
        }
    },
    computed : {
        addAgeA : function() {
            return this.nilaiA + this.age
        },
        addAgeB : function() {
            return this.nilaiB + this.age
        },
        compClasses : function() {
            return {
                available : this.available,
                nearby : this.nearby,
            }
        }
    }
});