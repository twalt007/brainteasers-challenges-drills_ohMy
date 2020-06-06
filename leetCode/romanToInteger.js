//13. Roman to Integer

//check to see if first value m if so, start adding 1,000 search until come to first C.  then check if cm, if so, 

//more efficient way: start from end; can ut out one check.  going left, add on each value.  whenever run into lesser value, subtract it

//111
// vI
//Iv

//could do with a loop that contans switch cases and then removes last interger., while storing the previous value
//for (val.lenght){
    MMCMXCXXVII
    2
    7
    17
    27
    127
    117


    MCMXCIV
    5-1
    4
    104-10
    94
    1094-100
    994
    1994

    need way to store and to compare
    
    var prev value: 
    switch () {
        case value:
            
            break;
    
        default:
            break;
    }
}


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var array = s.split("");
    var last = array.pop();
    for (var i=string.length; i>0; i--){
        var current = array[i];
        var secondToLast = array[i-1];
        if (last === secondToLast) addVaule();
        else continue doing Worker;
    }
    keep removing intergers until different one recieved  (var current, var last)
    up to that point add the value specified  (switch)
    then if different check to see how t compares
};