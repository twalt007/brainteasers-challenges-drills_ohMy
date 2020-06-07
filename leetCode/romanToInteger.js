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

var romanToInt = function(s) {
    // compare current interger with intgerger previous
    //      //check if previous interger
    // if same or correct different, add value
    // if comparison one of cases wheere moving backward, then subtract value
    // save current value as previous interger and move on to next
    //
    //better yet
    //store everything in an array, converting into its numeric value
    // comparison then only becomes if previous value is greater than current value, substrace current valu
    //otherwise, move forward by simply adding
};

var romanToInt = function(s) {
    var sum = 0;
    var array = s.toLowerCase().split("");

    var convertToNumber= function(item, index, array){
        switch (item) {
            case "i": array[index] = 1; break; 
            case "v": array[index] = 5; break;
            case "x": array[index] = 10; break;
            case "l": array[index] = 50; break;
            case "c": array[index] = 100; break;
            case "d": array[index] = 500; break;
            case "m": array[index] = 1000; 
        }
        return array;
    }
    array.forEach(convertToNumber);

    var len = array.length;
    for (var i=0; i<len; i++){
        var current = array[i];
        var next = array[i+1];
        if (next === undefined){
            sum+=current;
            break;
        }
        if (current >= next){
            sum+=current;
        }
        if (current < next){
            sum-=current;
        }
    }
    return sum;
};


//imrpve code

var romanToInt = function(s) {
    if (!s || s === 0){
        return 0;
    };

    var sLow = s.toLowerCase();

    var map = new Map([['i', 1],['v',5],['x',10],['l',50],['c',100],['d',500],['m',1000]);

    let i = sLow.length-1;
    let result = map.get(sLow[i]);

    while (i--)
};

xxx
0 1 2
1
