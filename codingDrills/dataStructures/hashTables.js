“listen”
“silent”
=> true

“listen”
“listen”
=> true

“listens”
“silent”
=> false



pseudo:

define hashTable
loopthrough string 1
	at each value,
		check if in hash table
			if not, add as key to hash table, with value of 1
			if yes,  value++

loop through string 2
	at each value,
		check if in the hash table,
			if yes, value--
			if not - not and anagram → false
		make sure value sin hash table are 0

“listens”
“silent”

cost isAnagram = (string1, string2) => {
	let map = {};
	for (let i=0; i<string1.length; i++){
		if(!map[string1[i]]){
			map[string1[i]] = 1;
}else{
	map[string1[i]]++;
};
};
	for (let i=0; i<string2.length; i++){
	let checkedLetter = string2[i];
	if(!map[string2[i]]){
		return false;
};
if(map[string2[i]]){
	map[string2[i]]--;
};
};
let counters = Object.value(map);
for (let i=0; i<counters.length; i++){
	let counter = counters[i];
	if (counter !== 0){
	return false;
};
};
return true;
};

const isAnagram = (string1, string2) => {
	if (string1.length !== string2.length) return false;
	
	const map = {};

	for (let i = 0; i < string1.length; i++) {
		if (map[string1[i]] === undefined) {
			map[string1[i]] = 1;
 		} else {
			map[string1[i]]++;
 		};

		if (map[string2[i]] === undefined) {
			map[string2[i]] = -1;
 		} else {
			map[string2[i]]--;
 		};
 	};
	
     Object.keys(obj).every(value => value ==0 );

};


Object.keys(object); => key[]
Object.values(object); => value[]


Map.get()  →  values
map.has()  → 	keys
map.set()
map.forEach()
map.entries()


object → for key in obj  


array.every(); => boolean
array.some(); => boolean

Object.keys(object); => key[]
Object.values(object); => value[]



const isAnagram = (string1, string2) => {
	if (string1.length !== string2.length) return false;
	
	const map = {};

	for (let i = 0; i < string1.length; i++) {
		if (map[string1[i]] === undefined) {
			map[string1[i]] = 1;
 		} else {
			map[string1[i]]++;
			if (map[string1[i]] === 0) delete map[string1[i]];
 		};

		if (map[string2[i]] === undefined) {
			map[string2[i]] = -1;
 		} else {
			map[string2[i]]--;
			if (map[string2[i]] === 0) delete map[string2[i]];
 		};
 	};
	return !Object.keys(map).length;
};

array.every();
array.some();

Object.keys(object); => key[]
Object.values(object); => value[]


Map.get()  →  values
map.has()  → 	keys
map.set()
map.forEach()
map.entries()


object → for key in obj  




const isAnagram = (string1, string2) => {
	if (string1.length !== string2.length) return false;
	
	const map = {};

	for (let i = 0; i < string1.length; i++) {
		if (map[string1[i]] === undefined) {
			map[string1[i]] = 1;
 		} else {
			map[string1[i]]++;
			if (map[string1[i]] === 0) delete map[string1[i]];
 		};

		if (map[string2[i]] === undefined) {
			map[string2[i]] = -1;
 		} else {
			map[string2[i]]--;
			if (map[string2[i]] === 0) delete map[string2[i]];
 		};
 	};
	return !Object.keys(map).length;
};

array.every(); => boolean
array.some(); => boolean

Object.keys(object); => key[]
Object.values(object); => value[]


const obj = {
	‘hello’: ‘world’,
	‘foo’: ‘bar’,
};

for (const key in obj) {
	obj[key] = obj[key]*2
};

for (const value of obj) {
	value === ‘world’
};


Map.get()  →  values
map.has()  → 	keys
map.set()
map.forEach()
map.entries()


object → for key in obj

