
// change
// change event tab chalta hai jab apka koi input selct ya textarea mein koi change ho jaye


let vselect1=document.querySelector("#select1");
let vh41=document.querySelector("#h41");
// vselect1.addEventListener("change",function(dats){
//     console.log(dats.target.value);
// });

vselect1.addEventListener("change",function(dets){
    // vh41.textContent="Device Selcted";
    // console.log(dets);
    vh41.textContent=`${dets.target.value} Device Selected`;
});