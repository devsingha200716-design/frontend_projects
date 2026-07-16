
// chapter -6 (Function)✅

function dance(){
  console.log("Dance");
  console.log("Dance");
  console.log("Dance");
  console.log("Dance");
}
// console.log(dance());
dance();//✅

function daance(){
 return "booty";
}
console.log(daance());//✅
// dance();


//⭐ | Call                   | Kaam               |
// | ---------------------- | ------------------ |
// | `dance()`              | Sirf function run  |
// | `console.log(dance())` | Run + return print |

let fn =function(){
    console.log("hwyhwywhwyw");
}
fn();



function dance(){
    //function statement/ declaration
}
let inu =function(){
    //function expression
}
let fnc = ()=>{
    // fat arrow function
    console.log("hello");
}
fnc();


function ddance(animal){    //  parameter
    console.log(`${animal} nach raha hai`);
}
ddance("animal");   //  argument
ddance("Hathi");


function addd(v1,v2){    //default parameter
    console.log(v1,v2);
    console.log(v1+v2);
}
addd();
function add(v1=0,v2=0){
    console.log(v1,v2);
    console.log(v1+v2);
}
add();
function add(v1=0,v2=0){
    console.log(v1,v2);
    console.log(v1+v2);
}
add(1,2);

function abcd(...val){ // rest
    console.log(val);
}
abcd(1,2,3,4,5,6,7,8,9);
function abcd(a,b,c,d, ...val){
    console.log(a,b,c,d,val);
}
abcd(1,2,3,4,5,6,7,8,9);

function abc(){         //return
    return 21;
}
// let val =abc();
// console.log(val);
console.log(abc());

function abcdu(v){      
    return 21+v;
}
let val =abcdu(23);
console.log(val);
// console.log(abc());

// first class function -> function ko value ki trah treat kar sakte hai

let name = function (){             //1
    console.log("hwy");
}
name(); //its like calling  a variable , where it has function

function dec(val){                  //2(pass a another function to anpother function )
    val();
}
dec(function (){
    console.log("nono");
});

//higher order function -> wo function jo ki return karer ek function ya fir accept kare ek function apne parameter me
// JS me Higher Order Function wo function hota hai jo:
// ya to function ko return kare,
// ya function ko argument me le.

function abucd(){                //1 abcd is hof
    return function (){
        console.log("hello");
    }
}
abucd()();

function abd(val){          //2 abcd is hof
}
abcd(function (){

});

// pure function ->Bahar ke data ko change na kare (no side effects)
// Impure function ->Ya bahar ke data ko change karta hai
let a = 12;

function abcd() {       //pure function
    let a = 5;      // local variable (shadowing)
    console.log(a);
}
abcd();
console.log(a);

function abcd(){    //impure F
    a++;
}

// closure --> ek func jo return kare ek aur function aur return hone waala func hamesha use karega parent function ka koi variable
// 👉 Inner function apne outer function ke variables access kar sakta hai
 function abcd(){
    let a=12;
    return function(){
        console.log(a);
    }
 }
 
 // lexical scoping --> let a is accessable in abcd function and b is in efg and c in hij
 function abcd(){
    let a=12;
     function efg(){
        let b=2;
        function hij(){
            let c=13;
        }
    }
 }
 (function(){
    //IIFE(immediately invoked Function Expression-private variable)
    console.log("he");//dont neede to call outside already call here
 })();
 (function value(){
    //IIFE(immediately invoked Function Expression)
    console.log("he");//dont need to call outside already call here
 })();

 (function val(){
    const password ="strong password";//private variable
    console.log(password);
})();
// console.log(password);   // error

//Hoisting
// function declaration/statement   ✅
// function expression(var,let const, arrow fat function)              ❌
 abcde();
 function abcde(){
    console.log("hey");
 }
//  abcdr();
//  let abcdr= function(){
//     console.log("hey");
//  }

            //question

 // use rest parameter to acept  any number and sum it and return the total
 function getscore(...score){
    let total =0;
    score.forEach(function(val){
        total=total+val;
    })
    return total;
 }
 console.log(getscore(10,23,34,12));

//write a BMI calculator
function bmi(weight, height){
    return weight/(height*height);
}
console.log(bmi(60,5.5).toFixed(2));

function bmi(weight, height){
    return weight/(height*height);
}
console.log(bmi(60,5.5).toFixed(2));

// discount calculator(closure function)
function discount_calculator(discount){         //1
    return function (price){
        return price- price*(discount/100);
    };
};
let ten_dis = discount_calculator(10);
let twenty_dis = discount_calculator(20);

console.log(ten_dis(1200));
console.log(twenty_dis(1200));

function counter(){                             //2
    let count=0;
    return function(){
        count++;
        return count;
    };
};
let i =counter();
console.log(i());
console.log(i());
console.log(i());

let o =counter();
console.log(o());
console.log(o());
console.log(o());


// arrays✅✅

// sort,reduce-2 var
let marks =[1,5];   //create                                    //1
console.log(marks);     //print whole arr
console.log(marks[1]);   //access
marks[1]=2;    //update

//method
marks.push(3,4); //1,2,3,4
marks.pop();    //1,2,3

marks.shift();  //2,3
marks.unshift(1,1.5);//1,1.5,2,3

// marks.splice(0,1);  //1.5,2,3
marks.splice(0,2);  //2,3
marks.push(4,5,6);  //2,3,4,5,6
let new_marks=marks.slice(0,4);// 2, 3, 4, 5           / /Non  mutable
// new_marks
// (4) [2, 3, 4, 5]
// marks
// (5) [2, 3, 4, 5, 6]

marks.reverse();    //6,5,4,3,2
marks.sort(function(a,b){
    return a-b; //ascending
});
marks.sort(function(a,b){
    return b-a; //descending
});

marks.forEach(function(val){    //for evry elmt run function                   //2
    // console.log(val);
    // console.log(val+5);
})
let arr=marks.map(function(val){// nap srf tab use karna he jb nya arry bnana he ,pichle arry ke dta ke basis par
    if(val>4) return val;                                       
    // return  12;                                                  // / /Non  mutable
});
let arr2=marks.filter(function(val){                                    // / /Non  mutable
    // if(val>4) return val;                    
    if(val>4) return true;
    // if(val>4) return false;
})
let ans=marks.reduce(function(accumalator, val){                         // / /Non  mutable
    return accumalator+val;
},0);

let find=marks.find(function(val){  //find(array)           //3                // / /Non  mutable
    return val===4;
});
let find1=[   // (object)
    {id: 1, key:1},//use first comes one
    {id: 2, key:1},//not next
    {id: 3, key:2}
];
let va=find1.find(function(val){  
    return val.key===1;
});

let any=marks.some(function(val){                                   // / /Non  mutable
    return val>6;           //t/f
});
let any1=marks.every(function(val){                                     // / /Non  mutable
    return val>0;               //t/f
});
console.log(marks);

let arr1 = [1, 2];                              //Non  mutable
let arr22 = [3, 4];
let newArr = arr1.concat(arr22);
// let result = arr1.concat(arr2, [5, 6]);
// console.log(result);
// // [1, 2, 3, 4, 5, 6]
console.log(newArr);        //// [1, 2, 3, 4]
console.log(arr1);   //// [1, 2]  (unchanged)



// let[val1,val2,,val4]=marks; //destructuring
// // val1
// // 6
// // val4
// // 3
// // let marks2=marks;//shallow copy(cahnge 2 then change 1)
// let marks2=[...marks];//    deep copy/  // spread operator    (spread operator - arr, rest operator - func)



//qq
let splice = [1,2,3,4,5];   //detail splice
console.log(splice); 
splice.splice(1,0,1.5,1.8);
console.log(splice);    
console.log("bro");                        

let name22= ["dev", "aksh","ravi","biju"];  ///sort and then reverse
// name22.sort();  //sort in default ascending only
name22.sort().reverse();
console.log(name22);

let number =[1,2,3,4,5];            //use map , square the each number
let square=number.map(function(val){
    return val*val;
});

let first =[1,2];       //merge two array
let second=[3,4];
let ca=[...first, ...second];
console.log(ca);

let countries =["usa","japan"];
countries=["india",...countries];

//object✅✅
let objj ={
    name:"Dev",
    age:18,
    vision:"fuck",
};

 //accessing

console.log(objj);           //1️⃣ Access Whole Object                            //1

console.log(objj.name);          //2️⃣ Access Individual Properties
console.log(objj.age);
console.log(objj.vision);

console.log(objj["name"]);           //Bracket notation
console.log(objj["age"]);

console.log(Object.keys(objj));          //3️⃣ Get All Keys

console.log(Object.values(objj));            //4️⃣ Get All Values
console.log(Object.keys(objj) , Object.values(objj));   //mixed

let buffer = "name";
// objj.buffer;         /// dynamic key- searching buffer not name in objj
console.log(objj[buffer]);

const user ={           ////nesting and deep object
    name:"Dev",
    "first-name":"harsh",
    address:{
        city: "bhopal",
        pin :788726,
        location:{
            lat: 23.4,
            lng: 566.4
        },
    },
};
console.log(user.address.location.lat);

// let abc=user.address.location.lat; //❌  //object destructuring              
// // console.log(abc);

let {lat,lng}=user.address.location;//✔️
let{city}=user.address.city;
let{"first-name":firstname}=user;       ///imp
// let{"first-name":firstname}=user.firstname;    ❌   ///imp

console.log(firstname);
console.log(lat);

let obj17={         //keys                                                      //2
    name:"dev",
    age:15,
    do:"fuck",
}
for(let key in obj17){      //for in
    // console.log(key);
    // console.log(obj17[key]);
    console.log(key, obj17[key]);
}
let keys=Object.keys(obj17);      //object keys and values
console.log(keys);
// console.log(Object.keys(obj17));

let entries=Object.entries(obj17);      //object entries
console.log(entries);
// console.log(Object.entries(obj17));

let objclone={...obj17};        //clone---spread operator is used to clone simple object //3
let objclone2=Object.assign({},obj17);  //assign=clone by spread operator
let objclone22=Object.assign({Name: Infinity},obj17);//(adding)

// deep clone---for nested object spread operator didnt work 
let nested ={         
    name:"Dev",
    address:{
        city: "bhopal",
        pin :788726,
        location:{
            lati: 23.4,
            lngi: 566.4
        },
    },
};
// let clone1 ={...nested};❌
let clone1=JSON.parse(JSON.stringify(nested));

// let{city}=nested.address.city;
// let{lati,lngi}=nested.address.location;
nested.address.location.lati=13.2;
clone1.address.location.lati=773.2;

// nested.address.location.lat
// 13.2
// clone1.address.location.lat
// 773.2


// JSON.stringify(obj)                                  //change obj to str
// '{"name":"Dev","age":18,"vision":"fuck"}'
// JSON.parse('{"name":"Dev","age":18,"vision":"fuck"}') //change st to object
// {name: 'Dev', age: 18, vision: 'fuck'}

let role="admin";       //computed properties(add)          //4
let objcet={
    name:"harsh bhai",
    rollno4:{
        no:35,
        gang:"rombus",
    },
    [role]:"harsh",         //added
};
// objcet.rollno.gang; //normal(error)
objcet?.rollno?.gang; //            optional chaining(not error but undefined)


//question


let objq2={    // key may ne can number or boolean      //1
    2:"yes",
    true:"no",
    "first-name":"rahul"  ,      //imp
}
// console.log(objq2.2);
console.log(objq2[2]);//✅
console.log(objq2.true);//✅
console.log(objq2[true]);//✅

console.log(objq2.first-name);
console.log(objq2[first-name]);
console.log(objq2["first-name"]);//✅

let key="age";      //dynamic key           //2(already done  at beginning)
const objq3={
    age:25,
};
console.log(objq3[key]);

let objq4={                 //3
    start:"hello",
    end:"Bye",
};
// console.log(Object.entries(objq3).)
Object.entries(objq4).forEach(function(val){
    console.log(val[0]+":"+val[1]);
})


