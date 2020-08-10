sum(2,3); // => 5
sum(2)(3); // => 5
a (3)
const a = sum(2);
console.log(typeof a);
a(3);// = > 5

function sum (x,y){
	if(y===undefined){
		return function(z){
			return z + x;
 		};
	}
	return x+y;
}

const counter = createCounter();
counter.count() => 0;
counter.increment(); undefined;
counter.count() => 1;
counter.increment(); undefined;
counter.increment(); undefined;
counter.count() = 3;


const counter = new Counter();

const creatCounter() {
	let counter = 0;
	return {
		count: function(){return counter},
		increment: function(){counter++}
	}
};
const createCounter = () => {
  let count = 0;
  return {
    count: () => count,
    increment: () => {count++},
  };
};


		


