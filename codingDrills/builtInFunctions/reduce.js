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



//2. Return arry of objects that only meet certain criteria
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
//VS Map  (Example )
var mapHufflepuff = studentList.map((student)=>{
    var returnArrray = [];
    if(student.house === 'Hufflepuff') {returnArrray.push(student)};
    return returnArrray;
})
//map returns an array with 5 values - empty array for when the student fails a test


//3. Group items by criteria
//like the above, but fleshed out.  

var groupBy = (arr, criteria) => {
    return arr.reduce((obj,item)=>{
        var key = typeof criteria === 'function' ? criteria(item) : item[criteria];
        if (!obj.hasOwnProperty(key)) {  //!obj.key then throws error; first of that doesn't get thhe item pushed to it, though thhe next will.  not sure why  (see bottom for errors.)
            obj[key] = [];
        }
        obj[key].push(item);
        return obj;
    },{})
}

//higher level function that we can apply to any array with any criteria we want; returns an object with our items sorted as desired
//var key:
/////// test to see the type of criteria passed, so that we know how to apply it
/////// typeof returns a string, we want to know how to 'call' the function.  
/////// if it is self-built, we will need to pass item into it  --> criteria(item).  
///////         example:  groupBy([3.1, 2.4, 5.3, 3.2],Math.floor) ==> Math.floor(item) ==> return {3: [3.1, 3.2], 2: [2.4], 5: [5.3]}
/////// if not, then it is likely a built in function and we need to call it from the obejct --> item[legnth]
///////         example:  groupBy(['one','two','three'],'length) ==> item[legnth] ==> return {3: ['one','two'], 5: ['three']};
/////// if





//review map vs forEach vs every









no idea why !obj.key throws such a werid console.error(var groupBy3 = (arr, criteria) => {
    return arr.reduce((obj,item)=>{
            console.log('item',item);
        var key = typeof criteria === 'function' ? criteria(item) : item[criteria];
            console.log('key',key);
            console.log('obj[key]',obj.key);
        if (!obj.key) {  
            console.log('obj[key]2',obj.key);
            obj[key] = [];
            console.log('obj[key]3',obj.key);
        }
        obj[key].push(item);
            console.log('obj[key]4',obj.key);
            console.log('obj',obj);

        return obj;
    },{})
}
undefined
groupBy3(['one','two','three','four','five'],'length');
VM2300:3 item one
VM2300:5 key 3
VM2300:6 obj[key] undefined
VM2300:8 obj[key]2 undefined
VM2300:10 obj[key]3 undefined
VM2300:13 obj[key]4 undefined
VM2300:14 obj {3: Array(1)}
VM2300:3 item two
VM2300:5 key 3
VM2300:6 obj[key] undefined
VM2300:8 obj[key]2 undefined
VM2300:10 obj[key]3 undefined
VM2300:13 obj[key]4 undefined
VM2300:14 obj {3: Array(1)}
VM2300:3 item three
VM2300:5 key 5
VM2300:6 obj[key] undefined
VM2300:8 obj[key]2 undefined
VM2300:10 obj[key]3 undefined
VM2300:13 obj[key]4 undefined
VM2300:14 obj {3: Array(1), 5: Array(1)}
VM2300:3 item four
VM2300:5 key 4
VM2300:6 obj[key] undefined
VM2300:8 obj[key]2 undefined
VM2300:10 obj[key]3 undefined
VM2300:13 obj[key]4 undefined
VM2300:14 obj {3: Array(1), 4: Array(1), 5: Array(1)}
VM2300:3 item five
VM2300:5 key 4
VM2300:6 obj[key] undefined
VM2300:8 obj[key]2 undefined
VM2300:10 obj[key]3 undefined
VM2300:13 obj[key]4 undefined
VM2300:14 obj {3: Array(1), 4: Array(1), 5: Array(1)}
{3: Array(1), 4: Array(1), 5: Array(1)});