let vform=document.querySelector("form");
let vname=document.querySelector("#name");
let vusn=document.querySelector("#username");
let vemail=document.querySelector("#email");
let vpsw=document.querySelector("#password");
let vcpsw=document.querySelector("#Cpassword");
vform.addEventListener("submit",function(dets){
    dets.preventDefault();
    let spcname = vname.value.trim().replace(/\s+/g, " ");
    const rname= /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    let aname=rname.test(spcname);
    const remail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let aemail=remail.test(vemail.value.trim());
    const r1usn= /^[0-9]/;
    let a1usn=r1usn.test(vusn.value.trim());
    const r2usn= /^[A-Za-z0-9_]+$/;
    let a2usn=r2usn.test(vusn.value.trim());
    const rpsw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let apsw=rpsw.test(vpsw.value.trim());
    
    if(spcname===""){
        document.querySelector("#hide1").style.display="initial";
        document.querySelector("#hide12").style.display="none";
        document.querySelector("#hide13").style.display="none";
    
    }
    else if(aname===false){
        document.querySelector("#hide13").style.display="initial";
        document.querySelector("#hide1").style.display="none";
        document.querySelector("#hide12").style.display="none";  
    } else if(spcname.length<3|| spcname.length>50){
        document.querySelector("#hide12").style.display="initial";
        document.querySelector("#hide1").style.display="none";
        document.querySelector("#hide13").style.display="none";
    }
    else{
      document.querySelector("#hide1").style.display="none";
      document.querySelector("#hide12").style.display="none";  
      document.querySelector("#hide13").style.display="none";
    }
 
    
    
    
    
    if(vusn.value.trim()===""){
        document.querySelector("#hide2").style.display="initial";
        document.querySelector("#hide22").style.display="none";
        document.querySelector("#hide23").style.display="none";
        document.querySelector("#hide24").style.display="none";
        
    }
    
    else if(a1usn){
       document.querySelector("#hide23").style.display="initial"; 
          document.querySelector("#hide2").style.display="none";
        document.querySelector("#hide22").style.display="none";
        document.querySelector("#hide24").style.display="none";
    }else if(!a2usn){
        document.querySelector("#hide24").style.display="initial";
           document.querySelector("#hide2").style.display="none";
        document.querySelector("#hide23").style.display="none";
        document.querySelector("#hide22").style.display="none";
    }
    
   else if(vusn.value.trim().length<3|| vusn.value.trim().length>20){
        document.querySelector("#hide22").style.display="initial";
        document.querySelector("#hide2").style.display="none";
        document.querySelector("#hide23").style.display="none";
        document.querySelector("#hide24").style.display="none";
    }
    
    
    
    else{
      document.querySelector("#hide22").style.display="none";  
      document.querySelector("#hide2").style.display="none";
         document.querySelector("#hide24").style.display="none";
        document.querySelector("#hide23").style.display="none";
    }
    
    
    
    
     
    if(vemail.value.trim()===""){
        document.querySelector("#hide3").style.display="initial";
        document.querySelector("#hide32").style.display="none";
        document.querySelector("#hide33").style.display="none";
    }else if(vemail.value.trim().includes(" ") ||
        vemail.value.trim().includes("  ") ||
       vemail.value.trim().includes("   ")){
          document.querySelector("#hide32").style.display="initial"; 
          document.querySelector("#hide3").style.display="none";
          document.querySelector("#hide33").style.display="none";
       }
       else if(aemail===false){
        document.querySelector("#hide33").style.display="initial"; 
          document.querySelector("#hide3").style.display="none";
          document.querySelector("#hide32").style.display="none";   
       }
      else{
        document.querySelector("#hide3").style.display="none";
        document.querySelector("#hide32").style.display="none";
        document.querySelector("#hide33").style.display="none";
    }
    
    
    
    
    
    if(vpsw.value.trim()===""){
        document.querySelector("#hide4").style.display="initial";
        document.querySelector("#hide42").style.display="none";
        document.querySelector("#hide43").style.display="none";
        document.querySelector("#hide44").style.display="none";
    }
   else if(vpsw.value.trim().length>0 && vpsw.value.trim().length<8){
        document.querySelector("#hide42").style.display="initial";
        document.querySelector("#hide43").style.display="none";
        document.querySelector("#hide44").style.display="none";
        document.querySelector("#hide4").style.display="none";
    }else if(vpsw.value.trim().includes(" ") ||
        vpsw.value.trim().includes("  ") ||
       vpsw.value.trim().includes("   ")){
          document.querySelector("#hide43").style.display="initial"; 
          document.querySelector("#hide4").style.display="none";
          document.querySelector("#hide42").style.display="none";
          document.querySelector("#hide44").style.display="none";
       }else if(!apsw){
            document.querySelector("#hide44").style.display="initial"; 
          document.querySelector("#hide4").style.display="none";
          document.querySelector("#hide42").style.display="none";
          document.querySelector("#hide43").style.display="none";  
       }
    else{
      document.querySelector("#hide42").style.display="none";  
      document.querySelector("#hide44").style.display="none";
      document.querySelector("#hide43").style.display="none";
      document.querySelector("#hide4").style.display="none";
    }
    
    if(vcpsw.value.trim()===""){
        document.querySelector("#hide5").style.display="initial";
        document.querySelector("#hide52").style.display="none";
    }else if(vpsw.value.trim()!==vcpsw.value.trim()){
        document.querySelector("#hide52").style.display="initial";
        document.querySelector("#hide5").style.display="none";
    }
    else{
        document.querySelector("#hide5").style.display="none";
        document.querySelector("#hide52").style.display="none";
    }   
    
  
})
let veye1=document.querySelector("#eye1");


veye1.addEventListener("click",function(){
   if(vpsw.type==="password"){
       vpsw.type="text";
       veye1.textContent="🙈";
   }else{
        vpsw.type="password";
       veye1.textContent="👁️";
   }
})

let veye2=document.querySelector("#eye2");
veye2.addEventListener("click",function(){
   if(vcpsw.type==="password"){
       vcpsw.type="text";
       veye2.textContent="🙈";
   }else{
        vcpsw.type="password";
       veye2.textContent="👁️";
   }
})

