console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";//initializing first turn value X
//function to change the turn
let isgameover = false;
const changeTurn = () => {
    return turn === "X" ? "0" : "X";

}

//function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

        }
    })

}
//Game logic
var boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    var boxtext = element.querySelector('.boxtext');//box->element(span)->boxtext class-target
    element.addEventListener('click', abc)
    function abc() {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;//if every box text is empty put X on first click and then change turn function
            turn = changeTurn();
            audioturn.play();//on click  audio will play
            checkWin();//on every click we will check for winner if someone won or not
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;//info value will change X,0 on alternate click
            }
        }
    }
})
//reset
var reset = document.getElementById("reset");
reset.addEventListener("click", xyz)
function xyz() {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
turn= "X";
isgameover=false;
document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
}
