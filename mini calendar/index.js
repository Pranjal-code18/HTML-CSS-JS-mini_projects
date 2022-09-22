const monthName=document.getElementById("month-name");
const dayName=document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const yearEle=document.getElementById("year");

const date=new Date();
const month=date.getMonth();
monthName.innerText=date.toLocaleString("en",{
    month:"long"
});

const day =[
   "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
]


dayName.innerText=day[date.getDay()-1];
dayNumber.innerText=date.getDate();
yearEle.innerText=date.getFullYear();