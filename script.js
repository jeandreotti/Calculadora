var screen = document.getElementById('screen_div');
var erase = document.getElementById('erase_input');
var clean = document.getElementById('clean_input')
var porcent = document.getElementById('porcent_input')
var multiply = document.getElementById('multiply_input')
var divide = document.getElementById('divide_input')
var sum = document.getElementById('sum_input')
var minus = document.getElementById('minus_input')
var equal = document.getElementById('equal_input')
var dot = document.getElementById('dot_input')
var one = document.getElementById('one_input')
var two = document.getElementById('two_input')
var three = document.getElementById('three_input')
var four = document.getElementById('four_input')
var five = document.getElementById('five_input')
var six = document.getElementById('six_input')
var seven = document.getElementById('seven_input')
var eight= document.getElementById('eight_input')
var nine = document.getElementById('nine_input')
var zero = document.getElementById('zero_input')


zero.addEventListener('click', function (){insert('0');})
one.addEventListener('click', function(){insert('1');})
two.addEventListener('click', function(){insert('2');})
three.addEventListener('click', function(){insert('3');})
four.addEventListener('click', function(){insert('4');})
five.addEventListener('click', function(){insert('5');})
six.addEventListener('click', function(){insert('6');})
seven.addEventListener('click', function(){insert('7');})
eight.addEventListener('click', function(){insert('8');})
nine.addEventListener('click', function(){insert('9');})

porcent.addEventListener('click', function(){insert('%');})
multiply.addEventListener('click', function(){insert('*');})
divide.addEventListener('click', function(){insert('/');})
sum.addEventListener('click', function(){insert('+');})
minus.addEventListener('click', function(){insert('-');})
dot.addEventListener('click', function(){insert('.');})

//--------------inserir na tela---------------
function insert(num){
    let numeroTela = document.getElementById('screen_div').innerHTML;
    
    if(numeroTela.length > 10){
        
    } else {
        if(numeroTela === 'Digite algo'){
            screen.innerHTML= '';
        } else {
            screen.innerHTML = numeroTela + num;
        }
    }
  
}
equal.addEventListener('click', function(){
    result();
})
function result(){
    valueCalc = document.getElementById('screen_div').value;
}

//--------------apagar tudo---------------
clean.addEventListener('click', function(){
    clear();
})
function clear(){
    screen.innerHTML=' ';
}

//-----------apagar última------------------
erase.addEventListener('click', function(){
    eraseLast();
})
function eraseLast(){
    let eraseScreen = document.getElementById('screen_div').innerHTML;
    screen.innerHTML =  eraseScreen.substring(0, eraseScreen.length -1);
}

//-----------calcular------------------
equal.addEventListener('click' , ()=>{
    calc();
})
let calc = () => {
    let result = screen.innerHTML;

   if(result === ' '){
    screen.innerHTML = 'Digite algo'
   } else{
     let result1 = eval(result);
     screen.innerHTML = result1.toFixed(2);
   }
}

