let icons = document.querySelectorAll(".irps");
let rstBtn = document.querySelector("#rst-btn");
let my_score = document.querySelector("#my_score");
let comp_score = document.querySelector("#opp_score");
let statement = document.querySelector("h1");
let yours_score = 0;
let opp_score = 0;
let n = 0;
const checkWinner = (y,c) =>{
    switch(y){
        case 0:
            if(c == 0){
                statement.innerText = "It's a Draw!";
                statement.style.color = "blue";
            }else if(c == 1){
                statement.innerText = "Paper beats Your Rock";
                statement.style.color = "red";
                opp_score++;
            }else{
                statement.innerText = "Your Rock beats Scissor";
                statement.style.color = "green";
                yours_score++;
            }
            my_score.innerText=yours_score;
            comp_score.innerText=opp_score;
            break;
        case 1:
            console.log("Your opponent choosen",c)
            if(c == 1){
                statement.innerText = "It's a Draw!";
                statement.style.color = "blue";
            }else if(c == 2){
                statement.innerText = "Scissors beats Your Paper";
                statement.style.color = "red";
                opp_score++;
            }else{
                statement.innerText = "Your Paper beats Rock";
                statement.style.color = "green";
                yours_score++;
            }
            my_score.innerText=yours_score;
            comp_score.innerText=opp_score;
            break;
        case 2:
            if(c == 2){
                statement.innerText = "It's a Draw!";
                statement.style.color = "blue";
            }else if(c == 1){
                statement.innerText = "Your Scissors beats Paper";
                statement.style.color = "green";
                yours_score++;
            }else{
                statement.innerText = "Rock beats Your Scissor";
                statement.style.color= "red";
                opp_score++;
            }
            my_score.innerText=yours_score;
            comp_score.innerText=opp_score;
    }
    n++;
    if(n == 20){
        if(yours_score < opp_score){
            alert("You lost, Better luck next time!");
        }else{
            alert("Hurray, You Won ;)");
        }
    }
};
icons.forEach((icon,index)=>{
    icon.addEventListener("click",()=>{
        if(n > 20) return;
        let random = Math.floor(Math.random() * 3);
        checkWinner(index,random);
    });
});
rstBtn.addEventListener("click",()=>{
    yours_score = 0;
    opp_score = 0;
    n = 0;
    my_score.innerText = 0;
    comp_score.innerText = 0;
    statement.innerText = "Play Again!!"
    statement.style.color = "blue";
});
