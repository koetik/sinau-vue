new Vue({
    el: '#app',
    data:{
        name : '',
        genders : {
        	selected : '',
        	option : [
	        	{key : 'male', value : 'Laki-laki'},
	        	{key : 'female', value : 'Perempuan'},
	        ]	
        },
        profile : {
        	nama : '',
        	tinggi : '',
        	berat : '',
        	warnaMata : '',
        	makananFavorit : '',
        },
        calc : {
        	a : 0,
        	b : 0,
        	res : 0,
        	operator : '+',
        }
    },
    methods : {
        
    },
    computed : {
        calculate : function() {
        	switch (this.calc.operator) {
        		case '+':
        			this.calc.res = this.calc.a + this.calc.b;
        			break;
    			case '-':
    				this.calc.res = this.calc.a - this.calc.b;
        			break;
    			case '*':
    				this.calc.res = this.calc.a * this.calc.b;
        			break;
    			case '/':
    				if (this.calc.b != 0) {
    					this.calc.res = this.calc.a / this.calc.b;
    				} else {
    					this.calc.res = 'Error';	
    				}
        			break;
        	}
        }
    }
});