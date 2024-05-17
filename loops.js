const multiply = (num) => {
    let neArray = []

 for (let i = 0; i<num.length; i++){
    const multiplyByTwo = num[i]*2;
    neArray.push(multiplyByTwo);
 }
 return neArray;
}
console.log(multiply([2,3,4,5,6,7,8]));

const totalsum = (numbers) =>{
    let sum = 0;
    for(let num of numbers){
        sum+=num;
    }

return sum;
}
console.log(totalsum([2,3,4,5,6,7]));

//while checks if a condition is met
const students = (studentNames) => {
    while(studentNames.length>2){
        console.log("Teach students");
        studentNames.pop();
    if (studentNames.length===2){
        console.log("You are left with two students");
    }
    }
    
};
students(["Emma", "Eve","Ann", "Judith"])

const kickBal = (leg) => {
    do{
        console.log('Kick the Ball');
    }
    while (leg)
    
};
kickBal(false)
