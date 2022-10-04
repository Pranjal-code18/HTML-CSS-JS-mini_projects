const date=document.getElementById("date");
const month=document.getElementById("month");
const year=document.getElementById("year");

const getDay=document.getElementById("getDay");
const result=document.getElementById("result");

getDay.addEventListener("click",()=>{
  let date1=new Date(`${date.value} ${month.value} ${year.value}`);
  let day=date1.toString();
  day=day.slice(0,3); // For fetching first 3 characters of days
  result.innerText=day;
});
