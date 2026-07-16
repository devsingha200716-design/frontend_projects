
// practice zone


// const data={          //1
//     name: "Dev",
//     age: 18,
//     Surname: "singha",
// }
// console.log(data);

// const user = {       //4
//   name: "Rahul",
//   age: 20,
// };
// // user.city = "Delhi";
// user.push="date"
// // user.push(2);
// console.log(user);

// const array=[1,2,3];     //6
// array.push(4);
// console.log(array);


// let o=5;//primitive
// let p=o;
// p=p+9;
// console.log(o);
// console.log(p);


//start✊


var b;
var b=14;
let a;
let b=125;
const a=167;

const a;//(X)
a=16;//var a=16;(X)

//       var
//window me add hota hai
//function hota hai
// aap girse declare kar sakte hai same name se and error nhi ayega

// Declaration and inistialization
let a;  //declare 
let a=14;   //declare and initilize(initialization = first assignment)

// scope
global scope
functioanl scope
block scope

var-global,function scope
let,const=block scope

// temporal dead zone

//ReferenceError: abc is not defined
console.log(abc); //not define

console.log(a);  // undefine- hoist given undefine
// no tdz
var a = 10;
//
console.log(a);
//tdz
let a = 10;
//ReferenceError: Cannot access 'a' before initialization

console.log(b);
//tdz
 const b = 10;
// ReferenceError: Cannot access 'b' before initialization

//hoisting
var a=12;

var a = undefined;
console.log(a);
a = 5;

// var:>tdx:>no
// let:>tdx:> yes
// const:>tdx:> yes

// var:>hoist:>undefine
// let:>hoist:> X
// const:>hoist:> X











var a = undefined;    // hoist se isko value mil gaya name= undefine
console.log(a);
a = 5;






console.log("hgwsh");



const user={name:"alkil",age="24"}    //*
Object.freeze(user);

user.age=34;//X
user.role="admin";//X
delete user.name;//X












// CHAPTER 2✅

// DATATYPE✊

let a=undefined;
console.log(a);
let a=null;
console.log(a);



//symbol
let u1 =Symbol("uid");
let u2 =Symbol("uid");

let obj={
    name: "Dev",
    uid: 1,
    age: 18
};
let u11 =Symbol("uid");
obj[u11] ="001";

//bigint

// Number.MAX_SAFE_INTEGER

let a = 9007199254740991n;
// a +5n;
// a+1n;

//array
let sa=[1,2,3];//array
let va=sa;
va.pop(8);
// let r={
//     name:"harsita",
//     rollno: 1,
// }       //object
// let s=r;
// s.name="harsh";
// console.log(s);

//Dynamic typing✊
       
//js not have static typing it have dynamic typing

// int a=12;//other programing lang
// a= "sher";//not possible(int to string, not direct change but by typecasting change posiible )
// a =true;

// let g=12;//js (dynamic typing)
// g =true;
// g ="dev";
// g= null;
// g=undefined
// g=[];    

// typeof datatype✊

// Non-primitive mostly:
// object 

// क्योंकि JavaScript में array internally एक special type of object है। JavaScript में separate "array" type नहीं है typeof के लिए।
// typeof [] // "object"

// typeof NaN
// 'number'
// typeof ()
// not exist but we can use like (2),(true)
// typeof 123n
// 'bigint'

// Type coercion✊

// + --> add / concatination
//- --> only subtract


//truthy or falshy values✊(!!)

// false--> 0,-0,0n, false, null, NaN, undefined, document.all, "", ''
not falshy-{},[],'false','0'

// !!"Sheryians"
// true
// !!" "
// true
// !!""
// false

// !![]
// true

// if(null) --> false
// if(-1) --> true

// practice zone

// function isEmpty(value) {        // 4
//   return value === null || value === undefined || value === "";
// }
// console.log(isEmpty(null));       // true
// console.log(isEmpty(undefined));  // true
// console.log(isEmpty(""));         // true
// console.log(isEmpty("Hi"));       // false
// console.log(isEmpty(0));          // false
// console.log(isEmpty(false));      // false


// -Task--

// . datatype
// . dynamic typing
// . typeof datatype
// . type coercion
// . Loose vs strict Equallity
// . NaN
// . Truthy and Falsy Values

// . practice zone


//CHAPTER 3✅

// + ---> add / concate             (1)
// "har" + "sh" = "harsh"(concate)

// 2**2 = 4(exponential)             (2)

// 12==14   //false                     (3)
// 12===14 // false

// 12 == "12"   //true(Not strict)
// 12 === "12"   //false(recommended)

// 12 != 13                                                           //true(not strict)      (4)
// 12 !="12"     //false
// 12 !== "12"   //true

// ! 54                             (5)
// false
// !! 54
// true



// + "2"                            (6)
// 2
// + "dev"
// NaN
// - "4"
// -4
// - "dev"
// NaN


let aa = 5;
// ++aa;
// console.log(aa); //6
console.log(++aa);

let bb = 5;
// bb++;              //5
// console.log(bb); //6
console.log(bb++); 


let jk =5
undefined
++jk;
6
let jl=5;
undefined
jl++;
5

// instance always work with reference value        (7)
// typeof works accurately with primitive value



// in js arary are child of  object but vice versa not true

// typeof null  //error
// 'object'
// typeof NaN
// 'number'
// typeof []
// 'object'


let sg=[];
undefined
sg instanceof Array
true
sg instanceof Object
true
 let gh={};
undefined
gh instanceof Object
true
gh instanceof Array
false


let hj=12;  
undefined
hj instanceof Number
false



// let score =100;                                          (8)
// let grade = score>= 90 ? "A" : score>=60 ? "B" : score>=30 ? "pass" : "Fail" ;
// console.log(grade);




// let str = "42";
// let num = +str;
// console.log(num);

// let str = "42";
// let num = ++str;
// console.log(num);

//CHAPTER 4✅

//question

function getgrade(score){       //1
    if(score >= 90 && score <=100) return "A+";
    else if(score >= 80 && score < 90) return "A";
    else if(score >= 70 && score < 80) return "B";
    else if(score >= 60 && score < 70) return "C";
    else if(score >= 33 && score < 70) return "D";
    else if(score >= 0 && score < 33) return "Fail";
    return "Invalid marks";
}
console.log(getgrade(40));


function rps(user, computer){          //2
    if(user==="rock" && computer==="scissor") return "Uesr won";
    if(user==="scissor" && computer==="rock") return "computer won";
    if(user==="scissor" && computer==="paper") return "user won";
    if(user==="paper" && computer==="scissor") return "computer won";
    if(user==="rock" && computer==="paper") return "computer won";
    if(user==="paper" && computer==="rock") return "user won";

    if(user==="scissor" && computer==="scissor" || user==="rock" && computer==="rock" || user==="paper" && computer==="paper") return "Draw";
    return "Inavllid move";
}
console.log(rps("rock", "paper"));

//** */
function rps(user,computer){
  if(user===computer) return "Draw";
  if(user==="rock" && computer==="scissor") return "user";
  if(user==="scissor" && computer==="paper") return "user";
  if(user==="paper" && computer==="rock") return "user";
  return "Computer";
}
console.log(rps("scissor","rock"));



let isLoggedIn = true;              //3
let isAdmin = false;

function checkUser(isLoggedIn, isAdmin) {
  if (!isLoggedIn) {
    return "Please log in first.";
  }

  if (isAdmin) {
    return "Welcome Admin!";
  }

  return "Welcome User!";
}
// Example
console.log(checkUser(isLoggedIn, isAdmin));

// | isLoggedIn | isAdmin | Output                   |
// | ---------- | ------- | ------------------------ |
// | `true`     | `true`  | **Welcome Admin!**       |
// | `true`     | `false` | **Welcome User!**        |
// | `false`    | `true`  | **Please log in first.** |
// | `false`    | `false` | **Please log in first.** |



let weather = "rainy";          //4

switch (weather) {
  case "sunny":
    console.log("Wear sunglasses and light clothes.");
    break;

  case "rainy":
    console.log("Take an umbrella and wear a raincoat.");
    break;

  case "cold":
    console.log("Wear a jacket or sweater.");
    break;

  default:
    console.log("Check the weather and dress accordingly.");
    break;
}


function getAgeGroup(age) {         //5
    if (age < 13) return "Kid";
    if (age < 20) return "Teen";
    if (age < 60) return "Adult";
    return "Senior";
}

// Example
console.log(getAgeGroup(10)); // Kid
console.log(getAgeGroup(16)); // Teen
console.log(getAgeGroup(30)); // Adult
console.log(getAgeGroup(65)); // Senior







// CHAPTER 5✅


// console.log() print karne ke baad automatically next line me chala jata hai.
// for(Start; end; change){

// }
for(let i=1; i<=50; i++){
  console.log(i);
  console.log("I love you");
}


// start
// while(end){
//   //code
//   change
// }
  

let i=12;             //while may not run once
while(i<=20){
  console.log(i);
  i++;
}

//do{
  
// } while(end);

let ab=12;      //do-while runs atleast once
do{
  console.log(ab);
  ab++;
} while(ab<=0);

//break & continue

for (let i = 1; i <= 20; i++) {
  if (i === 15) {
    break;
  }
  console.log(i);  // end at 14
}
for (let i = 1; i <= 20; i++) {
  if (i === 15) {
    continue;
  }
  console.log(i);  // Skips 15
}


// question

for(let i=1; i<=10; i++){       //1
  console.log(i);
}

let bn=10;                        //2
while(bn>=0){
  console.log(bn);
  bn--;
}

for(let i=2; i<=10; i=i+2){       //3
  console.log(i);
}

for(let i=1; i<=10; i++){  
  if(i%2===0){
    console.log(i);
    }
}

let ad=1;                       //4
while(ad<=15){
  console.log(ad);
  ad = ad+2;
}
let i=1;
while(i<16){
  if(i%2==1){
    console.log(i);
  }
}

for(let i=5;i<=50;i=i+5){       //5
  console.log(i);
}
for(let i=1;i<=10;i++){
  // console.log(5*i)
  console.log(`5 * ${i} = ${5*i}`);
}
let sum =0;                                                                      //6
for(let i=1;i<=100;i++){
  sum+=i;
}
console.log("Sum is ", sum);

let add=0;
let df=1;
while(df<=100){
  add+=df;
  df++;
}
console.log("Sum is ", add);

for(let i=1;i<=50;i++){     //7
  if(i%3==0){
    console.log(i);
  }
}

// let val = prompt("Give a number");     //8  //imp
for(let i=1;i<=val;i++){
  if(i%2===0) {
    //console.log(i," is Even number");
   console.log(`${i} is Even number`);
  }
  else {
    // console.log(i," is odd number");
    console.log(`${i} is Odd number`);
  }
  }





// let valu = prmpt("Give a number");
if(valu%2==0) console.log(valu, " is even number");
else console.log(valu, " is odd number");

let count =0;               //9
for(let i=1;i<=100;i++){
  if(i%3===0 && i%5===0){
    count++;
  }
}
console.log(count);


for(let i=1;i<=100;i++){      //1 (break)
  console.log(i);
  if(i%7===0) break;
}
for(let i=1;i<=20;i++){      //2 (continue)
  if(i%3===0) continue;
  console.log(i);
}

let counting=0;           //3
for(let i=1;i<=100;i++){
  if(i%2===1) {
    counting++; 
    console.log(i);
  }
  if(counting===5) break;

}

// //input in js

// let name = prompt("Enter your nam:");
// // console.log("Hello " + name);
// console.log("Hello ", name);

// let num = Number(prompt("Enter a number:"));
// console.log(num + 10);

//chatgpt 5

for(let i=1;i<=20;i++){     //1
  if(i%3===0) continue;
  console.log(i);
  if(i===15) break;
}
for(let i=10;i>0;i--){            //2
  if(i%2===0) console.log(i);
}

let num=10;
while(num>0){
  if(num%2===0) console.log(num);
  num--;
}

let sum3=0;                   //3
for(let i=1;i<=50;i++){
  if(i%5===0){
    sum3+=i;
  }
}
console.log(sum3);

for(let i=1;i<=5;i++){        //4
  let line ="";
  for(let j=1;j<=i;j++){
    line+=" *";
  }
  console.log(line);
}


let line;
for (let i = 1; i <= 5; i++) {
  line += " ";
  for (let j = 1; j <= i; j++) {
    line += "*";
    // break; // only one start added
  }
  console.log(line);
}


for(let i=1;i<=30;i++){         //5
  if(i%3===0 && i%5===0)console.log("JSLoop");
  else if(i%3==0)console.log("JS");
  else if(i%5==0)console.log("Loop");
  else console.log(i);

  
}

//common

// | Method | Kaam          | Original Array  |
// | ------ | ------------- | --------------- |
// | push() | Add end me    | Change hota hai |
// | pop()  | Remove end se | Change hota hai |
// | sort() | Arrange karta | Change hota hai |

// let arr = [5, 2, 9];

// arr.push(1);
// arr.pop();
// arr.sort((a,b)=>b-a);
// console.log(arr);

