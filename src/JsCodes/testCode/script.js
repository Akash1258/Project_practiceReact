// testFn()

// var testFn = ()=> {
//     console.log('Hello from testFn');
// }

// function testFn(){
//     console.log('hello from fncn expression');
// }

// testFn()

// Polifils -------------------------------------------------------

//  1. forEach

const arr = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function (cb) {
	for (let i = 0; i < this.length; i++) {
		cb(this[i], i, this);
	}
};

// arr.myForEach((item)=> console.log(item))

//  2.  map

Array.prototype.myMap = function (cb) {
	const resArr = [];
	for (let i = 0; i < this.length; i++) {
		resArr.push(cb(this[i], i, this));
	}
	return resArr;
};

// const res = arr.myMap((item)=> item*2 )
// console.log(res);

// 3.  filter

Array.prototype.myFilter = function (cb) {
	const resArr = [];
	for (let i = 0; i < this.length; i++) {
		let cbResponse = cb(this[i], i, this);
		if (cbResponse) {
			resArr.push(this[i]);
		}
	}
	return resArr;
};

// const res = arr.myFilter((item)=> item < 2)
// console.log(res);

// 4. reduce

Array.prototype.myReduce = function (cb, initalVal) {
	let acc = initalVal;
	for (let i = 0; i < this.length; i++) {
		acc = acc ? cb(acc, this[i]) : this[i];
	}
	return acc;
};

// const res = arr.myReduce((acc, curr)=>{
//    return acc*curr;
// }, 0)

// console.log(res);

// call, apply, bind and their polifils

// 1. why call, apply bind:-> to borrow a function and call, and can be invoke for different objcets

// Example

const person1 = {
	name: 'akash',
	// printNameAge: function(age){
	//     console.log(`${this.name} is ${age} year old`);
	// }
};
// person1.printNameAge(25)

const person2 = {
	name: 'Shiva',
	// printNameAge: function(age){
	//     console.log(`${this.name} is ${age} year old`);
	// }
};

// => suppose same thing if i have to do for other obj like "person2" same thing will repeat
//    insted will take that function out and can be used for both like

function printNameAge(age, city) {
	console.log(`${this.name} is ${age} year old from ${city}`);
}

// printNameAge.call(person2, 25)

// call polifils
Function.prototype.myCall = function (obj = {}, ...agrs) {
	if (typeof this !== 'function') {
		throw new Error(`${this} is not a function`);
	}
	obj.fn = this; // adding the function to that object so that we can access his property as 'this'
	obj.fn(...agrs);
};
// printNameAge.myCall(person2, 24, 'bihar')

// apply polifils

Function.prototype.myApply = function (obj = {}, args) {
	if (typeof this !== 'function') {
		throw new Error(`${this} is not a function`);
	}
	if (!Array.isArray(args)) {
		throw new Error('requires a array');
	}
	obj.fn = this;
	obj.fn(...args);
};

// printNameAge.myApply(person1, 24, 'bihar')

//  bind polifils

Function.prototype.myBind = function (obj = {}, ...args) {
	if (typeof this !== 'function') {
		throw new Error(`${this} is not a function`);
	}

	obj.fn = this;
	return function (...args2) {
		obj.fn(...args, ...args2);
	};
};

// const res = printNameAge.myBind(person2)(25, 'bihar')
// const res = printNameAge.myBind(person2, 27, 'patna')(25, 'bihar')
// const res = printNameAge.myBind(person2, 27)('bihar')

Array.prototype.myflat = function (depth = 1) {
	let res = [];
	this.forEach((item) => {
		if (Array.isArray(item) && depth > 0) {
			res.push(...item.myflat(depth - 1));
		} else {
			res.push(item);
		}
	});
	return res;
};

const newArray = [1, 3, 4, [5, 6], [7, 8]];

// const result = newArray.myflat();

// console.log(result);

//  Promise :- it is an object that represents the eventual completion or failure of an asynchronous operation

const promisFn = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('promise is resolved');
	}, 3000);
});

const getData = () => {
	promisFn.then((res) => console.log(res));
	console.log('Hello World');
};

const getData2 = async () => {
	const res = await promisFn;
	console.log(res);
	console.log('Hello World');
};

// getData()
// getData2()
// console.log('Hello After getData');

// const mainFucn = ()=>{
//     for(var i= 0; i<5;i++ ){
//        function x(i){
//         setTimeout(()=>{
//             console.log(i);
//         }, 1000)
//        }
//        x(i)
//     }
// }

// mainFucn()

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = false;
		if (!error) {
			resolve('Promise Resolved');
		} else {
			reject('Error');
		}
	}, 1000);
});
const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = false;
		if (!error) {
			resolve('Promise Resolved');
		} else {
			reject('Error');
		}
	}, 500);
});

const promise3 = new Promise((resolve, reject) => {
	resolve('Promise3 resolved ');
});

const promise4 = 10;

Promise.myall = (allPromiseArray) => {
	return new Promise((resolve, reject) => {
		const resultArr = [];
		let promiseCount = 0;

		allPromiseArray.forEach((promiseItem, index) => {
			// Promise.resolve(promiseItem).then((data)=>{ // to handle if promise item is not promise
			Promise.resolve(promiseItem)
				.then((data) => {
					resultArr[index] = data;
					promiseCount++;
					if (promiseCount === allPromiseArray.length) {
						resolve(resultArr);
					}
				})
				.catch((err) => {
					reject(err);
				});
		});
	});
};

Promise.myRace = (promiseArray) => {
	return new Promise((resolve, reject) => {
		promiseArray.forEach((promiseItem) => {
			Promise.resolve(promiseItem)
				.then((data) => {
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	});
};

// const res = Promise.myall([promise1, promise2, promise3, promise4])
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log('error:', err));
// console.log(res);

// closure :-  a function that has access to its outer scope, even after the outer function has closed.

// const parentFn=()=>{
// 	const a= 10;
// 	return childFn=()=>{
// 		console.log('hello '+a);
// 	}
// }
// const fn1=parentFn()
// fn1()

//  Function currying is a programming technique in JavaScript that breaks down a function with multiple
//  arguments into a series of functions that each take a single argument

const curringFn = (a) => {
	return (secFn = (b) => {
		return a + b;
	});
};
// const temRes= curringFn(5)(6)
// console.log('temRes', temRes);

// Callback hell in JavaScript is a situation where multiple callbacks are nested within each other,
//  making the code difficult to read, maintain, and debug:

// asyncOperation1(function(result1) {
// 	asyncOperation2(result1, function(result2) {
// 	  asyncOperation3(result2, function(result3) {
// 		asyncOperation4(result3, function(result4) {
// 		  // Do something with result4.
// 		});
// 	  });
// 	});
//   });

// solution are:- Using Promises, Using async/await

// ************** Event delegation start ***************************
// const buttons = document.querySelectorAll('button')
// buttons.forEach(button => {
//   button.addEventListener("click", (event) => {
//     console.log(event.target.innerText)
//   })
// })

// const div = document.querySelector('div')
// div.addEventListener("click", (event) => {
//   if(event.target.tagName === 'BUTTON') {
//     console.log(event.target.innerText)
//   }
// })
// ************** Event delegation end ***************************

// myFunc();

// var myFunc = () => {
// 	console.log('First');
// };

// myFunc();

// function myFunc() {
// 	console.log('Second');
// }

// myFunc()

const building = [3, 5, 4, 9, 6, 8];

const checkLight = () => {
	let count = [building[0]];
	let bigest = building[0];
	for (var i = 1; i < building.length; i++) {
		if (building[i] > bigest) {
			bigest = building[i];
			count.push(building[i]);
		}
	}
	return count;
};

// let res = checkLight();

// console.log(res);

function longestCommonPrefix(strs) {
	if (!strs.length) return '';

	for (let i = 0; i < strs[0].length; i++) {
		const char = strs[0][i]; // Get the current character

		for (let j = 1; j < strs.length; j++) {
			console.log(char, i, strs[j][i]);
			if (i >= strs[j].length || strs[j][i] !== char) {
				return strs[0].slice(0, i);
			}
		}
	}

	return strs[0];
}

// Test cases
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// function twoSum(nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         console.log(complement, map)
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return null;
// }
function twoSumFn(nums, target) {
	const map = {}; // Use an object instead of Map
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (map[complement] !== undefined) {
			return [map[complement], i];
		}
		map[nums[i]] = i;
	}
	return null;
}

// const tempArr=[2, 7, 11, 15]
// const target=9

// const res= twoSum(tempArr, target)
// console.log(res)

// function lengthOfLongestSubstring(s) {
//     let maxLength = 0;
//     let start = 0;
//     const map = new Map();

//     for (let end = 0; end < s.length; end++) {
//         if (map.has(s[end])) {
//             start = Math.max(map.get(s[end]) + 1, start);
//         }
//         map.set(s[end], end);
//         maxLength = Math.max(maxLength, end - start + 1);
//     }
//     return maxLength;
// }

function lengthOfLongestSubstringFn(s) {
	let maxLength = 0;
	let start = 0;
	const map = {};
	// let str = '';

	for (let end = 0; end < s.length; end++) {
		if (map[s[end]] !== undefined) {
			start = Math.max(map[s[end]] + 1, start);
			// str = '';
		}
		// str = `${str}${s[end]}`;
		map[s[end]] = end;
		maxLength = Math.max(maxLength, end - start + 1);
	}
	// console.log(str);

	return maxLength;
}

// console.log(lengthOfLongestSubstring('akaskaah'));

var lengthOfLongestSubstring = function (s) {
	if (!s.length) return 0;

	let maxLength = 0;
	let obj = {};
	let start = '';

	for (let i = 0; i < s.length; i++) {
		if (obj[s[i]] !== undefined) {
			start = Math.max(start, obj[s[i]] + 1);
		}
		obj[s[i]] = i;
		maxLength = Math.max(maxLength, i - start + 1);
	}
	return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcabc'));

var reverse = function (x) {
	const isNegative = x < 0;
	const revNum = Math.abs(x).toString().split('').reverse().join('');
	return isNegative ? -parseInt(revNum) : parseInt(revNum);
};
// console.log(reverse(0));

function moveZerosToEnd(arr) {
	let index = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			[arr[index], arr[i]] = [arr[i], arr[index]];
			index++;
		}
	}

	return arr;
}

//   console.log(moveZerosToEnd([0, 1, 0, 0, 3, 0, 4]));

// i/p "()[]{}"

function matchParenthisi(l, r) {
	return (l === '(' && r === ')') || (l === '{' && r === '}') || (l === '[' && r === ']');
}

const validParentheses = (s) => {
	const arr = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
			arr.push(s[i]);
		} else {
			if (arr.length === 0 || !matchParenthisi(arr[arr.length - 1], s[i])) {
				return false;
			} else {
				arr.pop();
			}
		}
	}
	return arr.length === 0;
};

console.log('res', validParentheses('()[]]{}'));
