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
    const keys = Object.keys(objectShape);
    let key = keys[index];
    accum[key] = curr;
    return accum;
}
var builtObject = arr.reduce(fillObject,objectShape);
//or all in same function
var builtObject = arr.reduce((accum,curr,index)=>{
    const keys = Object.keys(objectShape);
    let key = keys[index];
    accum[key] = curr;
    return accum;
},objectShape);
//returns {max: 15, min: 116, median: 27};

var arr = ["tatumn","marie","walter"];
var objectShape = {
    firstName: "",
    middleName: "",
    lastName: ""
}
var fillObject = (accum,curr,index)=> {
    //fill keys in object based on index
    //get keys from object into array  
    const keys = Object.keys(objectShape);  // --> this works because defined outside the object. This is an example of closure, where a function has access to items in its lexical scope.  objectShape is not definied withinthe object, yet it can be filled because the scope of both function and object are the global scope.  
    //select key based upon index
    let key = keys[index];
    //save value to the corresponding key in the object
    accum[key] = curr;  //  --> tis part is the part I always forget.  we need to find the key in the object again. also, no need to refereent the current item in the array.  reduce + curr do that for us.
    //return
    return accum
};
var reduceToObject = arr.reduce(fillObject,objectShape);  //must remember to actually call the function reduce on the array


//return arry of objects that only meet certain criteria
var studentList = [
    {
        house: 'Hufflepuff',
        name: 'Henrieta',
    },
    {
        house: 'Gryffyndor',
        name: 'Godric',
    },
    {
        house: 'Hufflepuff',
        name: 'Heffry',
    },
    {
        house: 'Ravenclaw',
        name: 'Romulus',
    },
    {
        house: 'Slytherin',
        name: 'Sam',
    }
];
var onlyHufflepuff = studentList.reduce((accum,curr)=>{
    if (curr.house === 'Hufflepuff') {accum.push('<h1>'+curr+'</h1>')};
    return accum;
},[]);
//errors: need to make sure using strings for object values, parenthesis around curr;
//does the same thing as map
var mapHufflepuff = studentList.map((student)=>{
    var returnArrray = [];
    if(student.house === 'Hufflepuff') {returnArrray.push(student)};
    return returnArrray;
})
//map returns an array with 5 values - empty array for when the student fails a test


//review map vs forEach vs 

