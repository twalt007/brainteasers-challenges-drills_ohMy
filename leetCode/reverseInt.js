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
    var string = x.toString();
    var array = string.split("");
    var reverseArray = [];
    for (var i=array.length-1; i>=0; i--){
        reverseArray.push(array[i]);
    }
    var backToString = reverseArray.join("");
    return Number(backToString);
};

//need to add in testing for negative cases, to save the negative rather than tack onto the end

//Growth:

// what is going on with "bit" - is there potential to us this/convert this and return in a more simple way?
