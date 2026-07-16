let vinp=document.querySelector("input");
let vspan=document.querySelector("span");
vinp.addEventListener("input",function(dets){
    // console.log(dets);
    // console.log("Input hua")
    // console.log(vinp.value.length);
    vspan.textContent=vinp.value.length
})


// let vinp=document.querySelector("input");
// let vspan=document.querySelector("span");
// vinp.addEventListener("input",function(dets){
//     // console.log(dets);
//     // console.log("Input hua")
//     // console.log(vinp.value.length);
//     let left=20-vinp.value.length;
//     vspan.textContent=left;
//     if(left<0){
//         vspan.style.color="red";
//     }else{
//         vspan.style.color="white";
//     }
// })