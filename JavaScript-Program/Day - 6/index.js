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



// const name =["Adarsh" , "Jay" , "Kriti" ,"Piyush", "Sanket", "Rohan"]
// console.log(typeof name.toString())
// console.log(name.join("->"))
// console.log(name.indexOf("Jay"))
// console.log(name.lastIndexOf("Jay"))
// console.log(name.includes("Jay"))

//sort
// console.log(name.sort())

// name.reverse()
// console.log(name)



// const arr = [101,70,80,32,91]
// console.log(arr)

// // console.log(a.sort()) not sort 

// arr.sort((a,b)=>a-b)

// // -ve: pehle a aayega fr b aayega
// // +ve: b aayega fr a aayega
// console.log(arr)

// arr.sort((a,b)=> b-a)
// console.log(arr)



// Because:
// b - a negative → larger value comes first.
// b - a positive → smaller value moves later.


// Summary
// sort() → sorts values as strings (alphabetically) by default.
// sort((a, b) => a - b) → sorts numbers in ascending order.
// sort((a, b) => b - a) → sorts numbers in descending order.




// Flattening 
// const arr = [10,20,[45,45,45,54],30,40,[50,60,[101,102,103],70,80],90,100]
// const a = arr.flat(Infinity)
// console.log(a)
// console.log(arr[4][2][1])


const a = [10,50,"Adarsh",45.12,true]
a.name ="Mohan"
console.log(a)