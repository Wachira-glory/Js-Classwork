

function add(num1,num2){
    const sum = num1 + num2;
    console.log({console:sum});
   // return {'sum': sum};
}
add(2,3);
add(4,5);

function item(){
    const names = ["Anne", "Eunice"];
    
    
}


//function expressions;this is where the function is the value of the variable

const subract = function (num1, num2){
    console.log(num1-num2)
};
subract(20,10);

//arrrow functions
 const multiply = (num1,num2) => console.log(num1*num2);
 multiply(6,9);

//IIFES=>Immediately invoked function
(function(){
    console.log("Hello There");
})();//conjoined

//Hoisting// 
// console.log({person});
// const person = 'human';
// console.log('person 2...',person);

greet()

function greet(){
    console.log("Hi Person");
}

//function expessions and arrow functions doesn't not work here
hello();
const hello = () => console.log("This is a greeting");






