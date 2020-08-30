//Closure: A functions bundled together with information about its surrounding state.  
//Basically, a closure gives access to an outter funciton's scope from an inner function.

//Example: 
var add (x,y){
    if (!y){
        return function(z){
            return x+z;
        };
    };
    return x+y;
};

//Example:
var outer (){

};