const users = [
  {
    name: "Aarav Sharma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "Frontend developer who loves creating modern web interfaces."
  },
  {
    name: "Priya Verma",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "UI/UX designer with a passion for clean and simple designs."
  },
  {
    name: "Rohan Singha",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    bio: "Travel enthusiast exploring mountains and capturing memories."
  },
  {
    name: "Ananya Das",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    bio: "Coffee lover, book reader, and aspiring full-stack developer."
  },
  {
    name: "Kabir Mehta",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",
    bio: "Fitness freak who enjoys coding and learning new technologies."
  }
];
function showUsers(arr){
  arr.forEach(function (user){
    const card = document.createElement("div");
card.className = "card";

const img = document.createElement("img");
img.src = user.pic;

const blurredLayer = document.createElement("div");
blurredLayer.className = "blurred-layer";

const content = document.createElement("div");
content.className = "content";

const h3 = document.createElement("h3");
h3.textContent = user.name;

const p = document.createElement("p");
p.textContent =user.bio;

content.appendChild(h3);
content.appendChild(p);

card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

// Jahan dikhana hai
document.querySelector(".cards").appendChild(card);
});
}
showUsers(users);
let vinp= document.querySelector(".inp");
vinp.addEventListener("input",function(){
    let nUser=users.filter((user)=>{
        return user.name.toLowerCase().startsWith(vinp.value.toLowerCase())
    });
    document.querySelector(".cards").innerHTML="";
    if(nUser.length>0){
        showUsers(nUser);
    }else{
        let cards=document.querySelector(".cards");
        let vsml=document.createElement("small");
        vsml.textContent="User not found."
        cards.appendChild(vsml);
        
    }
    
    
    
    
});
