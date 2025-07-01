// 1. Group Anagrams
// Given an array of strings, group all anagrams together.

// Input: ["pivot", "optiv", "cat", "tac", "act"]
// Output: [["pivot", "optiv"], ["cat", "tac", "act"]]

function groupOfAnagram(strArr) {
	let map = new Map();

	for (str of strArr) {
		const sorteStr = str.split('').sort().join('');
		if (!map.has(sorteStr)) {
			map.set(sorteStr, []);
		}
		map.get(sorteStr).push(str);
	}
	const resArr = [];
	map.forEach((item) => resArr.push(item));
	console.log(resArr);
}
// groupOfAnagram(['pivot', 'optiv', 'cat', 'tac', 'act']);

// 2 Problem: longestCommonPrefix;
// Input ["flower", "flow", "flight"]
// Output: "fl"

function longestCommonPrefix(strArr) {
	if (!strArr.length) return '';

	for (let i = 0; i < strArr[0].length; i++) {
		const currChar = strArr[0][i];

		for (let j = 1; j < strArr.length; j++) {
			if (i > strArr[j].length || currChar !== strArr[j][i]) {
				return strArr[0].slice(0, i);
			}
		}
	}
	return strArr[0];
}
// console.log(longestCommonPrefix(["flower", "flow", "flight"]))

// 3 Problem: Two Sum
// Input: [2, 3, 4,7] , target = 6
// Output [0, 2]

function twoSum(arr, target) {
	const map = new Map();
	for (let i = 0; i < arr.length; i++) {
		const diff = target - arr[i];
		if (map.has(diff)) {
			return [map.get(diff), i];
		}
		map.set(arr[i], i);
	}
	return null;
}
// console.log(twoSum([2, 3, 4,7], 15));

// 4 Problem

function missingNumber(arr) {
	const n = arr.length + 1;
	const hashArr = new Array(n + 1).fill(0); // n+1 to fill from 0 to num

	for (let i = 0; i < arr.length; i++) {
		hashArr[arr[i]] += 1;
	}

	for (let i = 1; i <= n; i++) {
		if (hashArr[i] === 0) {
			return i;
		}
	}

	return -1;
}

// const arr = [1, 2, 5, 3];
// const res = missingNumber(arr);
// console.log(res);

// 5 Problem: Anagram Check
// Input :gum, mug
// Output: true
// solution: sort both and compare if equal true else false
// 2nd solution

function checkAnagram(str1, str2) {
	if (str1.length !== str2.length) return false;
	const map = {};
	for (let str of str1) {
		if (map[str]) {
			map[str] += 1;
		} else {
			map[str] = 1;
		}
	}

	for (let str of str2) {
		if (map[str] !== 0) {
			map[str] = map[str] - 1;
		}
		if (map[str] == 0) {
			delete map[str];
		}
	}

	return Object.keys(map).length == 0;
}

// console.log(checkAnagram('anagram', 'nagaram'));

// 6 Problem
// Aproach 1
function lengthOfLongestSubstring(s) {
	let maxLength = 0;
	let start = 0;
	const map = new Map();

	for (let end = 0; end < s.length; end++) {
		if (map.has(s[end])) {
			start = Math.max(map.get(s[end]) + 1, start);
		}
		map.set(s[end], end);
		maxLength = Math.max(maxLength, end - start + 1);
	}
	return maxLength;
}
// Aproach 2
function lengthOfLongestSubstring1(str) {
	let start = 0;
	let end = 0;
	let map = new Map();
	let maxlen = 0;

	while (end < str.length) {
		if (!map.has(str[end])) {
			map.set(str[end]);
			end++;
			maxlen = Math.max(maxlen, map.size);
		} else {
			map.delete(str[start]);
			start++;
		}
		console.log(map);
	}

	return maxlen;
}
// console.log(lengthOfLongestSubstring1('abcab'));

// 5 Problem :- max depth in a html string

function maxDepth(htmlStr) {
	let curDepth = 0;
	let maxDepth = 0;

	for (let i = 0; i < htmlStr.length; i++) {
		if (htmlStr[i] === '<' && htmlStr[i + 1] !== '/') {
			curDepth += 1;
			maxDepth = Math.max(maxDepth, curDepth);
		} else if (htmlStr[i] === '<' && htmlStr[i + 1] === '/') {
			curDepth--;
		}
	}
	return maxDepth;
}

const html1 = '<div><p><span></span></p></div>';
const html2 = '<div><p></p><section><article></article></section></div>';
const html3 = '<html><body><div><ul><li></li></ul></div></body></html>';

// console.log(maxDepth(html1)); // Output: 3
// console.log(maxDepth(html2)); // Output: 3
// console.log(maxDepth(html3)); // Output: 5

const groupOfAnagram1 = (strArr) => {
	const map = new Map();

	for (let str of strArr) {
		const sortedStr = str.split('').sort().join();
		if (!map.has(sortedStr)) {
			map.set(sortedStr, []);
		}
		map.get(sortedStr).push(str);
	}
	
	console.log(map);
};

groupOfAnagram1(['pivot', 'optiv', 'cat', 'tac', 'act']);
