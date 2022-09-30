const containerEle=document.querySelector(".container");

const careers=["Programmer", "Full Stack developer" , "Salesforce developer"];

let ind=0;
let characterInd=0;
updateText();



function updateText(){
    characterInd++;
    containerEle.innerHTML=`<h1> I am a ${careers[ind].slice(0,characterInd)}</h1>`;
    if(characterInd === careers[ind].length){
         ind++;
         characterInd=0;
        }
        if(ind===careers.length){
            ind=0;
        }
    setTimeout(updateText,400);
}

