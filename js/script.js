// CLEAR RESULT SCREEN FUNCTIONS
function q01ClearResultScreen() { document.getElementById("q01ResultScreen").innerHTML = "Result Screen "; }

function q02ClearResultScreen() { document.getElementById("q02ResultScreen").innerHTML = "Result Screen "; }

function q03ClearResultScreen() { document.getElementById("q03ResultScreen").innerHTML = "Result Screen "; }

function q04ClearResultScreen() { document.getElementById("q04ResultScreen").innerHTML = "Result Screen "; }

function q05ClearResultScreen() { document.getElementById("q05ResultScreen").innerHTML = "Result Screen "; }

function q06ClearResultScreen() { document.getElementById("q06ResultScreen").innerHTML = "Result Screen "; }

function q07ClearResultScreen() { document.getElementById("q07ResultScreen").innerHTML = "Result Screen "; }

function q08ClearResultScreen() { document.getElementById("q08ResultScreen").innerHTML = "Result Screen "; }

function q09ClearResultScreen() { document.getElementById("q09ResultScreen").innerHTML = "Result Screen "; }

function q10ClearResultScreen() { document.getElementById("q10ResultScreen").innerHTML = "Result Screen "; }

function q11ClearResultScreen() { document.getElementById("q11ResultScreen").innerHTML = "Result Screen "; }

function q12ClearResultScreen() { document.getElementById("q12ResultScreen").innerHTML = "Result Screen "; }

function q13ClearResultScreen() { document.getElementById("q13ResultScreen").innerHTML = "Result Screen "; }

function q14ClearResultScreen() { document.getElementById("q14ResultScreen").innerHTML = "Result Screen "; }

function q15ClearResultScreen() { document.getElementById("q15ResultScreen").innerHTML = "Result Screen "; }

function q16ClearResultScreen() { document.getElementById("q16ResultScreen").innerHTML = "Result Screen "; }
//1. Write a js program to find maximum between two numbers.

function bigNumberInTwoValue() {
    var num1 = parseInt(document.getElementById("q01Num1").value);
    var num2 = parseInt(document.getElementById("q01Num2").value);
    if (num1 === num2) {
        document.getElementById("q01ResultScreen").innerHTML = "My Dear -- The value of both inputs is the SAME."
    } else if (num1 > num2) {
        document.getElementById("q01ResultScreen").innerHTML = "Your 1st Value is Max value That's " + num1;
    } else if (num1 < num2) {
        document.getElementById("q01ResultScreen").innerHTML = "Your 2st Value is Max value That's " + num2;
    } else {
        document.getElementById("q01ResultScreen").innerHTML = "My Dear -- Plz Type Any Numbers";
        alert("My Dear -- Plz Type Any Numbers");
    }
}

//2. Write a js program to find maximum between Three numbers.

function bigNumberInThreeValue() {
    var num1 = parseInt(document.getElementById("q2Num1").value);
    var num2 = parseInt(document.getElementById("q2Num2").value);
    var num3 = parseInt(document.getElementById("q2Num3").value);

    if (num1 === num2 && num2 === num3) {
        document.getElementById("q02ResultScreen").innerHTML = "My Dear -- All value is SAME";
    } else if (num1 === "" || num2 === "" || num3 === "") {
        document.getElementById("q02ResultScreen").innerHTML = "My Dear Plz Type Only Numbers";
    } else if (num1 > num2 && num1 > num3) {
        document.getElementById("q02ResultScreen").innerHTML = "Your 1st Value is Max value That's " + num1;
    } else if (num2 > num1 && num2 > num3) {
        document.getElementById("q02ResultScreen").innerHTML = "Your 2nd Value is Max value That's " + num2;
    } else if (num3 > num1 && num3 > num2) {
        document.getElementById("q02ResultScreen").innerHTML = "Your 3rd Value is Max value That's " + num3;
    } else {
        document.getElementById("q02ResultScreen").innerHTML = "My Dear -- Plz Type Any Numbers ";
        alert("My Dear -- Plz Type Any Numbers");
    }
}

// 3. Write a js program to check whether a number is negative, positive or zero.

function findNumberCatagory() {
    var num1 = parseInt(document.getElementById("q03Num1").value);
    if (num1 === 0) {
        document.getElementById("q03ResultScreen").innerHTML = "Your Number is ZERO";
    } else if (num1 > 0) {
        document.getElementById("q03ResultScreen").innerHTML = num1 + " Number is POSITIVE";
    } else if (num1 < 0) {
        document.getElementById("q03ResultScreen").innerHTML = num1 + " Number is NEGATIVE";
    } else {
        document.getElementById("q03ResultScreen").innerHTML = " Plz Type Any Numbers";
        alert("My Dear -- Plz Type Any Numbers");
    }
}
// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

function divisibleOrNotBy5And11() {
    var num1 = document.getElementById("q04Num1").value;
    var devideOnFive = num1 % 5;
    var devideOnEleven = num1 % 11;
    if (num1 == "" || num1 == null || num1 == undefined || num1 == NaN) {
        document.getElementById("q04ResultScreen").innerHTML = "My Dear! Plz Type Currect Year";
        alert(" My Dear! Plz Type Currect Year");
    }
    else if (devideOnFive === 0) {
        document.getElementById("q04ResultScreen").innerHTML = "This Number is Divisible by 5";
        if (devideOnEleven === 0) {
            document.getElementById("q04ResultScreen").innerHTML = "This Number is Divisible by 5 and 11";
        } else {
            document.getElementById("q04ResultScreen").innerHTML = "This Number is Divisible by 5 but not Divisible by 11";
        }
    } else if (devideOnEleven === 0) {
        document.getElementById("q04ResultScreen").innerHTML = "Your Number is Divisible by 11";
        if (devideOnFive === 0) {
            document.getElementById("q04ResultScreen").innerHTML = "Your Number is Divisible by 11 And 5";
        } else {
            document.getElementById("q04ResultScreen").innerHTML = "Your Number is Divisible by 11 but not Devisible by 5";
        }
    } else {
        document.getElementById("q04ResultScreen").innerHTML = "My Dear -- This Number can't be Divisible by 11 And 5";
    }
}
// 5. Write a js program to check whether a number is even or odd.
function evenOrOddNumber() {
    var num1 = parseInt(document.getElementById("q05Num1").value);
    var persentageTwo = num1 % 2;
    if (num1 === 0) {
        document.getElementById("q05ResultScreen").innerHTML = " Number is EVEN";
    } else if (persentageTwo === 0) {
        document.getElementById("q05ResultScreen").innerHTML = num1 + " Number is EVEN";
    } else if (persentageTwo === 1) {
        document.getElementById("q05ResultScreen").innerHTML = num1 + " Number is ODD";
    } else {
        document.getElementById("q05ResultScreen").innerHTML = "My Dear -- Plz Type Any Number";
        alert("My Dear -- Plz Type Any Number");
    }
}
// 6. Write a js program to check whether a year is leap year or not.
function checkLeapYear() {
    var num1 = document.getElementById("q06Num1").value;
    if (num1 === 0) {
        document.getElementById("q06ResultScreen").innerHTML = " Number is Zero Type Any Year";
    }
    else if (num1 == "" || num1 == null || num1 == undefined || num1 == NaN) {
        document.getElementById("q06ResultScreen").innerHTML = " My Dear! Plz Type Currect Year";
        alert(" My Dear! Plz Type Currect Year");
    }
    else if (0 === num1 % 4) {
        document.getElementById("q06ResultScreen").innerHTML = num1 + " is a Leap Year";
    }
    else {
        document.getElementById("q06ResultScreen").innerHTML = num1 + " is Not a Leap Year";
    }
}
// 7. 7. Write a js program to check whether a character is alphabet or not.
function checkCharacter4alphabet() {
    var num1 = document.getElementById("q07Num1").value;
    var character = /[A-Za-z]/;
    if (num1 == "") {
        document.getElementById("q07ResultScreen").innerHTML = " Plz Type Any Character";
        alert("Plz Type Any Character");
    }
    else if (num1.match(character)) {
        document.getElementById("q07ResultScreen").innerHTML = " This is a CHARACTER";
    }
    else {
        document.getElementById("q07ResultScreen").innerHTML = " This is not a CHARACTER";
    }
}

// 08. Write a js program to input any alphabet and check whether it is vowel or consonant.
function checkAlphabet4VowelAndConsonant() {
    var num1 = document.getElementById("q08Num1").value;
    var vowel = /[a,e,i,o,u,A,E,I,O,U]/;
    var consonant = /[a,b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z]/
    if(num1 == ""){
        document.getElementById("q08ResultScreen").innerHTML = "Plz Type Any Alphabet";
        alert("Plz Type Any Alphabet");
    }
    else if (num1.match(vowel)) {
        document.getElementById("q08ResultScreen").innerHTML = "The Alphabet is VOWEL";
    }
    else if(num1.match(consonant)){
        document.getElementById("q08ResultScreen").innerHTML = "My Dear -- The Alphabet is CONSONANT";
    }
    else{
        document.getElementById("q08ResultScreen").innerHTML = "My Dear -- This is not Alphabet";
    }
}
// till ok
// 09. Write a js program to check whether a character is alphabet or not.
function character09Check4alphabet() {
    var num1 = parseInt(document.getElementById("q09Num1").value);
    var persentageTwo = num1 % 2;
    if (num1 === 0) {
        document.getElementById("q09ResultScreen").innerHTML = " Number is EVEN";
    } else if (persentageTwo === 0) {
        document.getElementById("q09ResultScreen").innerHTML = num1 + " Number is EVEN";
    } else if (persentageTwo === 1) {
        document.getElementById("q09ResultScreen").innerHTML = num1 + " Number is ODD";
    } else {
        document.getElementById("q09ResultScreen").innerHTML = "My Dear -- Plz Type Any Number";
    }
}
// 10. Write a js program to check whether a character is alphabet or not.
function character10Check4alphabet() {
    var num1 = parseInt(document.getElementById("q10Num1").value);
    var persentageTwo = num1 % 2;
    if (num1 === 0) {
        document.getElementById("q10ResultScreen").innerHTML = " Number is EVEN";
    } else if (persentageTwo === 0) {
        document.getElementById("q10ResultScreen").innerHTML = num1 + " Number is EVEN";
    } else if (persentageTwo === 1) {
        document.getElementById("q10ResultScreen").innerHTML = num1 + " Number is ODD";
    } else {
        document.getElementById("q10ResultScreen").innerHTML = "My Dear -- Plz Type Any Number";
    }
}
// 11. Write a js program to check whether a character is alphabet or not.
function character11Check4alphabet() {
    var num1 = parseInt(document.getElementById("q11Num1").value);
    var persentageTwo = num1 % 2;
    if (num1 === 0) {
        document.getElementById("q11ResultScreen").innerHTML = " Number is EVEN";
    } else if (persentageTwo === 0) {
        document.getElementById("q11ResultScreen").innerHTML = num1 + " Number is EVEN";
    } else if (persentageTwo === 1) {
        document.getElementById("q11ResultScreen").innerHTML = num1 + " Number is ODD";
    } else {
        document.getElementById("q11ResultScreen").innerHTML = "My Dear -- Plz Type Any Number";
    }
}
// 12. Write a js program to check whether a character is alphabet or not.
function character12Check4alphabet() {
    var num1 = parseInt(document.getElementById("q12Num1").value);
    var persentageTwo = num1 % 2;
    if (num1 === 0) {
        document.getElementById("q12ResultScreen").innerHTML = " Number is EVEN";
    } else if (persentageTwo === 0) {
        document.getElementById("q12ResultScreen").innerHTML = num1 + " Number is EVEN";
    } else if (persentageTwo === 1) {
        document.getElementById("q12ResultScreen").innerHTML = num1 + " Number is ODD";
    } else {
        document.getElementById("q12ResultScreen").innerHTML = "My Dear -- Plz Type Any Number";
    }
}
// 13. Write a js program to check whether a character is alphabet or not.
function character13Check4alphabet() {
    var num1 = parseInt(document.getElementById("q13Num1").value);
    var persentageTwo = num1 % 2;
    if (num1 === 0) {
        document.getElementById("q13ResultScreen").innerHTML = " Number is EVEN";
    } else if (persentageTwo === 0) {
        document.getElementById("q13ResultScreen").innerHTML = num1 + " Number is EVEN";
    } else if (persentageTwo === 1) {
        document.getElementById("q13ResultScreen").innerHTML = num1 + " Number is ODD";
    } else {
        document.getElementById("q13ResultScreen").innerHTML = "My Dear -- Plz Type Any Number";
    }
}
// 14. Write a js program to check whether a character is alphabet or not.
function character14Check4alphabet() {
    var num1 = parseInt(document.getElementById("q14Num1").value);
    var persentageTwo = num1 % 2;
    if (num1 === 0) {
        document.getElementById("q14ResultScreen").innerHTML = " Number is EVEN";
    } else if (persentageTwo === 0) {
        document.getElementById("q14ResultScreen").innerHTML = num1 + " Number is EVEN";
    } else if (persentageTwo === 1) {
        document.getElementById("q14ResultScreen").innerHTML = num1 + " Number is ODD";
    } else {
        document.getElementById("q14ResultScreen").innerHTML = "My Dear -- Plz Type Any Number";
    }
}
// 15. Write a js program to check whether a character is alphabet or not.
function character15Check4alphabet() {
    var num1 = parseInt(document.getElementById("q15Num1").value);
    var persentageTwo = num1 % 2;
    if (num1 === 0) {
        document.getElementById("q15ResultScreen").innerHTML = " Number is EVEN";
    } else if (persentageTwo === 0) {
        document.getElementById("q15ResultScreen").innerHTML = num1 + " Number is EVEN";
    } else if (persentageTwo === 1) {
        document.getElementById("q15ResultScreen").innerHTML = num1 + " Number is ODD";
    } else {
        document.getElementById("q15ResultScreen").innerHTML = "My Dear -- Plz Type Any Number";
    }
}
// 16. Write a js program to check whether a character is alphabet or not.
function character16Check4alphabet() {
    var num1 = parseInt(document.getElementById("q16Num1").value);
    var persentageTwo = num1 % 2;
    if (num1 === 0) {
        document.getElementById("q16ResultScreen").innerHTML = " Number is EVEN";
    } else if (persentageTwo === 0) {
        document.getElementById("q16ResultScreen").innerHTML = num1 + " Number is EVEN";
    } else if (persentageTwo === 1) {
        document.getElementById("q16ResultScreen").innerHTML = num1 + " Number is ODD";
    } else {
        document.getElementById("q16ResultScreen").innerHTML = "My Dear -- Plz Type Any Number";
    }
}