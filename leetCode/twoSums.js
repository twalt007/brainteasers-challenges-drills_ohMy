//Difficulty: Easy
// #1 TwoSum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/////////////////////////////////////////////////////////////////////////////////////////

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

 /////////~~~PSUEDO~~~///////////
 //variables = array; 
    //loop through intergers
    //take first interger A and add next interger in array  B~~
    //check to see if equal to sum
    //if yes, return
    //if no, move to next variable B and try with A again
    //if nothing once B has reached the end of the array, then increment A; rinse and repeat
    var nums = [1,7,4,12,39];
    var target = 16;

    var twoSum = function(nums, target) {
        var returnPair=[];
        for (var i=0, len=nums.length; i < len; i++){
            var firstInt = nums[i];
            for (var x=i+1; x < nums.length; x++){
                var secondInt = nums[x];  
                if (firstInt+secondInt === target){
                    returnPair.push(i, x);
                    break;
                } 
            }          
        }   
              
      return returnPair;
    };

var finalAnswer = twoSum(nums,target);
console.log(finalAnswer);

//Personal Variations:
//~~for loop upgrade

//~~faster logic than looping through and adding


//Others' Solutions

var nums = [1,7,4,12,39];
var target = 16;

    var twoSum = function(nums, target) {
        var firstIndex = new Map();
        var result = [];

        for (var i=0, len = nums.length; i<len; i++){
            var num = nums[i];
            var complement = target - num;
            
            if(firstIndex[complement] !== undefined){
                result.push( firstIndex[complement], i);

                return result;
            }

            firstIndex[num] = i
        }

        return result;
    };

var finalAnswer = twoSum(nums,target);
console.log(finalAnswer);



//// and even cleaner:

const twoSum = (nums, target) => {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];
  
      if (another in map) {
        return [map[another], i];
      }
  
      map[nums[i]] = i;
    }
  
    return null;
  };




//Pending Exploratory Questions
//~~Is there a better lloop than a for loop?  
//~~for while?