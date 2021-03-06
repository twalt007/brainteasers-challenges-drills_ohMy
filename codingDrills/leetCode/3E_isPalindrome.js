// #9 
//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

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



// % 10  --> will return last digit
//can recieve all digits this way, and cobine back up

//check for positive/negative
//do while need a loop to consequtively get all intergers
//store intergers... no.  perform math.  last digit *10 plus nex digit, keep going.
//at end, compare beginning with result

var isPalindrome = function(x) {
    if (x >= 0 ){
        var reverse = 0;
        var nextRound = x;
        do {
            var lastDigit = nextRound%10;
            reverse = reverse*10 + lastDigit;

            nextRound = (nextRound-lastDigit)/10
        }while (nextRound);

        if (x === reverse ){
            return true
        }else {
            return false
        }
    }else{
        return false
    }
};



//leet code example.  same as above, but more efficient because less variable saving:
function isPalindrome(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;
  
    let rev = 0;
    while (rev < x) {
      rev *= 10;
      rev += x%10;
      x = Math.trunc(x/10);
    }
    return rev === x || Math.trunc(rev/10) === x;
  }
