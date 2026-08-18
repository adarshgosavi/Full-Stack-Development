// Scope and Closure , HOF
// Global Scope --> Accessible to everyone 
// Functional --> Accesible only to that function
// Block Level Scope --> Accesible only to that Block 


// let a = 10;
// let b = 20;


// if(true){
//     let d = 30
//     console.log(d)
// }

// function greet(){
//     let c = 30;
    
// }
//  greet();



let global = 30;

function greek(){
    let global = 40;
    console.log(global)
}

greek();