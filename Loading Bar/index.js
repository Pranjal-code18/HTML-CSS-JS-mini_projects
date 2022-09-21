const counterEle=document.querySelector(".counter");
const barEle=document.querySelector(".loading-bar-front");

let idx=0;

updateNum()

function updateNum(){
    counterEle.innerText=idx+"%";
    barEle.style.width=idx+"%";
    idx++;
    if(idx<101){
        setTimeout(updateNum,20)
    }
}