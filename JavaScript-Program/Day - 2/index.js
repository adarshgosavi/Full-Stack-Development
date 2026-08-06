// let name = "Adarsh"; 
// name = "Gosavi"
// let age = 20;

// if(true){
//     let c = 80;
//     console.log(c)
// }

// age = 30;
// console.log("MY Name is",name);
// console.log("My Age is " , age)


// const account = 12345;
// console.log(account);



// old Method
// var a = 10;
// var a = 20;
// if(true){
//     var a = 20;
// }

// function fun(){
//     var c = 20;
// }

// var b =  30;
// console.log(c);


//Data Types :
            // 1. Primitive Data Type:
                    //   1)number, 2)string , 3)boolean , 4)undefined , 5)null , 6)bigint , 7)Symbol.              
            // 2. Non Primitive Data Type:
                    //   1)array , 2)object , 3)function


// Primitive Data Types

// number 
// let a = 10;
// let b = 2.27;
// console.log(a,b);
// console.log(typeof a ,typeof b)


// // string
// let c = "my name is adarsh"
// let d = "gosavi"
// console.log(c,d);


// // boolean
// let login = true;
// let f = false;
// console.log(login,f)


// // undefined
// let user;
// console.log(user)


// // bigint
// let g = 125478778878745788778n;
// console.log(g)

// // null
// let weather = null;
// console.log(weather)
// console.log(typeof weather) //output:object

// // symbol
// const id1 = Symbol("id")
// const id2 = Symbol("id")
// console.log(id1==id2)



// Non-Primitive Data Types

// array
// let arr = [10,20,30,"Rohit",true]
// console.log(arr)
// console.log(typeof arr)


// // object
// let obj = {
//         name:"Adarsh",
//         account:12345,
//         age:20,
//         category:'sc'
// }
// console.log(obj)
// console.log(typeof obj)


// // function
// let s = function add(){
//         console.log("Hello World")
// }
// console.log(s)
// s()
// console.log(typeof s)




//Primitive data type is immutable

// let a = 10
// let b = a
// b = 20
// console.log(a,b)

// let str = "Adarsh";
// str[0] = "R";
// console.log(str[0])



// // Non Primitive data type mutable

let arr = [10,20,30,40]
arr.push(50);
arr[0] = 100;
console.log(arr)


// let obj ={
//         name:"Adarsh",
//         age:21
// }

// let obj2 = obj
// obj2.name = "Rohan"
// console.log(obj);