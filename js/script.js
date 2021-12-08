//1. Write a js program to find maximum between two numbers.

function bigNumberInTwoValue(){
    var num1 = parseInt(document.getElementById("q01Num1").value);
    var num2 = parseInt(document.getElementById("q01Num2").value);
    if(num1 === num2){
        document.getElementById("q01ResultScreen").innerHTML = "My Dear -- The value of both inputs is the SAME."
    }
    else if(num1 > num2){
        document.getElementById("q01ResultScreen").innerHTML = "Your 1st Value is Max value That's " + num1;
    }
    else if(num1 < num2){
        document.getElementById("q01ResultScreen").innerHTML = "Your 2st Value is Max value That's " + num2;
    }
    else{
    document.getElementById("q01ResultScreen").innerHTML = "My Dear -- Plz Type Numbers";
}
}

//2. Write a js program to find maximum between Three numbers.

function bigNumberInThreeValue(){
    var num1 = parseInt(document.getElementById("q2Num1").value);
    var num2 = parseInt(document.getElementById("q2Num2").value);
    var num3 = parseInt(document.getElementById("q2Num3").value);

    if(num1 === num2 && num2 === num3){
        document.getElementById("q02ResultScreen").innerHTML = "My Dear -- All value is SAME";
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
    document.getElementById("q02ResultScreen").innerHTML = "My Dear -- Plz Type Numbers";
}
}

// 3. Write a js program to check whether a number is negative, positive or zero.

function findNumberCatagory(){
    var num1 = parseInt(document.getElementById("q03Num1").value);
    if(num1 == 0 ){
        document.getElementById("q03ResultScreen").innerHTML = "Your Number is ZERO";
    }
    else{
    document.getElementById("q03ResultScreen").innerHTML = "My Dear -- Plz Type Numbers";
}

}


