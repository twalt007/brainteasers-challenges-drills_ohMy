
|         |         |
given a sorted array [1,2,3,4,4,5,6,7,7,8,9] find index of k
if not present, return -1

k = 4, ⇒ 3

|              |                 |  
[0, 1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9]
    | | 
[0,1,2], 2

s 1
e 2
m 1
function findIndex(array, k) {
    let s = 0;
    let e = arr.length -1;
    let getM = (s,e) => s + Math.floor((e-s)/2);
    while (s<e){
        let m = getM(s,e);
        if (s === m) break;
        if (k<arr[m]){
            e = m;
        };
        if (k>arr[m]){
            s = m;
        };
        if (k === arr[m]){
            if(k===arr[m-1]){
                e = m;
                continue;
            };
            return m;
        };
    };
    if (k===arr[s]) {
        return s;
    };
    if (k===arr[e]){
        return e;
    };
    return -1;
};

const indexOf = (array, k) => {
let start = 0;
let end = array.length - 1;
while (start < end) {
    const mid = start + Math.floor((end-start) / 2);
    if (start === mid) break;
    if (k === array[mid]) {
    if (k !== array[mid - 1]) {
        return mid;
    }
    end = mid;
    continue;
    }
    if (k < array[mid]) {
    end = mid;
    } else if (k > array[mid]) {
    start = mid;
    }
};
if (k === array[start]) return start;
if (k === array[end]) return end;
return -1;
};

console.log(indexOf([0,1,2], 2));


while (s<e){
    if(k<mid){
        e = mid;
        mid(s,e);
    if (k>mid){
        s = mid;
        mid(s,e);
    if (k=arr[mid]){
        if(k!=arr[mid-1]){
            return mid;
        };
        e = mid;
        mid(s,e);
    };



    s m e
[0,1,2,3,4]
s = 0
e = arr.length - 1
mid(s,e) = s + Math.floor( (Math.abs(e-s)) / 2);   => beg;
new mid = (s-e/2)


find these points

while (s<e){
    if(k<mid){
        e = mid;
        mid(s,e);
    if (k>mid){
        s = mid;
        mid(s,e);
    if (k=arr[mid]){
        if(k!=arr[mid-1]){
            return mid;
        };
        e = mid;
        mid(s,e);
    };
        

[1,2,3,3,3,3,3,3,4,5]



//time = log(n), because halved each time
//something like maxonly 30 ish time will repeat regardlesof the size