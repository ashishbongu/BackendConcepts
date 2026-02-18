//let us use set timeout 

setTimeout(function(){
    console.log("1st statement");
}, 2000);

function a(b){
    console.log("this is function a \n"+`${b}`);

}

function b(){
    console.log("this is function b");
    return b;
}

a(b());
console.log(b);