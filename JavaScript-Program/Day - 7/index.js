// Object
// key value

// const user = {
//     name: "Adarsh",
//     age: 20,
//     emailId:"negi@gmail.com",
//     amount:5000,
//     "Plot no.": "83"
// }

// console.log(user["name"])
// console.log(user.age)
// console.log(user["age"])
// console.log(user["Plot no."])

// console.log(typeof user)
//CRUD operation: Create read update delete
// console.log(user.emailId)
// user.aadhar = 1234;
// user.amount = 6000

// // delete user.emailId;
// console.log(user)



// const user = {
//     name: "Adarsh",
//     age: 20,
//     emailId:"negi@gmail.com",
//     amount:5000,
//     "Plot no.": "83"
// }

// const user2 = user
// user2.age = 21
// console.log(user)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for(let key in user){
//     console.log(key,"-->", user[key])
// }

//user.key user["name"] user["age"]


// const user = {
//     name: "Adarsh",
//     age: 20,
//     emailId:"negi@gmail.com",
//     amount:5000,
//     "Plot no.": "83"
// }

// const temp = Object.keys(user);
// for(let keys of temp){
//     console.log(keys)
// }

// for(let keys of Object.values(user)){
//     console.log(keys)
// }

// console.log(Object.entries(user))

// for(let [keys,value] of Object.entries(user)){
//     console.log(keys,"-->",value)
// }


// const name = user.name;
// const age = user.age;

// const {name:userName, age:userAge} = user;

// const arr = [10,20,30,40,50]
// const [first, second] = arr
// console.log(first, second)
// console.log(userName,userAge)



// const user = {
//     name: "Pooja",
//     age: 20,
//     emailId:"negi@gmail.com",
//     amount:5000,
//     greeting: function(){
//         console.log(`My Name is Adarsh Gosavi ${this.name}`)
//         return 30;
//     }
// }
// const va = user.greeting();
// console.log(va);


// const user2 = {
//     name:"Rohan",
//     account:305
// }
// user2.greeting = user.greeting;
// user2.greeting();



// const user = {
//     name: "Pooja",
//     age: 20,
//     emailId:"negi@gmail.com",
//     amount:5000,
//     address: {
//         city: "Nagpur",
//         state: "Maharastra"
//     }
// }


//Shallow Copy

// const user2 = {...user};
// // user2.name = "Sohan"
// user2.address.city ="Pune"
// console.log(user2)
// console.log(user.address.city)



//Deep Copy

// const user2 = structuredClone(user)
// user2.address.city = "Pune"
// console.log(user)


///Key: String || Symbol

const sym = Symbol("id")

const user = {
    name:"Adarsh",
    age: 21,
    0:1000,
    2:"Gosavi",
    [sym]:"Hello World"
}

console.log(user[sym])