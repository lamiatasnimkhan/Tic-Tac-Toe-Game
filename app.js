let boxes= document.querySelectorAll(".box");
let resetGameBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",() =>
    {
       // console.log("clicked");
        if(turnO){
            box.textContent= "O";
            turnO=false;
        }else{
            box.textContent= "X";
            turnO=true;
        }
        box.disabled= true;
        callWinner();
    });
});

const disableBoxes=()=>
{
    for (let box of boxes){
        box.disabled=true;
    }
}

const showWinner = (winner) => {
    msg.textContent = "CONGRATULATIONS, WINNER IS " + winner + "!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const callWinner = () => {
    for (let pattern of winPatterns) {
        let p = boxes[pattern[0]].textContent;
        let q = boxes[pattern[1]].textContent;
        let r = boxes[pattern[2]].textContent;
        if (p != "" && q != "" && r != "") {
            if (p === q && q === r) {
               // console.log("WINNER!", p);
                showWinner(p);
            }
        }
    }
};


const resetGame=()=>{
    turnO=true;
    for (let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
    msgContainer.classList.add("hide");

};
newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);