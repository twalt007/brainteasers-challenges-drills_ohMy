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
//need to add in testing for negative cases, to save the negative rather than tack onto the end

//Growth:

// what is going on with "bit" - is there potential to us this/convert this and return in a more simple way?
