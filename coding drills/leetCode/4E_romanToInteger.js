//13. Roman to Integer

//check to see if first value m if so, start adding 1,000 search until come to first C.  then check if cm, if so, 

//more efficient way: start from end; can ut out one check.  going left, add on each value.  whenever run into lesser value, subtract it

//111
// vI
//Iv

//could do with a loop that contans switch cases and then removes last interger., while storing the previous value
//for (val.lenght){
//     MMCMXCXXVII
//     2
//     7
//     17
//     27
//     127
//     117


//     MCMXCIV
//     5-1
//     4
//     104-10
//     94
//     1094-100
//     994
//     1994

//     need way to store and to compare
    



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
        // else continue doing Worker;
    }
    // keep removing intergers until different one recieved  (var current, var last)
    // up to that point add the value specified  (switch)
    // then if different check to see how t compares
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

//-> use map to eliminate need to save variables
//-> no need to converting to lowerCase because defined as always upper for roman numbers; except in bullets this is standard
//-> check if s exists, this way can eliminate wasted time if doens't need to run.
// MY update, over and above example:  use "while (i--)" because belive this can eliminate one line of code
// ----> MY update doesn't work great, because will result in a negative number for values like IV, IX

var romanToInt = function(s) {
    if (!s || s === 0){
        return 0;
    };

    var map = new Map([['I', 1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]]);

    let i = s.length;
    let result=0;

    while (i--){
        var cur = map.get(s[i]);
        var prev = map.get(s[i-1]);
        if(cur > prev){
            result-=cur;
        }else{
            result+=cur;
        }
    }
    return result;
};





const romanToInt = s => {
  if (!s || s.length === 0) {
    return 0;
  }

  const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);

  let i = s.length - 1;
  let result = map.get(s[i]);

  while (i > 0) {
    const curr = map.get(s[i]);
    const prev = map.get(s[i - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }

    i--;
  }

  return result;
};

