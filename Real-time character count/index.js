const textAreaEle=document.getElementById("textarea");
const total_counterele=document.getElementById("total-counter");
const remaining_counterEle=document.getElementById("remaining-counter");

textAreaEle.addEventListener("keyup",()=>{
    updateCounter();
});

function updateCounter(){
    total_counterele.innerText= textAreaEle.value.length;
    remaining_counterEle.innerText=textAreaEle.getAttribute("maxLength")-textAreaEle.value.length;  
}