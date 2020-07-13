//Diffficulty: EASY
//# 7 Reverse Int

//Given 32 bit interger, return reverse
//Ex: 
//(123) --> (321)
//(120) --> (21)
//(-312) --> (-213)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reverseArray = [];
    
    var positive = x*Math.sign(x); 
    var string = positive.toString();  
    var array = string.split("");    
    
    var i=array.length;
    while (i--){
        reverseArray.push(array[i]);
    };

    var backToString = reverseArray.join("");
    var value = Number(backToString);
    var interger = value * Math.sign(x);
    return interger;
}

//Growth:
// check for overflow when larger than 2**31-1
// reverse() -->

var reverse = function(x) {
    
    var positive = x*Math.sign(x); 
    var reversed = Number(positive.toString().split("").reverse().join(''));
    var interger = reversed * Math.sign(x);

    var max = Math.pow(2,31);    
    if (interger > max-1 || interger < -max ) return 0; //check for if positive or negative overflows limit
    return interger;
}


// what is going on with "bit" - is there potential to us this/convert this and return in a more simple way?
