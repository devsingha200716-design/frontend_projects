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
