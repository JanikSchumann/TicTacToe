const fields = document.getElementsByClassName("field");
const currentPlayer = document.getElementById("currentPlayer");
var player = 1;

for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener("click", function () {
    if (player == 1) {
      if (
        !fields[i].classList.contains("O") &&
        !fields[i].classList.contains("X")
      ) {
        fields[i].classList.add("X");
        player = 2;
        currentPlayer.innerHTML = "It's <strong>player 2</strong> 's turn.";
        currentPlayer.className = "player2";
        setTimeout(checkForWin, 50, "X");
      }
    } else {
      if (
        !fields[i].classList.contains("X") &&
        !fields[i].classList.contains("O")
      ) {
        fields[i].classList.add("O");
        player = 1;
        currentPlayer.innerHTML = "It's <strong>player 1</strong> 's turn.";
        currentPlayer.className = "player1";
        setTimeout(checkForWin, 50, "O");
      }
    }
    setTimeout(checkForDraw, 50);
  });
}

function checkForWin(character) {
  if (
    (fields[0].classList.contains(character) &&
      fields[1].classList.contains(character) &&
      fields[2].classList.contains(character)) ||
    (fields[3].classList.contains(character) &&
      fields[4].classList.contains(character) &&
      fields[5].classList.contains(character)) ||
    (fields[6].classList.contains(character) &&
      fields[7].classList.contains(character) &&
      fields[8].classList.contains(character)) ||
    (fields[0].classList.contains(character) &&
      fields[4].classList.contains(character) &&
      fields[8].classList.contains(character)) ||
    (fields[2].classList.contains(character) &&
      fields[4].classList.contains(character) &&
      fields[6].classList.contains(character)) ||
    (fields[0].classList.contains(character) &&
      fields[3].classList.contains(character) &&
      fields[6].classList.contains(character)) ||
    (fields[1].classList.contains(character) &&
      fields[4].classList.contains(character) &&
      fields[7].classList.contains(character)) ||
    (fields[2].classList.contains(character) &&
      fields[5].classList.contains(character) &&
      fields[8].classList.contains(character))
  ) {
    if (character === "X") {
      alert("Player 1 wins!"); 
    } else {
      alert("Player 2 wins!"); 
    }
    clearBoard();
  }
}

function checkForDraw() {
  var drawCounter = 0;
  for (let i = 0; i < fields.length; i++) {
    if (
      fields[i].classList.contains("X") ||
      fields[i].classList.contains("O")
    ) {
      drawCounter += 1;
    }
  }
  if (drawCounter === 9) {
    alert("Its a draw!");
    clearBoard();
  }
}

function clearBoard() {
  for (let i = 0; i < fields.length; i++) {
    fields[i].classList.remove("X", "O");
  }
  currentPlayer.innerHTML = "It's <strong>player 1</strong> 's turn.";
  currentPlayer.className = "player1";
  player = 1;
}
