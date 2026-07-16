let vname=document.querySelector("#name");
let vform=document.querySelector("form");
vform.addEventListener("submit",function(dets){
    dets.preventDefault();
    // if(vname.value.length<=2){
    //       document.querySelector("#hide").style.display="initial";
    //   }else{
    //     document.querySelector("#hide").style.display="none";

    // }
    // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // let ans=regex.test("devsingha@gmail.com");
    // console.log(ans);
    
    const regex = /^[a-zA-Z0-9_]{3,20}$/;
    let ans=regex.test("vasd");
    console.log(ans);
})