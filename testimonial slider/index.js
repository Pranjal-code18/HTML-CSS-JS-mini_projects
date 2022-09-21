const testimonials=[
    {
        name:"-Alyson L.",
        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text:"It's really wonderful. I'd be lost without funny. I'm good to go. Thanks to funny, we've just launched our 5th website!"
    },
    {
         name:"-Ramper P.",
         photoUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
         text:"The very best. I would be lost without funny. Really good.",
    },
    {
        name:"- Clari N.",
        photoUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"I don't know what else to say. I would gladly pay over 600 dollars for funny. I will refer everyone I know.",
    },
    {
        name:"- Toby L",
        photoUrl:"https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text:"Funny is the next killer app. I would be lost without funny. It's exactly what I've been looking for. If you aren't sure, always go for funny."
    },
    {
        name:"- Blakelee H.",
        photoUrl:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text:"Funny impressed me on multiple levels. Funny is the most valuable business resource we have EVER purchased. Funny is the most valuable business resource we have EVER purchased. Thanks to funny, we've just launched our 5th website!"
    },
];


const imgEle=document.querySelector("img");
const textEle=document.querySelector(".text");
const nameEle=document.querySelector(".username");

let idx=0;

updateTestimonial();

function updateTestimonial(){
   const{name,photoUrl,text}=testimonials[idx];
   imgEle.src=photoUrl;
   textEle.innerText=text;
   nameEle.innerText=name;
   idx++;
   setTimeout(()=>{
    updateTestimonial()
   },2000);
}


