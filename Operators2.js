'use strict';

//assignemnt 1
/*
let numOfDaysUntilWeekend = 2;
numOfDaysUntilWeekend -= 1;

1. Use console.log() to log the value just after the variable has been declared
2.  Use console.log() to log the value right after the value of the variable has been changed. 
3. Tell what it does 
*/
let numOfDaysUntilWeekend = 2;
console.log(numOfDaysUntilWeekend);
2
numOfDaysUntilWeekend -= 1;
1
console.log(numOfDaysUntilWeekend);
1

//assignemnt 2
//Addition to numbers
let x = 2;
(x += 3);
console.log(x);
5

//assignemnt 3
//Subtraction to numbers
let x = 6;
(x -= 2);
console.log(x);
4

//assignemnt 4
//write two sentences in two variables and connect them together 
let x = "I am sad. " ;
let y = "How about you?";
(a = x + y);
console.log(a);
"I am sad. How about you?"



//assignemnt 5
//write two variables, one number and one string. add them together
let x = "Hello,";
let y = 2;
(a = x + y);
console.log(a);
Hello,2


//assignemnt 6
//write the answears in the in a comment
let r = 15;
let s = 5;
let t = r + s; //20
let u = r - s; //10 
let v = t / u; //2
let x = r * v;  //30
let y = s % v;  //1

//assignemnt 7
//Why does it not write out? 
let r = 34;
let c = 1;
let x = r - 32 + c;
let y = r++ * 4; 
if(x == 30 || y == 2 ){   //false or false = false
 console.log("yeah you got it");
}
//change a number in a variable, so it print out the text
let r = 34;
let c = 28;
let x = r - 32 + c;
let y = r++ * 4; 
if(x == 30 || y == 2 ){   
 console.log("yeah you got it");
}
"yeah you got it"


//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt, 
//where the user can enter a number. Match the two number and print out the answear
//TIP: search prompt
let x = 10;
let y = prompt ("enter a number");
(a = x+y );
console.log(a);


//assignment 9
//write these numbers in the console and write the output. Explain you thing this happens
    0.1 + 0.2;  //0.30000000000000004
    0.1 + 0.2 === 0.3;   //false
    3  - 1  //2
    3  + 1  //4
    '3' - 1   //2
    '3' + 1   //'31'
    '222' - -'111'  //333


//assignemnt 9
//Write a JavaScript program to determine whether a given year is a leap year 
let x=prompt ("enter a year");
if ( x%4 == 0){
    console.log ( "this is leap year");
}
else{
    console.log( "this is not leap year")
}




