const num1 = Math.ceil(Math.random()*10);
const num2= Math.ceil(Math.random()*10);

const questionEle =document.getElementById("question");
const inputEle=document.getElementById("input");
const formEle=document.getElementById("form");
const scoreEle=document.getElementById("score");
let score= JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEle.innerText=`score: ${score}`;

questionEle.innerText=`What is ${num1} multiply by ${num2}?`;

const correctAnswer= num1*num2;

formEle.addEventListener("submit",()=>{
  const userAns= +inputEle.value  // convert to number by using +
  if(userAns===correctAnswer){
      score++;
      updateLocalStorage();
  }
  else{
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score)) // convert it into string 
}