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


// console.log(addNumber(10,5))
// function addNumber(num1, num2){
//     return num1 + num2;
// }


// const addNumber = function(num1,num2){
//     return num1 + num2;
// }
// console.log(addNumber(5,5))



// Arrow Function 



// let arr = [54,7,5,26,43]
// arr.sort((a,b) => a-b);
// console.log(arr)


// const addNumber = (num1,num2) => num1 + num2
// // if we have single parameter , no need of this()
// const squreNumber = num => num*num //this is a function

// console.log(addNumber(5,8))
// console.log(squreNumber(6))



// const greeting = () => {
//     return {
//         name:"Adarsh",
//         age:20
//     }   
// }


// const greeting = () => ({name:"Adarsh",age:20})
// console.log(greeting())



// IIFE

// (function greeting(){
//     console.log("Hello World")
// })();

// (()=>{
//     console.log("Nice to meet you")
// })();


//
// function greet(){
//     console.log("Hello Wolrd")

// }

// function dance(){
//     console.log("I am Dancing")
// }

// function meet(callback){
//     console.log("Nice to meet you")
//     // dance() // Hardcode (Reusable)
//     callback();
//     console.log("I have finished meeting")
// }

// meet(greet);
// meet(dance);





function blinkitOrderPlaced(){
    console.log("We have started packing your Order.")
}

function zomatoOrderPlaced(){
    console.log("We have started preparing your food.")
}

function payment(amount,callback){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received")
    callback()
}

payment(600,zomatoOrderPlaced);
console.log(`------------------
------------------`)
payment(500,blinkitOrderPlaced);
