/*
    Assignment 1
    There is some errors in the codepen example from the lesson
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    When the time is 20-22 the output should be: snacktime
*/

let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 8 && hour <= 11) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour > 11 && hour < 13 ) { 
  textHolder.innerHTML = "It is lunch time";
} else if (hour > 13 && hour < 17 ) { 
  textHolder.innerHTML = "It is chill time";
} else if (hour == 17) { 
  textHolder.innerHTML = "Good afternoon";
} else if (hour >= 18 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time";
} else if (hour >= 19 && hour <= 22) { 
  textHolder.innerHTML = "It is snacktime";
} else {
  textHolder.innerHTML = "Goodnight";
}


/*
    Assignment 2 - follow up from assignment 1
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    Change the time, so it fits your day. It could be:
    8-14: School
    11: Lunch
    and so on..
*/

let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour == 7) { 
  textHolder.innerHTML = "Wake up!";
} else if (hour >= 8 && hour <= 13 ) { 
  textHolder.innerHTML = "It is school time";
} else if (hour >= 14 && hour <= 16) { 
  textHolder.innerHTML = "danish school";
} else if (hour >= 16  && hour <= 18) { 
  textHolder.innerHTML = "It is chill time";
} else if (hour >= 18  && hour <= 19) { 
    textHolder.innerHTML = "It is dinner time";
} else if (hour >= 19 && hour <= 20) { 
    textHolder.innerHTML = "It is shower time";
} else if (hour >= 20 && hour <= 22) { 
    textHolder.innerHTML = "It is chill time";   
} else {
  textHolder.innerHTML = "Goodnight";
}

/*
    Assignment 3
    write a program where the user can write 2 numbers and display the larger one
*/

let x = prompt("enter first number");
let y = prompt("enter second number");
if ( x>y ){
    console.log ( "first number is larger");
}
else{
    console.log( "second number is larger")
}



/*  
    Assignment 4
    make a variable with 3 numbers and sort them with help of JS conditions
*/

let x = prompt("enter first number");
let y = prompt("enter second number");
let z = prompt("enter third number");
if ( y > x && z > y ) { 
    console.log( "( x,y,z)");
} else if (x > y && y > z ) { 
    console.log( "( z,y,x)");
} else if (z > x && x > y ) { 
    console.log( "( y,x,z)");
} else if (z > x && y > z ) { 
    console.log( "( x,z,y)");
} else if (z > y && x > z ) { 
    console.log( "( y,z,x)");
} else if (x > z && y > x ) { 
    console.log( "( z,x,y)");
}

   
