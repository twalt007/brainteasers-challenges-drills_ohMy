

given a list of strings, remove the duplicates
[“string1”,”string2”, “string1”, “string3”, “string 4”, “string1”] 
⇒ 
[“string1”, “string2”, “string3”, “string4”, ‘’]
[] = [];
[04,45];
[0,3,45,


function removeDup(arr){
	let map = {};
 	const output = [];
	
	for (let i=0, let len =arr.length; i<len; i++){
		let current = arr[i];
		if (!map[current]){
			map[current] = true;
			output.push(current);
		};
	};
	return output;
};

//--> use an array if need to return in same order.  Otherwise returning the obejct alone is fine.  
//thishas O(N) time and space.
//would be o(n^2) if had a for inside of the for, or if each for made an instance of map (space)
//even though using an array increases memory, its just 2n, which is basically n

 
