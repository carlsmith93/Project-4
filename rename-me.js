//convert string to number datatype.

var integer = function(numberstring){  //  MAKEUP: Project 2 New Technical/Functions

parseInt(numberstring)
return numberstring
};
var inputnumber = integer(prompt("enter any number here", ""))
console.log(inputnumber)


//Find the smallest value in an array than is greater than a given number.

var smallestvalue = function(inputvalue){
var numarray = [3,12,18]	


if (smallestvalue < 3){
	console.log(numarray[0])
}
else if ( smallestvalue < 12){
	console.log(numarray[1])
}
else{
	console.log(numarray[2])
}
};
	
smallestvalue(parseInt(prompt("enter a number here", ""))) //input value here



//Format a number to use a specific number of decimal places

var number = function(inputnumber){ //start of function
var decimal = inputnumber.toFixed(2)
console.log(decimal)
return number
}
number(parseFloat(prompt("enter a number here wiht more than 2 decimals!","")))  //Parsefloat changes number to decimal