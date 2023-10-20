// DESCRIPTION
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
//
// SOLLUTION
//
function sumMix(arr){
	// let sum=0
	// arr.map(el=>sum=+el+sum)
	// return sum
	return arr.reduce((a,b)=>+b+a,0)
}

let arr=[45, 78, '89', 12]
console.log('sum ', sumMix(arr))
