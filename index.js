let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let result = document.getElementById("resultText");
let choiceBtns = document.querySelectorAll(".choiceBtns")
let winner 
let player;
let computer;
window.confirm("Let's play Rock Paper Scissors with compter!!")

choiceBtns.forEach(choiceBtn=>{
    choiceBtn.addEventListener("click",() => {
        if (choiceBtn.textContent == "👊"){
            player = "Rock"+"👊"
        }
        else if(choiceBtn.textContent == "🖐"){
            player = "Paper"+"🖐"
        }
        else if (choiceBtn.textContent =="✌") {
            player = "Scissors"+"✌"
        }
        playerText.textContent = "Player :"+player
        computerGame();
        computerText.textContent = `Computer : ${computer}`
        gameResult()
        result.textContent = winner
        checkWinner()
               
    })
    
    
})

function computerGame(){
    let randomBtn = Math.floor((Math.random()*3) + 1)
    switch(randomBtn){
        case 1 :
            computer = "Rock"+"👊"
            break;
        case 2:
            computer = "Paper"+"🖐"
            break
        case 3:
            computer = "Scissors"+"✌"
            break
        default:
            break    
    }
}
function gameResult(){
    if (computer==player){
        winner = "Draw!"
    }
    else if (computer == "Rock"+"👊" && player=="Paper"+"🖐") {
        winner = "Yay you won!"
    }
    else if (computer == "Paper" +"🖐"&& player=="Scissors"+"✌") {
        winner = "Yay you won!"
    }
    else if (computer == "Scissors"+"✌" && player=="Rock"+"👊") {
        winner =  "Yay you won!"
    }
    else {
        winner = "you loose"
    }
   
}

function checkWinner(){
    if (winner == "Yay you won!" ){
        return result.style.color = "green"
    }
    else if (winner == "you loose" ){
        return result.style.color = "red"
    }
    else if (winner == "Draw!"){
        return result.style.color = "blue"
    }
}

