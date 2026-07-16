let vdiv1=document.querySelector("#div1");
// vdiv1.addEventListener("mouseover",function(){
//     vdiv1.style.backgroundColor="blue";
// })
// vdiv1.addEventListener("mouseout",function(){
//     vdiv1.style.backgroundColor="red";
// })

window.addEventListener("mousemove",function(dets){
    console.log(dets);
    vdiv1.style.top=dets.clientY + "px";
    vdiv1.style.left=dets.clientX + "px";
    // console.log(dets.clientX,dets.clientY);
})
// console.dir(vdiv1);
// event object-target,type,preventdefault
vdiv1.addEventListener("click",function(dets){
    console.log(dets);
});