// DESCRIPTION
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// SOLUTION
//
function countShips(ships){
	// let count=0
	// ships.map((ship)=>{
	// 	if(ship){count++}
	// })
	// return count
	//
	// best solution
	return ships.filter(Boolean).length
}

const ships=[true, true, false, true, null]
console.log(countShips(ships))
