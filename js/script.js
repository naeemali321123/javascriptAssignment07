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

function q13ClearResultScreen() {
    document.getElementById("grandTotal").innerHTML = "Null";
    var x = document.getElementsByClassName("reset");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "Result"
    }
}

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
//  method # 02
//     if (num1 > num2) {
//         if (num1 > num3) {
//             document.getElementById("q02ResultScreen").innerHTML = "Your First Value is Max value That's " + num1;
//         } else {
//             document.getElementById("q02ResultScreen").innerHTML = "Your Third Value is Max value That's " + num3;
//         }
//     } else if (num2 > num3) {
//         document.getElementById("q02ResultScreen").innerHTML = "Your Second Value is Max value That's " + num2;
//     } else {
//         document.getElementById("q02ResultScreen").innerHTML = "Your Third Value is Max value That's " + num3;
//     }
// }

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
        document.getElementById("q04ResultScreen").innerHTML = "My Dear! Plz Type Currect Number";
        alert(" My Dear! Plz Type Currect Year");
    } else if (devideOnFive === 0) {
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
    } else if (num1 == "" || num1 == null || num1 == undefined || num1 == NaN) {
        document.getElementById("q06ResultScreen").innerHTML = " My Dear! Plz Type Currect Year";
        alert(" My Dear! Plz Type Currect Year");
    } else if (0 === num1 % 4) {
        document.getElementById("q06ResultScreen").innerHTML = num1 + " is a Leap Year";
    } else {
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
    } else if (num1.match(character)) {
        document.getElementById("q07ResultScreen").innerHTML = " This is a Alphabet";
    } else {
        document.getElementById("q07ResultScreen").innerHTML = " This is not a Alphabet";
    }
}

// 08. Write a js program to input any alphabet and check whether it is vowel or consonant.
function checkAlphabet4VowelAndConsonant() {
    var num1 = document.getElementById("q08Num1").value;
    var vowel = /[a,e,i,o,u,A,E,I,O,U]/;
    var consonant = /[a,b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z,A,B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z]/
    if (num1 == "") {
        document.getElementById("q08ResultScreen").innerHTML = "Plz Type Any Alphabet";
        alert("Plz Type Any Alphabet");
    } else if (num1.match(vowel)) {
        document.getElementById("q08ResultScreen").innerHTML = "The Alphabet is VOWEL";
    } else if (num1.match(consonant)) {
        document.getElementById("q08ResultScreen").innerHTML = "My Dear -- The Alphabet is CONSONANT";
    } else {
        document.getElementById("q08ResultScreen").innerHTML = "My Dear -- This is not Alphabet";
    }
}

// 09. Write a js program to input any character and check whether it is alphabet, digit or special character.
function checkCharacterTypeOf() {
    var num1 = document.getElementById("q09Num1").value;
    var alphabet = /[A-Za-z]/;
    var specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (num1 == "") {
        document.getElementById("q09ResultScreen").innerHTML = "My Dear -- Plz Type Any Character";
        alert("My Dear -- Plz Type Any Character");
    } else if (num1.match(alphabet)) {
        document.getElementById("q09ResultScreen").innerHTML = "This Character is Alphabet";
    } else if (specialCharacters.test(num1)) {
        document.getElementById("q09ResultScreen").innerHTML = "This Character is Special Characters";
    } else if (digit.indexOf(num1)) {
        document.getElementById("q09ResultScreen").innerHTML = " This Character is Digit";
    } else {
        alert("My Dear -- Plz Type Any Character");
        document.getElementById("q09ResultScreen").innerHTML = "My Dear -- Plz Type Any Character";
    }
}
// 10. Write a js program to check whether a character is uppercase or lowercase alphabet
function checkCharacter4LowercaseAndUppercase() {
    var num1 = document.getElementById("q10Num1").value;
    var uppercase = /[A-Z]/
    var lowercase = /[a-z]/
    if (num1.match(uppercase)) {
        document.getElementById("q10ResultScreen").innerHTML = "This Character is Uppercase";
    } else if (num1.match(lowercase)) {
        document.getElementById("q10ResultScreen").innerHTML = "This Character is Lowercase";
    } else {
        document.getElementById("q10ResultScreen").innerHTML = "My Dear -- Plz Type Only Alphabet";
        alert("My Dear -- Plz Type Only Alphabet");
    }
}
// 11. Write a js program to input week number and print week day.
function checkWeekDayByNumber() {
    let num1 = document.getElementById("q11Num1").value;
    let weekDay = ['Nothing Plz currect weed Day Number', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let myResult = 'This Day is: ' + weekDay[+num1];
    document.getElementById("q11ResultScreen").innerHTML = myResult;
}

// 12. Write a js program to input month number and print number of days in that month.
function findMonthDay() {
    var num1 = parseInt(document.getElementById("q12Num1").value);
    let monthOfYear = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let myResult30 = 'This Month is: ' + monthOfYear[+num1] + ' in this month Day is 30';
    let myResult31 = 'This Month is: ' + monthOfYear[+num1] + ' in this month Day is 31';
    if (num1 == 1 || num1 == 3 || num1 == 5 || num1 == 7 || num1 == 8 || num1 == 10 || num1 == 12) {
        document.getElementById("q12ResultScreen").innerHTML = myResult31;
    } else if (num1 == 2 || num1 == 4 || num1 == 6 || num1 == 9 || num1 == 11) {
        document.getElementById("q12ResultScreen").innerHTML = myResult30;
    } else {
        document.getElementById("q12ResultScreen").innerHTML = 'Plz Type Currect Number of Year';
    }
}

// 13. Write a js program to count total number of notes in given amount.
function checkNumberOfNote() {
    var num1 = parseInt(document.getElementById("q13Num1").value);
    var notes = ["5000", "1000", "500", "100", "50", "20", "10", "5", "2", "1"];

    var floatNumberOf5000 = num1 / 5000;
    var quanityNoteOf5000 = Math.floor(floatNumberOf5000);
    var num1 = num1 - quanityNoteOf5000 * 5000;

    var floatNumberOf1000 = num1 / 1000;
    var quanityNoteOf1000 = Math.floor(floatNumberOf1000);
    var num1 = num1 - quanityNoteOf1000 * 1000;

    var floatNumberOf500 = num1 / 500;
    var quanityNoteOf500 = Math.floor(floatNumberOf500);
    var num1 = num1 - quanityNoteOf500 * 500;

    var floatNumberOf100 = num1 / 100;
    var quanityNoteOf100 = Math.floor(floatNumberOf100);
    var num1 = num1 - quanityNoteOf100 * 100;

    var floatNumberOf50 = num1 / 50;
    var quanityNoteOf50 = Math.floor(floatNumberOf50);
    var num1 = num1 - quanityNoteOf50 * 50;

    var floatNumberOf20 = num1 / 20;
    var quanityNoteOf20 = Math.floor(floatNumberOf20);
    var num1 = num1 - quanityNoteOf500 * 20;

    var floatNumberOf10 = num1 / 10;
    var quanityNoteOf10 = Math.floor(floatNumberOf10);
    var num1 = num1 - quanityNoteOf10 * 10;

    var floatNumberOf5 = num1 / 5;
    var quanityNoteOf5 = Math.floor(floatNumberOf5);
    var num1 = num1 - quanityNoteOf5 * 5;

    var floatNumberOf2 = num1 / 2;
    var quanityNoteOf2 = Math.floor(floatNumberOf2);
    var num1 = num1 - quanityNoteOf2 * 2;

    var floatNumberOf1 = num1 / 1;
    var quanityNoteOf1 = Math.floor(floatNumberOf1);
    var num1 = num1 - quanityNoteOf1 * 1;

    var totalSum =
        quanityNoteOf5000 * 5000 +
        quanityNoteOf1000 * 1000 +
        quanityNoteOf500 * 500 +
        quanityNoteOf100 * 100 +
        quanityNoteOf50 * 50 +
        quanityNoteOf20 * 20 +
        quanityNoteOf10 * 10 +
        quanityNoteOf5 * 5 +
        quanityNoteOf2 * 2 +
        quanityNoteOf1 * 1;


    document.getElementById("totalOf5000").innerHTML = quanityNoteOf5000 * 5000;
    document.getElementById("totalOf1000").innerHTML = quanityNoteOf1000 * 1000;
    document.getElementById("totalOf500").innerHTML = quanityNoteOf500 * 500;
    document.getElementById("totalOf100").innerHTML = quanityNoteOf100 * 100;
    document.getElementById("totalOf50").innerHTML = quanityNoteOf50 * 50;
    document.getElementById("totalOf20").innerHTML = quanityNoteOf20 * 20;
    document.getElementById("totalOf10").innerHTML = quanityNoteOf10 * 10;
    document.getElementById("totalOf5").innerHTML = quanityNoteOf5 * 5;
    document.getElementById("totalOf2").innerHTML = quanityNoteOf2 * 2;
    document.getElementById("totalOf1").innerHTML = quanityNoteOf1 * 1;

    document.getElementById("notes5000").innerHTML = quanityNoteOf5000;
    document.getElementById("notes1000").innerHTML = quanityNoteOf1000;
    document.getElementById("notes500").innerHTML = quanityNoteOf500;
    document.getElementById("notes100").innerHTML = quanityNoteOf100;
    document.getElementById("notes50").innerHTML = quanityNoteOf50;
    document.getElementById("notes20").innerHTML = quanityNoteOf20;
    document.getElementById("notes10").innerHTML = quanityNoteOf10;
    document.getElementById("notes5").innerHTML = quanityNoteOf5;
    document.getElementById("notes2").innerHTML = quanityNoteOf2;
    document.getElementById("notes1").innerHTML = quanityNoteOf1;
    document.getElementById("grandTotal").innerHTML = totalSum;

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