//1. sum of natural number 

function sumOfNaturalNum(num) {
	let sum = 0
	for (let i = 0; i <= num; i++) {
		sum += i
	}
	return sum;
}
// console.log(sumOfNaturalNum(5));

//2. sum of digit of a number 

function sumOfDigitOfNumber(num) {
	let sum = 0;
	let temp = num
	while (temp > 0) {
		const rem = temp % 10;
		sum += rem
		temp = Math.floor(temp / 10)
	}
	console.log(sum);
}
// sumOfDigitOfNumber(1356)

// 3. given no is pallindrome

function findPallindrome(num) {
	let temp = num;
	let revNum = 0;
	while (temp > 0) {
		const lastDigit = temp % 10;
		revNum = revNum * 10 + lastDigit;
		temp = Math.floor(temp / 10)
	}
	console.log(num === revNum);
}
// findPallindrome(-121)
