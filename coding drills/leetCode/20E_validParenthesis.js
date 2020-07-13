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


solve based upon some counter scenarios
not acceptable:
 ){},  {}(          1. if ends or starts with wrong typeof, throw out
(( { ) } )          2. if different closing type before own group is closed, not
((){ )              3. solution - could asign a map that counts to see if equal

    {
        (:2,
        ):1,
        {:1,
        }: ,
        [: ,
        ]: 
    }
    check if opening bracket if yes, procceed.    start on opening.
    for each item,
        1. count up map
        2. check if same value as before or not
            a. if not, then check to see if it is thhe closing pair
                a. if yes, then count up map
                    a.//should stop when the numbers are equal. if not, then there is a problem
                b. if no then check thaht it is opening bracket.length
        
        
                evermind all the above.  my origional solution sould be ok, just need to add a bit on. 
                every acceptable set will always be a palindrome.  the only issue is we need a way to account for 
                {}[]() type cases.length
                     - to do this, we need a way to know once  palindrome is created, and to stop thhe logic and start it again
    

acceptable:
{{{(( ))}}}  
[{()}]
{}[]()
{{[]}}{}
not acceptable:

check: is it the same as before? if pageYOffset, then can continue
is it 



//solution from before is OK.  but I need to add in a way to identify and break up sets
//define a set:
    //  - opening braket * x
    //  - closing braket * y
    //  if x = y, then we will define this as a set
    //  if cant get this, then know that we can throw out

    psudeo:  
        conter to track how many opening brackets until have closing bracket.
        continue until a closing bracket reached 
        define this as halfway 
        take items from string up to index+1*2; this is a 
        
    slice each set out of the array and 'eat' through it
    

//this will go before we define what the halfway point is

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var valid = false;
  

    if (!s.length || s.length%2 !== 0 ){
        return valid;
    }
    
    var counter = 0;
  
    while (s[i] === '('|| s[i]=== '{' || s[i]=== '['){
        counter ++;
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
            return valid;
        } 
        if (pairs[currentVal] !== compareVal){
        }
    }
    valid = true;
    return valid;
};

new approach:
after using hint -->

// remove each valid parenthesis from the set as we come to it

// loop through
// remember previous entry
// if next entry is the closing braket of that type, then remove the pair; start over
// if not, then keep going

// check at end - if othing remaining, then return true
// else, false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var pairs = {
        '[':']',
        '{':'}',
        '(':')'
    }

    var curS = s;
    while (curS.length){
        for (i=1; i<curS.length; i++){
            var previous = curS[i-1];
            var current = curS[i];
            if (pairs[previous] === current){
                curS.slice(i-1,i+1);
                return;
            } else if (i=curS.length-1){
                curS = false;
            }
        }
    }
    switch (curS){
        case '': {
            return true
        };
        case false: {
            return false
        }
    }
}