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




