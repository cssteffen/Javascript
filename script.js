function multiply(a, b) {
	return a * b;
}

let total =multiply(5, 10);

//alert(total);

/*
1. Make the above code have a function called checkDriverAge(). 
Whenever you call this function, you will get prompted for age. 
Use Function Declaration to create this function.
Notice the benefit in having checkDriverAge() instead of copying 
and pasting the function everytime?
*/
function checkDriverAge() {
	let age = prompt("What is your age?");
		console.log("checkDriverAge");

if(Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if(Number(age)> 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on you first year of driving. Enjoy the ride!");
}
}

//checkDriverAge();

/*
2. Create another function that does the same thing, called 
checkDriverAge2() using Function Expression.
*/
let checkDriverAge2 = function(){
		let age = prompt("What is your age?");
		console.log("checkDriverAge2");
if(Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if(Number(age)> 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on you first year of driving. Enjoy the ride!");
}
}
//checkDriverAge2();

/*
BONUS: Instead of using the prompt. Now, only use console.log and make the 
checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92); it returns "Powering On. Enjoy the ride!"
*/
function checkDriverAge3(age) {

if(Number(age) < 18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if(Number(age)> 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on you first year of driving. Enjoy the ride!");
}
}
checkDriverAge3();