// DESCRIPTION
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
//
// SOLUTION
//
function booleantostring(b){
	return b ? 'true' : 'false'
	// return b.toString()
}

let value = JSON.parse(process.argv[2].toLowerCase())
console.log(`you input ${value} value`)
console.log(booleantostring(value))
