const btn=document.querySelectorAll(".btn");
const inputEle=document.querySelector("input");

let string="";
Array.from(btn).forEach((button)=>{
   button.addEventListener("click",(e)=>{
    if(e.target.innerText=="="){
        let result=eval(string);
        inputEle.value=result;
    }
    else if(e.target.innerText=="C"){
        string="";
        inputEle.value=string;
        
    }
    else{
        string += e.target.innerText;
        inputEle.value=string;
    }
   })
});
