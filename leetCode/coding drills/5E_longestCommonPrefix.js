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
        var failed = false;
            if(comp !== curr){
                failed = true;
                return;
            } 
        }
        if (!failed){
            result += curr;
            counter++
        }        
    }

    do {
        test();
    } while(counter < strs[0].length-1);
    
    return result;   
};

//fiexed solution:
var longestCommonPrefix = function(strs) {

    var result = "";
    var counter = 0;
    var match = true;

    var test = function() {
        for (i=1;i<strs.length;i++){
          var comp= strs[i][counter];
          if(comp !== curr){
              match = false;
              return;
          } 
        }
        if (match){
            result += curr;
            counter++;
        }        
    }
    
    if(strs.length === 0){
      return result;
    }
    if(strs[0] && !strs[1]){
        result = strs;
      return result;
    }
    while(strs.length && match && counter+1 <= strs[0].length-1 )
  return result;   
};

  
  longestCommonPrefix(['string', 'stlung', 'stroo']);




  //issues: 
//    - considiotnality with !failed not accurate
//    - ***scoping off for counter incrementation***
//          - when Var curr was at the head of the function, its value got assigned the first time, and just because 'counter' got reassaigned did not mean that curr's value was looked up each time
//          - as such its value didn't change like we needed it to until we put it inside the 'while' loop
//          - result and counter are both fine because with each for loop we are reassigning the values in these variables, which are then referenced and looked up freshly each time they are used
//    - issues with if check - needed to chagne to default true/fales plus a return statement, otherwise result would update even if one of the strings in the array did not match but others after it did
//    - was able to move 'match' to outside for loop and add conditional to while loop.  this stopped the while loop from continuing once a negatve was found
//    - needed to account for fringe cases: strs=[], strs=['a']


// Leet Code Solutions: Many.  below is closest to my approach, in java

public String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) return "";
    for (int i = 0; i < strs[0].length() ; i++){
        char c = strs[0].charAt(i);
        for (int j = 1; j < strs.length; j ++) {
            if (i == strs[j].length() || strs[j].charAt(i) != c)
                return strs[0].substring(0, i);             
        }
    }
    return strs[0];
}


// Complexity Analysis

// Time complexity : O(S)O(S) , where S is the sum of all characters in all strings. In the worst case there will be nn equal strings with length mm and the algorithm performs S = m \cdot nS=m⋅n character comparisons. Even though the worst case is still the same as Approach 1, in the best case there are at most n \cdot minLenn⋅minLen comparisons where minLenminLen is the length of the shortest string in the array.
// Space complexity : O(1)O(1). We only used constant extra space.

//try using indexOf method***  --> this will be like the 'horizontal method'  given on leetcode

//1. find shared prefix between string 1 and string 2
//   ///  while (indexOf is false) , keep reducing item searched for;
// 2. once returned, use this to repeat on other items
//return final piece

//save return value
//get rid of exceptions
//comparison value
//while loop
// /// work to reduce comparison value - pop; --> increase; more likely that will be smaller than longer
// /// change comparison value - pop, slice, 


//know that will need to compare some value to another value multiple times
//comparison prefix
//compare to next item in array
//while the item cannot be found, (so IndexOf is returning 0 as the starting position), keep reducing the prefix


//attempting from memory

//check if exists
//prefix = initial value 
//for each item in the array, will check if the first one exists, if not, we'll go and reduce the first one by 1


var longestCommonPrefix = function(strs) {
    if (!strs.length){
        return ''
    };

    var prefix=strs[0];

    for (var i=1; i< strs.length; i++ ){
        while (strs[i].indexOf(prefix)!=0){
            prefix = prefix.slice(0,-1)
        }
    }

    return prefix;
}

//things I'm foggy about:
// - will prefix really be updated by the loop?

    