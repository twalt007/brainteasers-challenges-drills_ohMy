// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true


////Logic
// - similar to ispalindrome;
// -want to see if charcodes the same from halfway and end
// - quick validity checks: - item entered? - even? - opening symbol? - ending symbol?
//map values
// compare in sets until reach center, or vice versa

//above is too much.  no need
//can create a map array where the first character in a set will be looked up, and compated to value in second if ok, then procceed

////Psuedo Code
//check for content
// check that even
// find half   -->  [0,1,2,3] --> length = %2 = 0; index = length/2-1
// check that one of opening symbols  --> may combine both of these into checks within the loop going through so that don't have to loop throough values so much
// check that one of ending symbols

//inside for loop{
    //current value = s[i]
    //comparison value = s[(s.legnth-1)-i]  --> later we can optimize our loop so that we count backwards in the for loop
        //[0,1,2,3,4,5]
        //[1,2,3,4,5,6]
        //i=0; --> 6-1=5-0=5;
        //i=2; --> 6-1=5-2=3
    //here we will search the current value as the key in our pairs object to look up the value, and compare that to our comparison value
    //if they are the same, we can continue
    //or rather, if they are not the same, we will have the function return false; if this is never triggered, then default return is true
//}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var valid = true;
  

    if (!s.length || s.length%2 !== 0 ){
        valid = false;
        return valid;
    }
    var halfwayIndex = s.length/2-1;
    var pairs = {
        '(':')',
        '{':'}',
        '[':']'
    }

    for (let i = 0; i<=halfwayIndex; i++){
        let currentVal = s[i];
        let compareVal = s[(s.length-1)-i];
        if (!pairs[currentVal]){   //--> may need to change to if !(currentVal in pairs)
            valid = false;
            return valid;
        } 
        if (pairs[currentVal] !== compareVal){
            valid = false;
        }
    }
    return valid;    
};


/////MISTAKES/Learning opportunities!:
// 1.  SLIP UP:         if (!s.length || !s.length%2 === 0 ){
//     SHOULD BE:       if (!s.length || s.length%2 !== 0 ){
// 2.  SLIP UP:         if (!pairs.currentVal)
//     SHOULD BE:       if (!pairs[currentVal])

//solved for case: palindrome.  forgot about cases where brackets closed immediately after --> (){}[]
///             \\\\/\/\////

///need to modify function --> 
checks for what is not allowed:
 
{{(})}}
(( { ) } )

rule: we can't have an ending bracket to a different type if the first type is not yet closed.  


