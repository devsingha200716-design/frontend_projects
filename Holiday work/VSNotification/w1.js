function createToaster(config){
    return function (notification){
            document.body.className =
            config.screenTheme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-black";
            
        let div=document.createElement("div");
        div.textContent=notification;
        div.className=` inline-block ${config.notificationTheme==="dark"?"bg-gray-800 text-white": "bg-gray-100 text-black"} px-6 py-6 rounded shadow-lg`;
        document.querySelector(".parent"). appendChild(div);
       // if(config.positionX!=="left" || config.positionY!=="top"){
            document.querySelector(".parent").classList.add(config.positionX==="right"?"right-5":"left-5", config.positionY==="bottom"?"bottom-5":"top-5")
 //       };
        setTimeout(()=>{
            document.querySelector(".parent"). removeChild(div);
        },config.duration*1000);
 }   
}

//changeable
let toaster=createToaster({
    positionX:"right",
    positionY:"top",
    screenTheme: "dark",          // Screen Theme
    notificationTheme: "light",   // notification theme
    duration:3
})
toaster("Hey you notification.");
//toaster("Touch me.");
setTimeout(()=>{
           toaster("I am Devojit Singha.");
      },3000);
setTimeout(()=>{
            toaster("Touch me.");
        },6000);