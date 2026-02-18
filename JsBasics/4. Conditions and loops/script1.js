let a=10; //global scope

{
    let b=10; //block scoped
    var c=10; //function scoped
}

// console.log(b);
console.log(c)

for(let i=0;i<=10;i++){
    console.log(i);
}
// for const, assignment is not possible!!
// console.log("the value of i is "+i);
