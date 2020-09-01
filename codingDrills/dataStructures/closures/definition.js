//Closure: A functions bundled together with information about its surrounding state.  
//Basically, a closure gives access to an outter funciton's scope from an inner function.

//Example: 
var add = (x,y) => {
    if (!y){
        return function(z){
            return x+z;
        };
    };
    return x+y;
};

add(2,3);
add(2)(3);

//Example:
var outer =()=>{
    var arg = 'closure';
    function inner () {
        console.log("This is an ", arg, " because a varible outside this current function but contained within the inner function's environment scope (as deliminated by the outer function, or in other scenarios, the global object) is being referenced.");
    }
    return inner;
};
var closure = outer();
closure();
//inner is returned before being run.  and yet, it ca still access the arg variable.
//this is becaue inner can still maintain access to the lexical scope in which it was declared


//Example:
var makeAdder = (outer) => {
    return function (inner) {
        return outer + inner;
    };
}

var addTwo = makeAdder(2);
var addThree = makeAdder(3);

addTwo(5);      // ==> 7        outer = 2, inner = 5    ==> addTwo(5) == [makeAdder(2)](5) => [function(inner){return 2 + inner}](5)
addThree(5)     // ==> 8        outer = 3, inner = 5


// 10 minutes to review functions
// look up 2 new methods
// review mod 1 dom manipulation; look at commetns example especially
// review closures problem and definition on one other example