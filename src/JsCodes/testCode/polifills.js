//  forEach
Array.prototype.myForEach = function (cb) {
    const arr = this
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

// const arr = [1, 2, 3, 4, 5];
// arr.myForEach((item, index)=>{
//     console.log(item, index);
// })

//  map
Array.prototype.myMap = function (cb) {
    const resArr = []
    for (let i = 0; i < this.length; i++) {
        resArr.push(cb(this[i], i, this))
    }
    return resArr
}
// const arr = [1, 2, 3, 4, 5];
// const res = arr.myMap((item)=> item*5)
// console.log(res);

//  filter
Array.prototype.myFilter = function (cb) {
    const resArr = []
    for (let i = 0; i < this.length; i++) {
        const item = cb(this[i], i, this)
        if (item) {
            resArr.push(this[i])
        }
    }
    return resArr
}
// const arr = [1, 2, 3, 4, 5];
// const res = arr.myFilter((item)=> item<2)
// console.log(res);

// reduce
Array.prototype.myReduce = function (cb, initialVal) {
    let acc = initialVal !== undefined ? initialVal : this[0]
    for (let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i])
    }
    return acc;
}
// const arr = [1, 2, 3, 4, 5];
// const res = arr.myReduce((item, acc)=> item+acc, 0)
// console.log(res);

// flat
Array.prototype.myFlat = function (depth = 1) {
    const resArr = []
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth) {
            resArr.push(...this[i].myFlat(depth - 1))
        } else {
            resArr.push(this[i])
        }
    }
    return resArr
}
// const arr = [1, 2, [3, 4, [5, [7]]], 6];
// const res = arr.myFlat(3)
// console.log(res);


// Call apply and bind
const person1 = {
    name: 'akash'
}

function printNameAge(age, city, state) {
    console.log(`${this.name} is ${age} year old from ${city}, ${state}`);
}

Function.prototype.myCall = function (obj, ...args) {
    if (typeof this !== 'function') {
        throw new Error(`${this} is not a function`)
    }
    obj.fn = this
    obj.fn(...args)
}
// printNameAge.myCall(person1, 25, 'patna')

Function.prototype.myApply = function (obj, args) {
    if (typeof this !== 'function') {
        throw new Error(`${this} is not a function`)
    }
    obj.fn = this
    obj.fn(...args)
}
// printNameAge.myApply(person1, [25, 'patna'])

Function.prototype.myBind = function (obj, ...args) {
    if (typeof this !== 'function') {
        throw new Error(`${this} is not a function`)
    }
    obj.fn = this
    return function (...args2) {
        obj.fn(...args, args2)
    }
}
// const cb= printNameAge.myBind(person1, 25, 'patna')
// cb('bihar')

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const status = false
        if (status) {
            resolve('promise 1 resolved')
        } else {
            reject('promise 1 reject')
        }

    }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const status = true;
        if (status) {
            resolve('promise 2 resolved')
        } else {
            reject('promise 2 reject')
        }
    }, 2000)
})

const promise3 = new Promise((resolve, reject)=>{
    resolve('promise 3 resolved')
})
const promise4 = 10;

const promiseArr = [promise1, promise2, promise3, promise4]

const testFn = async()=>{
   try {
    const res = await Promise.all([promiseArr])
    console.log(res);
   } catch (error) {
    console.log(error);
   }
    
}
testFn()






