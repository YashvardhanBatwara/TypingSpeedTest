const url = 'https://api.quotable.io/random'
const sampletxt = document.getElementById('textsample');
const writingArea = document.getElementById('writingarea');
const timer = document.getElementById("timer");


var submitButtonElement = document.getElementById("submitbtn");
function randomtext(){
  return fetch(url)
  .then(response=>response.json())
  .then(data=>data.content)
  
}
async function displaytext(){
  const text1 = await randomtext()
  const text2 = await randomtext()
  const text3 = await randomtext()
  const text4 = await randomtext()
  const text5 = await randomtext()
  sampletxt.innerText = text1 + " " + text2 + " " + text3 + " " + text4 + " " + text5
}
displaytext();
var flag = 1;

function timechange(){
    if(timer.innerText>0){

        timer.innerText = timer.innerText - 1;
    }
    else if(timer.innerText==0&&flag==1){
        var speed = writingArea.value.split(" ").length/(60 - timer.innerText) * 60;
        alert(`Your typing speed is : ${speed} words per minute`);
        console.log(writingArea.value);
        flag = 0;
    }
    
}
function startTimer(){
    if(flag == 1){
        setInterval(timechange,1000)
    }
}

writingArea.addEventListener("focus",startTimer);  

submitButtonElement.addEventListener("click",function(){
    var speed = writingArea.value.split(" ").length/(60 - timer.innerText) * 60;
    alert(`Your typing speed is : ${Math.floor(speed)} words per minute`);
    timer.innerText = 0;
    flag = 0;
});
