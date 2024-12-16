console.log("hello world");


let arr1 = [1, 2, 5, 6, 7, 8, 10]
let ans1 = arr1.filter((val) => {
    return val % 2 == 0
});
console.log(ans1);


let arr = [1, 2, 3, 4, 5, 6, 10]
let ans = arr.map((val) => {
    return val
});
console.log(ans);

let arr2 = [1, 2, 3, 8, 9, 10]
let ans2 = arr2.reduce((acc, val) => {
    return acc + val
}, 0);
console.log(ans2);


let a = 10;
let b = 60;
let sum = a + b;
console.log(sum);