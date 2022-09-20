const monthsEle = document.querySelector(".date h1");
const monthIndex=new Date().getMonth();
const fullDateEle=document.querySelector(".date p")
const dayEle=document.querySelector(".days");
const lastDay=new Date(new Date().getFullYear(),monthIndex+1,0).getDate();// indexing start from 0 thats why we added 1 for getting next month
const firstDay=new Date(new Date().getFullYear(),monthIndex,1).getDay()-1; // starting from mon not from sun

const months = [
    "January","February", "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November", "December" 
];


monthsEle.innerText=months[monthIndex];
fullDateEle.innerText=new Date().toDateString();


let dayss="";

for(let i=firstDay ; i>0 ; i--){
    dayss+=`<div class="empty"></div>`;
}


for(let i=1 ; i<=lastDay ; i++){
    if(i===new Date().getDate()){
        dayss+=`<div class="today">${i}</div>`;
    }
    else{
   dayss+=`<div>${i}</div>`;
    }
}


dayEle.innerHTML=dayss;
