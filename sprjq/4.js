//jhjghughu
//keydown,keyup
let vh11=document.querySelector("#h11");
window.addEventListener("keydown",function(dets){
    // console.log(dets);
    if(dets.key===" "){
        vh11.textContent="spc";
    }
    else{
    vh11.textContent=`${dets.key}`;
}
})
