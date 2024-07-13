// How to Create a Variable
let a;
var b;


a = 10;
b = 15;
var c = a + b;

let x = 5;   // I will be executed

// x = 6;   I will NOT be executed

// function declaration
function add(a ,b){
    return a * b;
}

// function Expression | anonymous function
const add = function(a ,b){
    return a + b;
}
let c = add(3 , 5)

// function of constructor
const myFunction = function(a , b){
    return a + b;
}

// function hosting
newNumb(5)

function newNumb(y){
    return y * y;
}

// Arrow function
const i = (i , j) => i * j;