let a = 5

function f(){
    let b = 10
    console.log("hello")
}

f();

function place_order(){
   let boxColor= document.getElementById("color");
   if(boxColor.style.backgroundColor=="black"){
    boxColor.style.backgroundColor="green"
   }else{
    boxColor.style.backgroundColor="black"
   }
}


for(var i=1;i<=5;i++){
    setTimeout(function func(){
        console.log(i);
    },i*1000);
}


function outer(){
    let a =10;
    function inner(){
        let b=20;
        console.log(b);
    }
    return inner;
}
outer()();

setTimeout(function c(){
    //syntax for settimeout, 
    //remember!! time tide and js waits for none :)
},1000)

//------------------------------------------

let name = "ashish";
let j=0;

let counter = function(){
    j++;
    console.log(j);
}

counter();
counter();


//------------------------------------------

let add = function(){
    let x= document.getElementById("num1")
    let y= document.getElementById("num2")
    console.log(parseInt(x.value)+parseInt(y.value))
    document.getElementById("addSol").innerText=parseInt(x.value)+parseInt(y.value)
}

//-------------------------------------------

function duno(){
    let p="10";
    function puno(){
        console.log("hello world "+p);
    }
    return puno
}

let ret= duno();
ret()






