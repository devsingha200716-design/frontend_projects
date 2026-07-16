// document.querySelector("#nav").addEventListener("click",function(){
//     alert("Cllicked");
// })

//jab bhi ap koi bhi evt karte ho to do phase hota hai
// phase 1: event top element se neeche ki tarh aata hai(html tag se )
// phase 2:event raised element se paernt ki tarah jata hai.
//hamesha phase 1 chalta hai but by default off rehti hai, agr hmm usse on kardete to pehle phase 1 ka answer milega

//capture phase than bubbling phase
let a=document.querySelector("#a");
let b=document.querySelector("#b");
let c=document.querySelector("#c");
let button=document.querySelector("button");
button.addEventListener("click",function(){
    console.log("btn clicked");
})
c.addEventListener("click",function(){
    console.log("c clicked");
})
b.addEventListener("click",function(){
    console.log("b clicked");
})
a.addEventListener("click",function(){
    console.log("a clicked");
},true)

//cutting/event delgation
let vul=document.querySelector("ul");
vul.addEventListener("click",function(dets){
    // console.log(dets);
    // console.log(dets.target);
    // dets.target.style.textDecoration="line-through";
    dets.target.classList.toggle("lt");
});
