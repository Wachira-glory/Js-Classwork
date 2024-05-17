let fruits = ['Mango', 'Banana', 'Orange'];

let arr= new Array(20,30);

console.log({arr});
console.log({fruits});
 
//changing values in an array
fruits[1]= 2;
console.log({fruits});
console.log('last item' , fruits.slice(-1));

// //last item of an array
// console.log('fruits'{fruits.length -1});

let addLast=fruits.push('Apple');
console.log({fruits});

let addStart =fruits.unshift('Pineapple');
console.log({fruits});

let removeLast = fruits.pop();
console.log({fruits});

let removeFirst = fruits.shift();
console.log({fruits});

let newFruits = fruits.push(['Tomato','Pear'])
console.log(newFruits);

let items = [20, 30, 40, 50, 60];
let add = items.reduce((acc, cur) => acc + cur);//=>(arrow function) returning
console.log({add});

let multiple = items.map(item=> item * 2);
console.log(multiple);

let square = [];
let total = 0;
items.forEach(item => {
    const multiple = item * item;
    console.log(multiple);
    square.push(multiple);
    total+=item
});
 console.log({square});
 console.log({total});


 //Destructuring
 let [num1, num2, num3,...rest] = items;//...rest operator
 console.log({num1});
 console.log({num2});
 console.log({num3});
 console.log({rest});