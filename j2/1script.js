
//      dom manipoulation
//html se eleement selct karna 
//text badalna
//html badalna
//css badalna
//attribute 
//event listeners

// selecting element-getElementById, getElementsByClassName,querySelector, querySelectorAll

///6451542168278917890798
let abcd =document.getElementById("abcd");
// console.log(abcd);
console.dir(abcd);
let abcde=document.getElementsByClassName("abcde");
console.dir(abcde);
// console.log(abcde);
let abcdef=document.querySelector("h1");
console.log(abcdef);
// document.querySelector("#mango");   //id
// document.querySelector(".apple");   //class
// document.querySelectorAll("#mango");   //id
// document.querySelectorAll(".apple");   //class
let abcdefg=document.querySelectorAll("h3"); 
console.dir(abcdefg);

// text/content access-innertext, innerhtml, textcontent

let h1=document.querySelector("h1");
h1.innerText="dev bhai";            //innnertext nad text context are same changing normal text
h1.innerHTML="dev bhai";            // its changing text in html(useful)
box.innerHTML = "<h2>Title</h2><p>This is paragraph</p>";
h1.textContent="dev bhai";
h1.hidden=true;
h1.hidden=false;
console.dir(h1);


let h1=document.querySelector("h5");
h1.innerHTML="<u>dev</u>";



// attribute manipulation- getattribute,setattriibute,removeattribute

let a= document.querySelector("a");
// a.href="https://www.google.com";
// element.setAttribute("attributeName", "value");
let img=document.querySelector("img").setAttribute("src","https://plus.unsplash.com/premium_vector-1689096610139-8c4214f58327?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
a.setAttribute("href", "https://www.google.com");
console.dir(a);

let img=document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1783586879543-3378ba2eede0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
let a=document.querySelector("a")
a.setAttribute("href","https://www.google.com");
let a=document.querySelector("a")
a.getAttribute("href");
let a=document.querySelector("a")
a.removeAttribute("href");



// 🔥 Important Rule✅
// ✔ Ek element me:
// 1 id
// Multiple classes
// ❌ Ek element me 2 id nahi hone chahiye (invalid)

<p id="para1" class="garden big apple">   //1 id,2 class(garden big apple)   
  Hello Dev
</p>
document.querySelector("#apple");

document.querySelector(".garden");
document.querySelector(".garden.big");
document.querySelector(".garden.big.apple");

document.querySelector("#apple.garden");
document.querySelector("#apple.garden.big.chair");

// document.querySelector(".garden .big");❌   //space dene par meaning channge

// . → class
// # → id
// Multiple class → .class1.class2
// ID + class → #id.class🖖

let b=document.querySelector("b");
b.removeAttribute("href");
console.log(b.getAttribute("href"));



// dynamic DOM manipulation-createelement, appendelement, removechild, prepand

let h3=document.createElement("h3");        //create then append or prepand
h3.textContent="hello bhaiyahghgh";
// box.innerHTML = "<h2>Title</h2><p>This is paragraph</p>";

document.body.append(h3);        //a/p    p-aage  / a/peeche
document.body.prepend(h3);
document.querySelector("body").append(h3);//a/p
document.querySelector("body").prepend(h3);
h3.remove();//remove
console.log(h3);
let remo =document.querySelector("h3");
remo.remove();//removechild("remo")

let h11=document.createElement("h1");
h11.textContent="can i come";
document.querySelector("div").appendChild(h11);//or apppendchild
document.querySelector("div").prepend(h11);

document.querySelector("#your").prepend("#/ wrong question ");//X used in diff
document.querySelector("#your").document.querySelector.prepend("#name");//X
c-c,s-s,c-s,s-c
let next =document.querySelector("#name");
document.querySelector("#your").prepend(next);
document.querySelector("#your").prepend(document.querySelector("#name"));



// append/prepend/appendchild

//style update-style and classlist(add,remove,toggle)


let ot=document.querySelector(".lodi");
ot.className="hua";        //changing clasname
ot.id="hua";        //changing id

ot.style.color="red";
ot.style.backgroungColor="black";
ot.style.fontFamily="Gilroy";
ot.style.textTransform="capitalize";
console.dir(ot);


let a = document.querySelector("h5");
a.removeAttribute("id"); // ✅//removing id
console.dir(a);
let a = document.querySelector("h5");
a.removeAttribute("class"); // ✅//removing id
console.dir(a);

let h1n=document.querySelector(".hulu");
h1n.classList.add("hulu");  //classlist add
h1n.classList.remove("hulu");
h1n.classList.toggle("hulu") //ulta karta he
console.dir(h1n);


// 16-theory q
// 12-task q
// what is the DOM? How does it represent the html structure.
// Name the types of nodes in the dom tree
//Inspect the following html in the browser and identify each node
// what does getelementbyclSSNAME RETURN? is it is array?
// use queryselctorall to selct all buttons with class,buy-now
//T1: select the heading of a page by id and change its text to "welcome to sheriyians".
//select al <li> elements and print their text using a loop.
//what is the diff between innertext,innerhtml,textcontent.
//when should you used text content instead of innertext.
//T3. selct a paragraph and replace its content with:
//<b> update</b> by javascript 
//how do you get src of an image using js.
// what does setattribute do?
// select a link and update its href to point to https://sheryians.com.
//add a title attribute to a div dyanmically.
// remove the disable attribute from a Button.
//whats does craeteelement do what returned?
// what is the diff between appendchild,prepend?
// craete a new list item<li> new task</li> and add it to the end of a <ul>.
// create a new image element with a palceholder source and add it the top of a dispatchEvent.
//selct the first item in a list and delete it from the dom
//how do you change the backgroo7und color of an element?
//what is the diff between classlistadd nad classlist toggle
//add a highlight class to every even item in a list.
//toggle a class active on a button when 
// clicked(hint use classlist toggle())
//set the font sixe od all element to 18px using style





// diff getElementById and querySelector
document.querySelector("#doing");   // id select
document.querySelector(".doing");   // class select

//button
let buynow= document.querySelectorAll(".buy now");
console.dir(buynow);
//

let a=document.querySelector("#heading");
a.innerText="Welcome to sheriyians";


let a=document.querySelector("li")
for(let i=0;i<a.length;i++){
  console.dir(a[i].textContent);
}
a.onbeforematch(function(val){
  console.dir(val.textContent);
});

let a = document.querySelector("#loduk");
a.innerHTML="<b>Updated</b> by javascript";

let a = document.querySelector("#golu");
console.log(a.getAttribute("src"));
console.log(a.src);
console.log(a.setAttribute("src","https://plus.unsplash.com/premium_photo-1664299990144-62bc30534f3e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"));

let a =document.querySelector("#gaa");
a.href="https://www.sheryians.com";

let a =document.querySelector("#hello");
a.setAttribute("title","ladies and gentlement");

let a =document.querySelector("#hellok");
a.removeAttribute("disabled");

let a =document.querySelector("#goli");
let b=document.createElement("li")
b.textContent="mango";
a.appendChild(b)

let b=document.createElement("img");
b.setAttribute("src","https://plus.unsplash.com/premium_photo-1664299791510-8dd6114bcd2e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
document.querySelector("#hela").append(b);

let a =document.querySelector("#hela2");
let b =document.querySelector("li");
a.removeChild(b);

Element.style.backgroundColor="red";

let a=document.querySelectorAll("#goli li:nth-child(2n)");
console.log(a);
a.forEach(function(elm){
  elm.classList.add("highlight");
});

let a= document.querySelectorAll("p");
a.forEach(function(val){
  val.style.fontSize="18px";
});





let lis =document.querySelectorAll("li");   //selectall is array type(not array)
// lis.forEach(function(val){
//     console.log(val.textContent);
// });
for(let i=0;i<lis.length;i++){
    console.dir(lis[i].textContent);
}
// innertext and textcontent same but inner html is diff
let p1=document.querySelector("#p1");
p1.innerText = "<i>Hello</i>";      //Browser isko normal text samjhega, Tag execute nahi hoga
p1.innerHTML = "<i>Hello</i> <b>bhai<b/>";      //Hello (italic me)

// textcontext-faster  // when use textcontent or innertext(recommended)
// innertext=slower


// let src=document.querySelector("img");      //1
// console.log(img.src);
// console.log(img.getAttribute("src"));


//select and update its href link
let a1=document.querySelector("#a1");
a1.href="https://www.sheryians.com";
//select and update title od the div
let title=document.querySelector("#younger")
title.setAttribute("title","older");

let btn=document.querySelector("#disable");     //enabling button
btn.removeAttribute("disabled");





Events and evenets handling✅✅✅✅✅✅✅

