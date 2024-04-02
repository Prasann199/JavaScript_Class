//Arrays 
const arr=[1,2,3,4,5];
const newarr=new Array(1,2,3,4,5,6,7,8)
console.log(arr[4]);//5
arr.push(8);
console.log(arr);//[ 1, 2, 3, 4, 5, 8 ]
arr.pop()
console.log(arr);//[ 1, 2, 3, 4, 5 ]
console.log(arr.length);//5
arr.shift()
console.log(arr);
arr.unshift(1)
console.log(arr)