let vform= document.querySelector("form");
let vinp=document.querySelectorAll("input")
let main= document.querySelector("#main");
vform.addEventListener("submit",function(dets){
    dets.preventDefault();
    // console.log(dets);
    // console.dir(vinp[0]);
    // console.log(vinp[0].value,
    //             vinp[1].value,
    //             vinp[2].value,
    //             vinp[3].value,
    //             vinp[4].value)


    let card=document.createElement("div");
    card.classList.add("card");
    let profile=document.createElement("div");
    profile.classList.add("profile");
    let img=document.createElement("img");
    let h3=document.createElement("h3");
    let h5=document.createElement("h5");
    let p=document.createElement("p");

    img.setAttribute("src",vinp[0].value);
    h3.textContent=vinp[1].value;
    h5.textContent=vinp[2].value;
    p.textContent=vinp[3].value;
    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    main.appendChild(card);

    // vinp.forEach(function(inp){
    //   if(inp.type!=="submit"){
    //     inp.value="";
    //   };
    // });

});


