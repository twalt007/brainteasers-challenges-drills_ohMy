[1,3,”string”,true,4,[5,[6],7]]
=> [1,2,3,”string”,true,4,5,6,7,8,9,10,11,12,13,14]


Array.isArray(ref) => boolean;



function flatten →

loop through everything
at each piece, check if array
if not, print

if yes, repeat and continue

const flatten = (array) => {
	let flattenedArray = [];
	const printValue = (set) => {
		for (let i=0; i<set.length; i++){
			const current = set[i];
			if (!Array.isArray(current)){
				flattenedArray.push(current)
			} else {printValue(current)};
		};
};
printValue(array);

return flattenedArray;
};

[1,[5,[6],7]]
[1,5,[6],7]
[1,[[[3]]]]
[1, 3]
const flatten = (array) => {
for (let i=0; i<array.length; i++) {
	let current = array[i];
		while (Array.isArray(current)){
			array.splice(i, 1, ...current);
			current = array[i];
		}
	};
return array;
};



flattenedArray = [1,3,”string”,true,4,5,6,7]
set = [1,3,”string”,true,4,[5,[6],7]]
current= [5,[6],7]
i=6
set.length = 6

set = [5,[6],7]
current= 7
i=3
set.legnth = 3

set = [6]
current= 6
i=1
set.legnth = 1


const method = () => {
	let output = 0;
	const helper = () => {
		... 
		output++;
		helper();
};
helper();
	return output;
};



[1,2,[1,1]] => 7
1 + 2 + (2* (1+1))
1 + 2 + 4 
=> 7

[1,2,[1,1,[1,1]], [1]] => 19
1 + 2 + (2 * (1+1 + (3 * (1 + 1)))) 

const doMath = (arr) => {
	for (let i=0; i<arr.length; i++){
		let depth = 1
		while (Array.isArray(arr[1]){
			depth++	
		depth * sum
		};
		addition
	};

	return sum
};


loop through values
	check if array
		counterDepth = 1
		if not, leave it
		if array, 
			increment counter
			repeat
	Add/reduce * counter
			
[2,3,4,[1,1,[1,1]]

[1,1,[1]] => 3
const doMath = (arr) => {
	const checkValue = (set, layer = 1) => {		
		let sum = 0;
	for (i=0; i<set.length; i++){
		if (Array.isArray(set[i])) {
			sum += checkValue(set[i], layer + 1);
 			continue;
 		};
		sum = sum + set[i];
	};
	return sum * layer;
};
return checkValue(arr);
};


const doMath = (arr) => {
	for (let i=0; i<arr.length; i++){
		let depth = 1
		while (Array.isArray(arr[1]){
			depth++	
		depth * sum
		};
		addition
	};

	return sum
};


loop through values
	check if array
		counterDepth = 1
		if not, leave it
		if array, 
			increment counter
			repeat
	Add/reduce * counter
			
[2,3,4,[1,[1],[[[]]], [1,1]]

[1,1,[1], 1] => 5
const doMath = (arr, layer = 1) => {
	let sum = 0;
	for (i=0; i<arr.length; i++){
		if (Array.isArray(arr[i])) {
			sum += doMath(arr[i], layer + 1);
 			continue;
 		};
		sum = sum + arr[i];
	};
	return sum * layer;
};
 				{key: 9}	  2
const reduceMethod = (accum, current, index) => {
	accum[current] = Math.random() * index;
	return accum;
};

12345


const value = [‘key’, ‘key1’].reduce(reduceMethod, {}); // 3

arr  [2,3,4,[1,1,[1,1]]
set	[2,3,4,[1,1,[1,1]]
i	3
set.length = 4
sum = 9
depth  1
number 
multNum

set	[1,1,[1,1]]
i	2
set.length = 3
sum = 2
depth  1
number 
multNum

set	[1,1]
i	2
set.length = 2
sum = 2
depth  1
number 
multNum






array.reduce((accum, current, index) => {}, initalValue);

arr  [2,3,4,[1,1,[1,1]]
set	[2,3,4,[1,1,[1,1]]
i	3
set.length = 4
sum = 9
depth  1
number 
multNum

set	[1,1,[1,1]]
i	2
set.length = 3
sum = 2
depth  1
number 
multNum

set	[1,1]
i	2
set.length = 2
sum = 2
depth  1
number 
multNum

