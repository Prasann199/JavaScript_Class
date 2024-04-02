// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());//Mon Apr 01 2024 15:41:58 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Mon Apr 01 2024
// console.log(myDate.toISOString());//2024-04-01T10:11:58.308Z
// console.log(myDate.toJSON());//2024-04-01T10:11:58.308Z
// console.log(myDate.toTimeString());//15:41:58 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString());//1/4/2024
// console.log(myDate.toLocaleTimeString());//3:41:58 pm
// console.log(typeof myDate);

let myCreatedDate=new Date(2023,0,23);//january -->0,February-->1,March-->2,
// console.log(myCreatedDate.toString());

// let adate=new Date("2023-01-23")//   23/1/2023
// console.log(adate.toLocaleDateString());

//let myTimeStamp= Date.now()
//console.log(myCreatedDate.getTime());//16,74 -->16:74-->4:13
//console.log(myCreatedDate.getDay());//1-->monday,2-->tuesday,3-->wednesday,...7-->Sunday
myCreatedDate.toLocaleString("default",{
    weekday:"short",
    hourCycle:"h12"

})
console.log(myCreatedDate.getDay());



