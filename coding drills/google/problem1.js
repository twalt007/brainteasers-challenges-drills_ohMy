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