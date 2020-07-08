var vue = new Vue({
  el: '#app',
  data: {
    result: '',
    n1: '',
    n2: '',
  },
  methods: {
    input: function(char) {
      this.result = this.result.toString();
      this.result+=char;
    },
    reset: function() {
      this.result = '';
      this.result2 = '';
      this.result3 = '';
      this.n1 = '';
      this.n2 = '';
    },
    calc: function() {
      this.result = parseInt(this.n1)+parseInt(this.n2);
      this.result2 = this.result*1.13;
      this.result3 = this.result*1.17;
    },
    multiply10: function() {
      this.n1 = parseInt(this.n1*10)
      this.result = parseInt(this.n1)+parseInt(this.n2);
      this.result2 = this.result*1.13;
      this.result3 = this.result*1.17;    
    },
    multiply100: function() {
      this.n1 = parseInt(this.n1*100)
      this.result = parseInt(this.n1)+parseInt(this.n2);
      this.result2 = this.result*1.13;
      this.result3 = this.result*1.17;    
      
    },
    multiply2: function() {
      this.n2 = parseInt(this.n2*2)
      this.result = parseInt(this.n2)+parseInt(this.n1);
      this.result2 = this.result*1.13;
      this.result3 = this.result*1.17;    
    },
    multiply4: function() {  
      this.n2 = parseInt(this.n2*4)
      this.result = parseInt(this.n2)+parseInt(this.n1);
      this.result2 = this.result*1.13;
      this.result3 = this.result*1.17;    
    },
  }
})