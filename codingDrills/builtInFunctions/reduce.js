var arr = [1,2,3,4,5]
var reduced = arr.reduce((accum, curr, index)=> {return accum + curr}, 0);
console.log(arr);

var arr = ["I","am","testing","reducing","an","array","of","strings"]
var reduced = arr.reduce((accum, curr) => {return accum + " " + curr},"");
var concatenated = arr.toString().replace(/,/g,' ');
//return same value

https://levelup.gitconnected.com/one-reduce-to-rule-them-all-504e1b790a83

///Cool Reduce Tricks///
//1. Build an Object
var arr = [15,116,27];
var objectShape = {
    max: null,
    min: null,
    median: null
}
function fillObject(accum,curr,index){
    const keys = objectShape.keys();
    key[index] = curr;
}
var builtObject = arr.reduce(fillObject,objectShape);

var arr = [15,116,27];
var objectShape = {
    max: 0,
    min:0,
    median: 0
}
var buildObject = arr.reduce((accum,curr,index)=>{
    const keys = Object.keys(objectShape);
    let key = keys[index];
    accum[key] = curr;
},objectShape);

var builtObject = arr.reduce((accum,curr,index)=>{
    console.log('accum',accum, 'curr',curr, 'index',index);
    const keys = Object.keys(objectShape);
    console.log('keys',keys);
    let key = keys[index];
    console.log('key',key);
    accum[key] = curr;
    console.log('accum',accum);
    return accum;
},objectShape);

var builtObject = arr.reduce((accum,curr,index)=>{
    const keys = Object.keys(objectShape);
    let key = keys[index];
    accum[key] = curr;
    return accum;
},objectShape);
