let vbtn= document.querySelector("#ToggleTheme");
function setDarkOrLight(){if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.remove("light");
    document.body.classList.add("dark");
}else{
    document.body.classList.remove("dark");
    document.body.classList.add("light");
}
}
//setDarkOrLight();
document.body.classList.add(localStorage.getItem("theme"));
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){
    setDarkOrLight();
})
vbtn.addEventListener("click",function(){
   if(document.body.classList.contains("dark")){
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme","light");
   } else{
        document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("theme","dark");
   }  
    
})