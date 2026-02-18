function outer(){
    let a =10;
    function inner(){
        a++; //lexical scope
        console.log(a);
    }
    return inner();
}

outer();

const func=outer;
console.log(func===outer);

function add(a){
    console.log(a);
    return(a++);
}

let a =add(10)
console.log(add(10));
