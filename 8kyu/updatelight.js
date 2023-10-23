// DESCRIPTION
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.
//
// SOLUTION

function updateLight(color){

	// solution#1
	return color=='green'?'yellow':color=='yellow'?'red':'green'

	// solution#2
	return {
		green:'yellow',
		red:'green',
		yellow:'red'
	}[color]

	// solution#3
	// if(color=='red') return 'green'
	// if(color=='green') return 'yellow'
	// if(color=='yellow') return 'red'
}

let color = process.argv[2]
console.log('input color red yellow or red to take effect')
console.log(updateLight([color]))
