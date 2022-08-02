let player = "X"
let mensagem = document.getElementById("status")
let statusMsg = mensagem.textContent = "É a vez de X!"
let isAlive = false
let venceu = false
let gameState = ["","","",
                 "","","",
                 "","",""]
                 
function startGame(){
    isAlive = true
    venceu = false
}

startGame()

function selecionar(id) {
    const botao = document.getElementById(`${id}`)
    if(botao.innerHTML === "-" && venceu === false){
        let idInt = parseInt(id)
        gameState[idInt] = player
        verificar()
        console.log(isAlive)
        console.log(venceu)
        
        botao.innerHTML = player
        let playerAnterior = player
        player = player === "X" ? "O" : "X";
        statusMsg = mensagem.textContent = "É a vez de " + player + "!"

        if(isAlive === false && venceu === true){
            statusMsg = mensagem.textContent = playerAnterior + " venceu!"
        }
        else if(isAlive === false && venceu === false){
            statusMsg = mensagem.textContent = "Empate! Deu Velha."
        }
    }            
}

function verificar(){
    if(
    gameState[0] === "X" && gameState[1] === "X" && gameState[2] === "X" || 
    gameState[3] === "X" && gameState[4] === "X" && gameState[5] === "X" || 
    gameState[6] === "X" && gameState[7] === "X" && gameState[8] === "X" ||
    gameState[2] === "X" && gameState[4] === "X" && gameState[6] === "X" ||
    gameState[0] === "X" && gameState[4] === "X" && gameState[8] === "X" ||
    gameState[0] === "X" && gameState[3] === "X" && gameState[6] === "X" ||
    gameState[1] === "X" && gameState[4] === "X" && gameState[7] === "X" ||
    gameState[2] === "X" && gameState[5] === "X" && gameState[8] === "X"
    ){
        console.log("X venceu")
        isAlive = false
        venceu = true
    }
    else if(
    gameState[0] === "O" && gameState[1] === "O" && gameState[2] === "O" || 
    gameState[3] === "O" && gameState[4] === "O" && gameState[5] === "O" || 
    gameState[6] === "O" && gameState[7] === "O" && gameState[8] === "O" ||
    gameState[2] === "O" && gameState[4] === "O" && gameState[6] === "O" ||
    gameState[0] === "O" && gameState[4] === "O" && gameState[8] === "O" ||
    gameState[0] === "O" && gameState[3] === "O" && gameState[6] === "O" ||
    gameState[1] === "O" && gameState[4] === "O" && gameState[7] === "O" ||
    gameState[2] === "O" && gameState[5] === "O" && gameState[8] === "O"
    ){
        console.log("O venceu")
        isAlive = false
        venceu = true
    }
    else{
        let contagem = 0
        for(i in gameState){
            if (gameState[i] === "X" || gameState[i] === "O")
            contagem += 1
        }
       if (contagem === 9){
           isAlive = false
           venceu = false
       }
    }
}

function restartGame(){
    gameState = ["","","",
                 "","","",
                 "","",""]
    document.querySelectorAll('.cell').forEach(button => button.innerHTML = "-");
    player = "X"             
    startGame()
    statusMsg = mensagem.textContent = "É a vez de " + player + "!"
}
