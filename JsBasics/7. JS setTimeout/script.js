function Name(){
    let myname= document.getElementById("name_input").value;
    setTimeout(function(){
        document.getElementById("success").innerText=`${myname} enrolled successfully`;
    },10000);//10sec
}

// function Timerfunc(){
//     let time=document.getElementById("numInput").value;
//     let disp=document.getElementById("Timerdisp");
//     for(let i=time;i>=0;i--){
//         setTimeout(function(){
//             disp.innerText=`${i}`;
//         },1000)
//     }
   
// }



function Timerfunc() {
    let time = parseInt(document.getElementById("numInput").value);
    let disp = document.getElementById("Timerdisp");

    for (let i = time; i >= 0; i--) {
        setTimeout(function() {
            disp.innerText = `${i}`;
        },(time-i)*1000); // delay increases every loop by 1 second
    }

}



function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}

x();
