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

//click,input,change,submit,mouseover,keyup/down



//input

let vinp1= document.querySelector("#input1");
vinp1.addEventListener("input",function(dets){
    // console.log(dets)
    //console.log("Typed");
    // console.log(dets.data);
    if(dets.data===" "){
        console.log("spc");
    }else if(dets.data!==null){
        console.log(dets.data);
    }
});

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

// /hjhgu
//upload file
let vinp2=document.querySelector("#input2");
let vdiv2btn= document.querySelector("#div2btn");
vdiv2btn.addEventListener("click",function(){
    vinp2.click();
    // alert("clidkh");
})
vinp2.addEventListener("change",function(dets){
    // console.log(dets);
    // console.log(dets.target.files[0].name);
    vdiv2btn.textContent=`${dets.target.files[0].name}`;
    // vdiv2btn.textContent=dets.target.files[0].name;

    // const file=dets.target.file[0];
    // if(file){
    //     vdiv2btn.textContent=file.name;
    // }
});

//click,dblclick
//input
//change
//keydown,keyup-window
//q
//click,alert




