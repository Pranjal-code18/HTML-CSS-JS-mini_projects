const containerEle=document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEle=document.createElement("div");
    colorContainerEle.classList.add("color-container");
    containerEle.appendChild(colorContainerEle);
    
}

const colorContainerEle = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerEle.forEach((colorContainerEl)=>{
        const newColorCode=randomColor();
        colorContainerEl.style.backgroundColor="#" + newColorCode;
        colorContainerEl.innerText="#"+newColorCode;
    });
}

function randomColor(){
    const chars="0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum=Math.floor(Math.random()*chars.length)
        colorCode+=chars.substring(randomNum,randomNum+1);
    }
    return colorCode;
}