const cup ={
    color:'red',
    size:'small',
    texture:'smooth',
    shape:'round',
    functionality:{
        drinkType:'tea',
        temperature:'hot'
    },
   // if you use arrow function use cup.
   //if ou use the name function, use this
    drink: ()=>{
        console.log("dfghjk");
        console.log(`My main purpose is to ${cup.functionality.temperature} ${cup.functionality.drinkType}`);
    }

};
//calling the drink function because we cannot console.log twice else we will get undefined
cup.drink()
console.log({color:cup.color});//turns this into an oject
console.log('size', cup.size);//not object
console.log('temperature',cup.functionality.temperature);

cup.model='glass';
console.log({cup});

const keys= Object.keys(cup)
console.log({keys});

const values= Object.values(cup);
console.log({values});

//deleting from an object
delete cup.model
console.log({cup});

//changing the value
cup.color="blue";
console.log({cup});

const loop= Object.keys(cup).map(item=>{
    return({key:item, values:cup[item]});
})
Object.keys(cup).forEach(item=>{
    console.log(({key:item, values:cup[item]}));
})


