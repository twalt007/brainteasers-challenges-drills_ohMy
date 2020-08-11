//Given an array of integers, determine whether or not there exists two elements in the array (at different positions) 
//whose sum is equal to some targent value.  Examples: [5, 4, 2, 4], 8 => true
//[5, 1, 2, 4], 8 => false

//logic:
//check if given values
//loop thhrough values
//see if 8-previous value = current value in look
//return true if yes

//How: store in map

{
//sudo code
//check if given values  if !array, if not array, if empty return false.
//let map


//**for (let i=0, i<arr.length,i++){
    //variable definition
        //**let current =
        // let complement = target - current
    //if (search map for complement) {
        //return true
    }
    //add to map
}
////else return false;
)

var canAddTo = function(array,target){
    if (!array || !array.isArray || array.length ){
        return false;
    }

    let complementMap = new Map;
    
    for (let i=0; i<array.length; i++){
        let current = array[i];
        let complement = target - current;
        if (complementMap.has(complement)){
            return true;
        }
        complementMap.set(i, complement);
    }
    return false;
}




////solution from Google

3 approaches to this.
1. Check all combinations in the array for each item. The search would have a quadratic run
time complexity.
2. Sort the array, then binary search it. The sorting and searching each take O(n log n), so the
overall time is O(n log n).
3. Insert every element in the array into a hash table (would run in O(n) time), then search the
table for Sum - X, which would run in O(1). Overall, this would run in O(n) time. In other
words, it would have a linear run time complexity.
 1. The steps here are simply inserting into a hash table,
 2. and then for each X in the table, searching the table for Sum - X.
Pseudo
for (i=0; i<arr.length - 1 ;i++)
{
hash(arr[i]) = i // key is the element and value is its index.
}
for (i=0 i<arr.length - 1; i++)
{
if (hash(T - arr[i]) != i ) // if T - ele exists and is different we found a
pair
print "pair i , hash(T - arr[i]) has sum T"
}
JS
function isSumIn(array, sum) {
 let hash = {};
array.forEach((value) => {
 // Generate a random value for the key, which we’ll use as an index
later
 hash[value] = Math.random() * Math.random();
 }

 for (key of hash) {
 if (hash.hasOwnProperty(key) {
 // See if the “indices” are unique
 if (hash[(sum - key)] && hash[(sum - key)] !== hash[key]) {
 return true;
 }
 }
 }
 return false;
}
/Interesting alternative/
let hashMapTwoSum = (array, sum) => {
 let hashMap = {};
 let results = [];

 for (let i = 0; i < array.length; i++) {
 if (hashMap[array[i]]){
 results.push([hashMap[array[i]], array[i]]);
 } else {
 hashMap[sum - array[i]] = array[i];
 }
 }
 return results.length > 0;
}