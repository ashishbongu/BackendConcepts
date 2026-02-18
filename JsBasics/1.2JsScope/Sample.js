let a=10; // cannot be redeclared in the same scope
console.log(a);

{
    let a=40; // this belongs to this block.
    console.log(a);
}

console.log(a);//This a doesn't refer to the a that is assigned in the above block, it refers to the global scope.

//This code shows how scope works for let keyword.

add();

function add(){
    let a=10;
    let b=20;
    console.log(a+b);
}


console.log(c)
var c= 10;

//JS Hoisting: During memory creation phase js moves all variables and function declarations to top of the their scope 

// var: Function Scoped | Hoisted | can be updated / redclared
// let: Block Scoped    | Hoisted | can be updated / cannot be redeclared in the same scope
// const: Block Scoped  | Hoisted | cannot be updated / cannot be redeclared  (DECLARATION AND INITIALIZATION SHOULD HAPPEN AT THE SAME TIME)

console.log(window.innerHeight);
console.log(window.outerHeight);

let x=100;
var y=199;

console.log(window.x);
console.log(window.y);

function count(){
    document.getElementById("total_cost").innerHTML="<span>299</span>"
}



