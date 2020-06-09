// #14
//  Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
};

//logic
//likely go in order ratherthan reverse; faster
//no need to convert to lowercase
//need to check each item in array's first value against the others
//need a way to store that item in a variable 
//will be performing if checks
//will be adding on to that until reach a failed check
//will need a return value for if all check fail
//will also need a way to access the values in each string.
//LEARNING --> can I just grab the first item in a string?  I believe I can, no need to break into smaller array. 
//              I believe should eb able to do string[i]
//              if not, next choice might be slice or othher

//psuedo Code:
// set up variables
//      - var return vlue
//      - var currently held value that is being tested; preset to the first value of the first item in the array
//      - may add more as find need 
// for my planning, will remind myself how accessign this information might look, as will influence my loop
// loop 
//      using current compare value{ do work }
//      // UNDO  // @ end will need to update compare value
//      work:
//          is it equal to the equivalent value in other strings?  (if check)
//          if no, exit loop and return ---> update here.  decided would be better to set the return value upon entering this loop, rather than at the beginning.  that way initial value can be 0. wich will return correctly if fi check fails. this means we also need to get rid of updating the value at thhe end        
//          if yes to one, contiune to all
//          if yes to all, concatenate to result   ----> for ease of comparing loops, I want to have return value and current check value be separate.  this way I only have to check value of one item at a time, rather than grab a chunk of data.
//          keep going until fail a check or all the same.  return the result value
//    

// Challenges encountered while coding:
// #1 how to get accessing items to work - loop in loop?
// [[str],[str],[str]]
// strs[0][0]
// strs[1][0]
// strs[2][0]
// strs[x][0]

// strs[0][1]
// strs[1][1]
// strs[2][1]
// strs[x][1]

// strs[0][2]
// strs[1][2]
// strs[2][2]
// strs[x][2]

// strs[0][x]
// strs[1][x]
// strs[2][x]
// strs[x][x]

// don't need a loop for the second index, so much as a counter that will increment
// chunk of code that I'm not sure about , and at the end of running, it will increment this counter, and then run again with new value until we fail

// #2 how to keep going inside  of the loop to check next value/know when done checking all values and concatenate

//actual code: 
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var result = "";
    var counter = 0;
    var curr = strs[0][counter];
    var test = () => {
        for (i=1;i<strs.length;i++){
        var comp= strs[i][counter];
        if(comp !== curr){
            return result;
        } 
        counter += curr;
    }

    do {
        test();
        counter++;
    } while(counter < strs[0].length-1);
    
    return result;   
};



// improvement ideas (while coding):
// would it be possible to use map?

//things to review:
// 1. how to access letters in a string
// 2. how  to stop a function/break out of it
// 3. learn to identify this sort of two loop 
// 4. learn how to avoid using two loops