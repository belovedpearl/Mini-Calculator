let num1 = document.getElementById("count1").value;
let num2 = document.getElementById("count2").value;
//let intnum1 = parseInt(num1)
//let intnum2 = parseInt(num2)

//document.getElementById("count1").value;
//document.getElementById("count2").textContent = num2;


//let sumEl = document.getElementById("sum-el")


function add() {
    num1 = document.getElementById("count1").value;
    num2 = document.getElementById("count2").value;
    document.getElementById("sum-el").innerHTML = parseInt(num1) + parseInt(num2);

}


function subtract(){
    num1 = document.getElementById("count1").value;
    num2 = document.getElementById("count2").value;
    document.getElementById("sum-el").innerHTML = parseInt(num1) - parseInt(num2);
}

function divide(){
    num1 = document.getElementById("count1").value;
    num2 = document.getElementById("count2").value;
    document.getElementById("sum-el").innerHTML = parseInt(num1) / parseInt(num2);
}

function multiply(){
    num1 = document.getElementById("count1").value;
    num2 = document.getElementById("count2").value;
    document.getElementById("sum-el").innerHTML = parseInt(num1) * parseInt(num2);
}

