// DESCRIPTION
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//
// SOLUTION
//
function stringrepeat(n, s){
	return s.repeat(n)
	// let text=''
	// for(let count=0; count<n; count++){
	// 	text+=s
	// }
	// return text
}

let text=process.argv[3]
let count=process.argv[2] 

console.log('input text which are can repeat ', stringrepeat(count, text))
