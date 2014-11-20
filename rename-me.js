//convert string to number datatype.

var integer = function(numberstring){  
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
var decimalplace = parseInt(prompt("enter how many decimal places you want!",""))
var decimal = inputnumber.toFixed(decimalplace)
console.log(decimal)
return number
}
number(parseFloat(prompt("enter a number here with or without a decimal","")))  //Parsefloat changes number to decimal



//Fuzzy-match a number

var userinput = function(fuzzy){
var number = 10;
var percentage = 0.5;
var	higherfuzzy = (number*percentage)+number
var lowerfuzzy = number - (number*percentage)
if (higherfuzzy >= fuzzy){
	if (fuzzy >= lowerfuzzy){
		console.log("The number is a fuzzy match!")
	}
	else{
		console.log("The number is not a fuzzy match!")
	}
}
else{
	console.log("The number is not a fuzzy match")
}
}

userinput(parseInt(prompt("enter your 1st number here to see if it is a fuzzy match!")));
userinput(parseInt(prompt("enter your 2nd number here to see if it is a fuzzy match!")));
userinput(parseInt(prompt("enter your 3rd number here to see if it is a fuzzy match!")));



//  Is the string a URL (Does it start with http:// or https://)?

var url = function(urlinput){
var urlconf1 = urlinput.search("http://");
var urlconf2 = urlinput.search("https://");

if (urlconf1 == 0){
	var urlcheck = true;
}
else{
	if(urlconf2 == 0){
		var urlcheck = true;
	}
	else{
		var urlcheck = false;
	}
}

console.log("is the input string a url? " + urlcheck)
}
url(prompt("enter a url here including http:// or https://"));