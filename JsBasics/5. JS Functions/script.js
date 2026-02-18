let myFunction = function (){
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    document.getElementById("answer").innerText= a+b;
}

let name1 = function (){
    let name = String(document.getElementById("name").value)
    document.getElementById("name_space").innerText=name;
}

//another type of function arrow function

let multiply =(a,b) => a*b;
multiply(4,6);

let book = function () {
    let n = Number(document.getElementById("seats").value);
    let container = document.getElementById("seats_selected");
    
    container.innerHTML = "";

    for (let i = 0; i < n; i++) {
        container.innerHTML += '<div class="green"></div>';
    }
}

//another example of functions 

let sub













