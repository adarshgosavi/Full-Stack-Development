// Array

// let mark = [10,20,30,40,50]

// console.log(mark)
// console.log(mark.length)
// console.log(mark[3])

// // mark[3] = 90
// // console.log(mark)



// // Push Operation
// mark.push(60)
// mark.push("End the Marks")
// console.log(mark)



// // Pop Operation
// mark.pop()
// mark.pop()
// console.log(mark)


// Starting add kar sakta hu, delete the element at first place
// mark.unshift(777)
// console.log(mark);

// mark.shift()
// console.log(mark)



// let arr = [10,20,30,40,50]

// for(let i = 0; i <arr.length; i++){
//     console.log(arr[i])
// }

// for each loop
// for(let num of arr){
//     console.log(num)
// }



// let arr = [10,20,30,40,50]
// let arr1 = arr;
// arr1.push(60)
// console.log(arr1)


// object (non-primitive): Copy by Refernce hota hai
// Primitive : Copy by Value
// const arr = [10,20,30,40,50]
// arr[2] = 33
// console.log(arr)



// slice and splice operation

// const arr =[10,20,30,40,50]
// const arr1 = arr.slice(1,5)
// console.log(arr)
// console.log(arr1)
// const arr2 = arr.splice(1,3,"Adarsh",60)
// console.log(arr)
// console.log(arr2)



// concat 
// const arr =[10,20,30,40,50]
// const arr1 = ["Adarsh", 60,true]
// const arr2 = [70,80,false]

// // const arr4 = arr.concat(arr1,arr2,arr3)
// const arr4 = [arr,arr1,arr2]
// // const arr4 =[...arr,...arr1,...arr2]
// console.log(arr4)



const name =["Adarsh" , "Jay" , "Abhinav" , "Rohan"]
// console.log(typeof name.toString())
console.log(name.join("->"))