// Write a js program to find maximum between two numbers.

function bigNumberInTwoValue(){
    var num1 = parseInt(document.getElementById("q01Num1").value);
    var num2 = parseInt(document.getElementById("q01Num2").value);
    if(num1 === num2){
        document.getElementById("q01ResultScreen").innerHTML = "My Dear Your 1st and 2nd value is SAME";
    }
    else if(num1 > num2){
        document.getElementById("q01ResultScreen").innerHTML = "Your 1st Value is Max value That's " + num1;
    }
    else if(num1 < num2){
        document.getElementById("q01ResultScreen").innerHTML = "Your 2st Value is Max value That's " + num2;
    }
    else{
    document.getElementById("q01ResultScreen").innerHTML = "My Dear Plz Type Your Numbers";
}
}

// Write a js program to find maximum between Three numbers.

function bigNumberInThreeValue(){
    var num1 = parseInt(document.getElementById("q2Num1").value);
    var num2 = parseInt(document.getElementById("q2Num2").value);
    var num3 = parseInt(document.getElementById("q2Num3").value);

    if(num1 === num2 && num2 === num3){
        document.getElementById("q02ResultScreen").innerHTML = "My Dear Your All value is SAME";
    }
    else if(num1 === "" || num2 === "" || num3 === ""){
        document.getElementById("q02ResultScreen").innerHTML = "My Dear Plz Type Only Numbers";
    }
    else if(num1 > num2 && num1 > num3){
        document.getElementById("q02ResultScreen").innerHTML = "Your 1st Value is Max value That's " + num1;
    }
    else if(num2 > num1 && num2 > num3){
        document.getElementById("q02ResultScreen").innerHTML = "Your 2nd Value is Max value That's " + num2;
    }
    else if(num3 > num1 && num3 > num2){
        document.getElementById("q02ResultScreen").innerHTML = "Your 3rd Value is Max value That's " + num3;
    }
    else{
    document.getElementById("q02ResultScreen").innerHTML = "My Dear Plz Type Your Numbers";
}
}