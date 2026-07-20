let seconds =5;
let count=0;
let vsd=document.querySelector("#sd");
let vpg=document.querySelector(".progress");
let vgg=document.querySelector("#going");
let vh2=document.querySelector("#h2");
let vzero=document.querySelector("#zero");

vsd.addEventListener("click",function(){
    let intvl=setInterval(function(){
    if(count<100){
        count++;
        vpg.style.width=`${count}%`;
        vgg.textContent=`${count}%`;
        vzero.textContent=`${count}`;
        
    }else{
       h2.textContent="Downloaded" ;
       vsd.textContent="Open File";
       clearInterval(intvl);
    }
},(seconds*1000)/100);
})


