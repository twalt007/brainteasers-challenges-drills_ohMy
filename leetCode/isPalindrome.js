// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?


//1. Psuedo
// convert to string 
// var = reverse
//  is x = varReverse?


var isPalindrome = function(x) {
    var reverse = Number(x.toString().split('').reverse().join(''));
    if (x===reverse){
        return true
    }else {
        return false
    }
};


//without converting to string:
//check if negative.  if so, can throw out
//find out how many digits
//then for each, divide by 10 x digit place and compare

//to find how long the interger is, would need a counter.  10to the n, once 1-^n is greater than our nujber, thats where we take n and subtract 1 to know the number of digits
//from there we'd need to progressively divide use another counter where we take the value of x/10^n-i and the the end 10^i+1. find ways to remove all else.  compare the values. keep working inward
//would need a way to deal with the case for when evern vs odd
//this is way too messy

var isPalindrome = function(x) {
    var reverse = Number(x.toString().split('').reverse().join(''));
    if (x===reverse){
        return true
    }else {
        return false
    }
};