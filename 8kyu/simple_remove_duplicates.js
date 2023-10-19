function solve(arr){
	let newArr=arr.slice().filter((el, idx)=>arr.indexOf(el)!==idx)
	for(let i=0; i<newArr.length; i++){
		arr.splice(arr.indexOf(newArr[i]), 1)
	}
	return arr
}

console.log(solve([3,4,4,5,3,6]))
