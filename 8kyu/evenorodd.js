// DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// SOLUTION
// terminal input
// node evenorodd 23 
//
// terminal output
// odd 
function evenorodd(number){
	if(number%2===0) return 'Even'
	return 'Odd'
}

let number=process.argv[2]
console.log(evenorodd(number))
