let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#reset-btn");
let winner = document.querySelector(".win");

let turnO = true;
const winPatterns = [
    [0,1,2], //pattern = {0,1,2} pattern[0] = 0,pattern[1] = 1,patter[2] = 2
    [3,4,5], //pattern = {3,4,5} pattern[0] = 3,pattern[1] = 4,patter[2] = 5
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const checkWinner = () => {
    winPatterns.forEach((pattern) =>{
        if(boxes[pattern[0]].innerText!='' && boxes[pattern[0]].innerText == boxes[pattern[1]].innerText && boxes[pattern[1]].innerText == boxes[pattern[2]].innerText){
            let winn = boxes[pattern[0]].innerText;
            winner.innerText = `${winn} is the winner of the game`
        }
    });
};
const evt = (box) => {
    if(turnO){
        box.innerText = 'O';
        turnO=false;
    }else{
        box.innerText = 'X';
        turnO=true;
    }
};  
boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = 'O';
            turnO=false;
            checkWinner();
        }else{
            box.innerText = 'X';
            turnO=true;
            checkWinner();
        }
    });
});
rstBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText='';
    })
    winner.innerText="TIC TAC TOE";
});


