

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
