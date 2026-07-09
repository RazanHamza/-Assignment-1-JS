//Part-1 
// (1)
// let numberStr="123";
// console.log(Number(numberStr)+7);

// (2)
// let value =0;  //undefined, null, 0, false, NaN, ""
// if(!value){
//     console.log("Invalid");
// }

// (3)
// for(let i=1; i<=10; i++){
//     if(i%2==0){
//         continue;
//     }   
//     else{
//         console.log(i);
//     }   
// }

// (4)
// let array=[1,2,3,4,5];
// let evenNum=array.filter((num)=>{
//     return num%2==0;
// })
// console.log(evenNum);

// (5)
// let array1=[1,2,3],array2=[4,5,6];
// let mergedArray=[...array1,...array2];
// console.log(mergedArray);

// (6)
// let day=2;
// switch(day){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");  
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
// }

// (7)
// let array=["a","ab","abc"];
// let lengths=array.map((word)=>{
//     return word.length;
// })
// console.log(lengths);

// (8)
// function checker(num){
//     if(num%3==0&&num%5==0){
//         return "Divisible by both";
//     }
//     else{
//         return "Oooops not divisible by both";
//     }
// }
// checker();
// let num = 15;
// console.log(checker(num));

// (9)
// const squareOfNums=(num)=>{
//     return num*num
// };
//  console.log(squareOfNums(5));

// (10)
// function info(object){
//     return `${object.name} is ${object.age} years old`;
// }
// let object={
//     name:"John",
//     age:25}
//     info(object);
//     console.log(info(object));

// (11)
// function sumOfNums(num1,num2,num3,num4,num5){
//     return num1+num2+num3+num4+num5;
// }
// let num1=1,num2=2,num3=3,num4=4,num5=5;
// sumOfNums(num1,num2,num3,num4,num5);
// console.log(sumOfNums(num1,num2,num3,num4,num5));
///////////// another method(searched)  ////////////
// function sumOfNums(...nums){
//     let sum=0;
//     for(let i=0;i<nums.length;i++){
//         sum+=nums[i];
//     }
//     return sum;
// }
// sumOfNums(1,2,3,4,5);
// console.log(sumOfNums(1,2,3,4,5));

// (12)
// function returnMessage(){
//     setTimeout(()=>{
//         console.log("Success");
//     },3000);
// }
// returnMessage();
//دا الى اخدناه 

// (13)
// function getLargestNum(array){
//     let temp=array[0];
//     for(let i=1;i<array.length;i++){
//         if(array[i]>temp){
//             temp=array[i];
//         }
//     }
//     return temp;
// }
// let array=[1,3,7,2,4];
// getLargestNum(array);
// console.log(getLargestNum(array));


// (14)
//عملت سيرش 
// function getKeys(object) {
//     return Object.keys(object);
// }

// let object = {
//     name: "John",
//     age: 25
// };

// console.log(getKeys(object));
/////////anoter method//////////
/*مش هعرف بال for العاديه اعملها 
 فعملت سيرش طلع دى */
// function getKeys(object) {
//     let keys = [];

//     for (let key in object) {
//         keys.push(key);
//     }

//     return keys;
// }

// let object = {
//     name: "John",
//     age: 25
// };

// console.log(getKeys(object));


// (15)
// function splitString(str) {
//     return str.split(" ");
// }
// let str = "The quick brown fox";
// splitString(str);
// console.log(splitString(str));