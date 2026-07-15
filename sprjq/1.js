// event matlab koi action hua
// event listener matlab koi action ka reaction diya

// addEventListener,removeEventListener

let vp1=document.querySelector("#p1")
vp1.addEventListener("click",function(){
    vp1.style.color="red";
    vp1.style.backgroundColor="yellow";
});
function dblclick(){
    vp1.style.color="blue";
    vp1.style.backgroundColor="red";
}
vp1.addEventListener("dblclick",dblclick);
vp1.removeEventListener("dblclick",dblclick);
