<template>
  <div class="calculator">
    <div class="display">
      <div class="equation">
        <p>{{equation.join('') || ''}}</p>
      </div>
      <div class="current" >
        <p>{{current || '0'}}</p>
      </div>
    </div>
    <div @click="clear" class="button clear">
      <span>C</span>
    </div>
    <div @click="sign" class="button sign">
      <span>+/-</span>
    </div>
    <div @click="percent" class="button percent">
      <span>%</span>
    </div>
    <div @click="divide" class="button operator">
      <span>÷</span>
    </div>
    <div @click="append('7')"  class="button">
      <span>7</span>
    </div>
    <div @click="append('8')" class="button">
      <span>8</span>
    </div>
    <div @click="append('9')" class="button">
      <span>9</span>
    </div>
    <div @click="multiply" class="button operator">
      <span>×</span>
    </div>
    <div @click="append('4')" class="button">
      <span>4</span>
    </div>
    <div @click="append('5')" class="button">
      <span>5</span>
    </div>
    <div @click="append('6')" class="button">
      <span>6</span>
    </div>
    <div @click="subtract" class="button operator">
      <span>-</span>
    </div>
    <div @click="append('1')" class="button">
      <span>1</span>
    </div>
    <div @click="append('2')" class="button">
      <span>2</span>
    </div>
    <div @click="append('3')" class="button">
      <span>3</span>
    </div>
    <div @click="addition" class="button operator">
      <span>+</span>
    </div>
    <div @click="append('0')" class="button zero">
      <span>0</span>
    </div>
    <div @click="dot" class="button">
      <span>.</span>
    </div>
    <div @click="equal" class="button equal operator">
      <span>=</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      equation: [],
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
    };
  },
  methods: {
    clear() {
      this.current = '';
      this.equation = [];
    },
    sign() {
      if (this.current !== '') {
        this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`;
      }
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100.0}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
      this.equation.push(number);
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious(operator) {
      this.previous = this.current;
      this.operatorClicked = true;
      this.equation.push(operator);
    },
    divide() {
      this.operator = (a, b) => b / a;
      this.setPrevious('÷');
    },
    multiply() {
      this.operator = (a, b) => a * b;
      this.setPrevious('×');
    },
    addition() {
      this.operator = (a, b) => a + b;
      this.setPrevious('+');
    },
    subtract() {
      this.operator = (a, b) => a - b;
      this.setPrevious('-');
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous),
      )}`;
      this.previous = null;
      this.equation = [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  display: grid;
  text-align: center;
  margin: auto;
  padding: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  width: 300px;
  font-size:20px;
  background-color:#EDFFF0;
  border-radius: 15px;
  -webkit-animation: action 1s infinite ease-in;
}
.equal {
  border-bottom-right-radius: 15px;
}
.zero {
  grid-column: 1 / 3;
  border-bottom-left-radius: 15px;
}
.button {
  text-align: center;
  border: 0.5px solid #E6E1F4;
  display:grid;
  cursor:pointer;
  background-image: linear-gradient(45deg,#F5E0FE, #FAEDFF)
}
.equation {
  color:#020202;
  font-size:20px;
  max-width: 300px;
  padding-top:10px;
  opacity:0.5;
  overflow-wrap: break-word;
  padding-right:10px;
}
.current {
  width:100%;
  max-width: 300px;
  overflow-wrap: break-word;
}
.current p {
  line-height: 1;
  padding:0;
  margin:0;
  padding-right:10px
}
.button span{
  align-self: center;
  justify-self: center;
}
.button:hover{
  background-color:white;
  opacity:0.5;
}
.operator {
  background-image: linear-gradient(50deg, #FF9E60,#F7D357);
  border: 1px solid #E5C17F;
  color: white;
}
.clear{
  background-image: linear-gradient(-90deg, #F4E0FE, #E2C3ED);
}
.sign {
  background-image: linear-gradient(-90deg, #F4E0FE, #E2C3ED);
}
.percent {
  background-image: linear-gradient(-90deg, #F4E0FE, #E2C3ED);
}
.display {
  grid-column: 1 / 5;
  min-height: 125px;
  height:100%;
  font-size:40px;
  width:100%;
  display: grid;
  align-items: end;
  text-align: right;
}
.display span{
  padding:5px;
}
@-webkit-keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}
@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}
</style>