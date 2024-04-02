// //***************************************Numbers*************************************
// const score=400;
// console.log(score);//400

// const balance=new Number(100);
// console.log(balance);//[Number: 100]
// console.log(balance.toString());//100 but type will be string
// console.log(balance.toString().length);//3 the length of string
// console.log(balance.toFixed(2));//100.00
// console.log(balance.toFixed(3));//100.000
// ""
// const salary=1000000
// console.log(salary.toLocaleString)//10,00,000
// console.log(salary.toLocaleString("en-US"));//1,000,000 according to US standards

// // *********************************Maths*********************************************

// console.log(Math)//Object [Math] {}
// console.log(Math.abs(-4));//4
// console.log(Math.abs(4));//4
// console.log(Math.round(3.4))//3
// console.log(Math.round(3.8))//4
// console.log(Math.ceil(3.4))//4
// console.log(Math.floor(3.9))//3
// console.log(Math.min(4,3,2,1,0))//0
// console.log(Math.max(4,3,2,1,0))//4
// console.log((Math.random()*10)+1);//now it will give random number from 
console.log(Math.floor((Math.random()*10)+1));//this will giv only single digit value no point and its numbers range is 1-9
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);