const bar=document.querySelector(".fa-bars");
const menu=document.querySelector(".menu");

bar.addEventListener("click",()=>{
   menu.classList.toggle("show-menu"); // someone clicks on the bar then show menu class add to it . toggle means if meanu is shown thn hide it otherwise show it to user
})