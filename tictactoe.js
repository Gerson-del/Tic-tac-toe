// Tic Tac Toe Game
/*
The game is played on a 3×3 grid.
Two players take turns: X and O.
A player wins if they get three in a row (horizontally, vertically, or diagonally).
If all 9 squares are filled and no one wins, it's a draw.
*/

// implementar un sistema de guardado de partida /scores

let is_winner = false;
let result = document.getElementById("result");
let cells = document.querySelectorAll(".cell");
let board = Array(9).fill("");
let current_player = "X";

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
    [0, 4, 8], [2, 4, 6]  // diagonales
];

cells.forEach(cell => {
    cell.addEventListener("click", clickCell);
});

function switchPlayer() {
    current_player = current_player === "X" ? "O" : "X";
}


function clickCell(event){
    if (is_winner){
        return;
    }
    let clickedCell = event.target;
    
    if (clickedCell.textContent !== ""){
        return;
    }

    clickedCell.textContent = current_player;

    let cellIndex = clickedCell.dataset.index
    board[cellIndex] = current_player;

    // Si current_player == "O" entonces te lo cambia por "X" y si current_player == "X" te lo cambia por "O"
    switchPlayer();
    checkWinner();
    
}

function checkboard(cell1, cell2, cell3) {
    if (board[cell1] && board[cell1] === board[cell2] && board[cell2] === board[cell3]) {
        cells[cell1].style.backgroundColor = "lightblue";
        cells[cell2].style.backgroundColor = "lightblue";
        cells[cell3].style.backgroundColor = "lightblue";
        is_winner = true;
        result.innerHTML = `Player ${board[cell1]} has won!`;

        // Desactivar las celdas para evitar mas input
        cells.forEach(cell => cell.removeEventListener("click", clickCell));
    }
}


function checkWinner(){
    let hasEmptyCells = board.includes("");
    winningCombos.forEach(([a,b,c]) => checkboard(a,b,c));

    if(!is_winner && !hasEmptyCells){
        result.innerHTML = "It's a draw";
    }
}

function reset_game() {
    board.fill(""); //  resetear el board

    cells.forEach((cell, index) => {
        cell.textContent = "";
        cell.style.backgroundColor = "white";
        cell.dataset.index = index; 
        cell.addEventListener("click", clickCell); 
        
    });

    current_player = "X"; // Resetear al jugador
    is_winner = false;
    result.textContent = "Waiting for a winner...";
}

let lst = [1,2,3,4,5,6];

function cuadrado(lst){
    new_lst = [];

    for (let i = 0; i < lst.length; i++){
        new_lst.push(lst[i] * lst[i]);
    }

    return new_lst
}




