function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;
}

var z=x();
console.log(z);
z();

//--------------------------------------------//
  // these are to show the scope of variable 
/*--------------------------------------------*/
const a=10;
{
    a++;
}

console.log(a);

function add(){
    a++;
}

add();

console.log(a);