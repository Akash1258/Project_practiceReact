//  Polifills --------------------------------------------------------

const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (cb) {
	const result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(cb(this[i], i, this));
	}
	return result;
};
// const res = arr.myMap((item) => item * 2);
// console.log(res);

Array.prototype.myFilter = function (cb) {
	const resArr = [];
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, arr)) {
			resArr.push(this[i]);
		}
	}
	return resArr;
};
// const res = arr.myFilter((item) => item > 3);
// console.log(res);

Array.prototype.myReduce = function (cb, initialVal) {
	if (!Array.isArray(this)) return;
	let acc = initialVal;
	for (let i = 0; i < this.length; i++) {
		acc = acc ? cb(acc, this[i]) : this[i];
	}
	return acc;
};
// const res = arr.myReduce((prev, curr) => {
//    return prev+curr
// }, 10);
// console.log(res);

Array.prototype.myFlat = function (depth = 1) {
	const resArra = [];
	for (let i = 0; i < this.length; i++) {
		if (Array.isArray(this[i]) && depth > 0) {
			resArra.push(...this[i].myFlat(depth - 1));
		} else {
			resArra.push(this[i]);
		}
	}
	return resArra;
};
// const newArr = [1,2,[3,4,[5, [6]]], 7]
// const res =newArr.myFlat(2)
// console.log("🚀 ~ res:", res)

const flattenObj = function (obj) {
	let res = {};
	for (const key in obj) {
		if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			const temp = flattenObj(obj[key]);
			console.log('temp', temp);

			for (const i in temp) {
				res[key + '.' + i] = temp[i];
			}
		} else {
			res[key] = obj[key];
		}
	}
	return res;
};

const nestedObj = {
	name: 'Akash',
	age: 25,
	role: {
		post: 'dev',
		language: 'react',
		pref: {
			hello: 'hi',
		},
	},
	location: 'bangalore',
};

// console.log('flattenObj', flattenObj(nestedObj));

// console.log('start')
// const promise1 = new Promise((resolve)=>{
// 	console.log(1);
// 	resolve(2)
// })
// promise1.then((res)=>{
// 	console.log(res);
// })
// console.log('end');

// reverse adjusent char in string

function adjucentRev(str) {
	let res = '';
	for (let i = 0; i < str.length; i += 2) {
		if (i + 1 < str.length) {
			res += str[i + 1] + str[i];
		} else {
			res += str[i];
		}
	}
	console.log(res);
	return res;
}

// const inputstr = 'abcde'
// adjucentRev(inputstr)

// {
// 	function a() {
// 		console.log('hello');
// 	}
// }
// a(); // due to a will hoisted in surrounding scope

function x() {
	return 10;
}
var x;
console.log(x);

let a = 10;
const ret = (a = 10) || 'false';
console.log(ret);
