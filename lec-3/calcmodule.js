const sum = () => {
    let a=10, b=2;
    let sum = a + b;
    console.log(sum);
}

const sub = () => {
    let a=20, b=10;
    let sub = a - b;
    console.log(sub);
    
}

const arr = [10,4,true,2];


const users = [
    {id:1, name:"jensi", phone:"23456"},
    {id:2, name:"isha", phone:"23445678"},
];

const obj = {
    name:"jensi",
    age:25,
    address:{
        street:"street1",
        city:"city1",
        }
};
module.exports = {
    sum, sub, arr, users, obj
}