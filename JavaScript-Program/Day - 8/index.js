// Function 

// function greeting(){
//     console.log("Hello World")
//     return "true";
// }

// console.log(greeting());

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1 + num2 + num3 + num4;
//     console.log(sum)
// }

// greeting();
// addNumber(5,6);
// addNumber(54,46)


// Rest Operator
// function addNumber(...num){
    
//     let sum = 0;

//     for(let n of num){
//         sum += n;
//     }
//     console.log(sum)
// }

// addNumber(5,5,5,5);
// addNumber(5,5,5);
// addNumber(5,5);
// addNumber(4,5,4,78,7,8,78,5,7,5,7,5,8)



//Spread Operator 

// const arr = [10,20,30,40,50]
// const arr2 = [30,70,80,90,100]

// // const [first,second, ...num] = arr;
// // console.log(first,second,num)

// const ans = [...arr,...arr2]
// console.log(ans)



// Function: Expression 
const addNumber = function(num1,num2){
    return num1 + num2;
}

console.log(addNumber(5,5))