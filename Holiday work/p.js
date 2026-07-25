let form = document.querySelector("form");
let name = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");
const userManager={
    users:[],
    init:function (){form.addEventListener("submit",this.submitForm.bind(this))},
    submitForm: function (data){
      data.preventDefault();
      this.addUser();     
    },
    addUser:function(){
        this.users.push({
          name:name.value,
          role:role.value,
          bio:bio.value,
          photo:photo.value   
      })
      form.reset();
      this.renderUi();
    },
    renderUi: function (){
    document.querySelector(".cards").innerHTML="";
    this.users.forEach((user,index)=>{
        const card = document.createElement("div");
card.className = "card";
const remove=document.createElement("span");
remove.className="remove";
remove.innerHTML = "&times;";

remove.addEventListener("click", ()=>{
   this.removeUser(index);
});

const img = document.createElement("img");
img.src = user.photo;

const h3 = document.createElement("h3");
h3.textContent = user.name;

const h4 = document.createElement("h4");
h4.textContent = user.role;

const p = document.createElement("p");
p.textContent = user.bio;

card.appendChild(remove);
card.appendChild(img);
card.appendChild(h3);
card.appendChild(h4);
card.appendChild(p);
//document.querySelector(".cards").innerHTML="";
document.querySelector(".cards").appendChild(card);
    })},
    
    removeUser: function (index){
        this.users.splice(index,1);
        this.renderUi();
    }
}

userManager.init();













