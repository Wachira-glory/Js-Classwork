let a=20;
let b = 30;

let add= a + b;
console.log({add});

let subtract=a-b;
console.log({subtract});

let division=a/b;
console.log({division});

let multiplication=a*b;
console.log({multiplication});

//checks both the data type and value
let c='20'
let looselyEqualTo = a ==c;
console.log({looselyEqualTo});


let strictlyEqualTo = a ===c;
console.log({strictlyEqualTo});

let notEqualTo = a !=c;
console.log({notEqualTo});

let strictlyNotEqualTo = a !==c;
console.log({strictlyNotEqualTo});

//Increment
a++;
console.log({a});

//Decrement
b--;
console.log({b});

a+=5
console.log(a);

//Implicit coercion
let d=1 *c;
console.log({d});

let e =+c;
console.log({e});

//Explicit coercion
let f = Number(c);
console.log({f});
//changing  a string to a value
c=+c
console.log(c);