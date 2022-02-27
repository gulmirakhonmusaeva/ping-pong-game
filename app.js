let play1 = document.querySelector(".play1"),
  play2 = document.querySelector(".play2"),
  player1 = document.querySelector(".player1"),
  player2 = document.querySelector(".player2"),
  refresh = document.querySelector(".refresh"),
  select = document.querySelector("select"),
  modal = document.querySelector(".modal"),
  overlay = document.querySelector(".overlay"),
  close = document.querySelector(".close");

let score1 = 0;
let score2 = 0;

let winnerScore = +select.value;
console.log(winnerScore);

let gameOver = false;

function runModal() {
  if (gameOver) {
    modalFunc();
  }
}

player1.addEventListener("click", () => {
  if (!gameOver) {
    score1++;

    if (score1 === winnerScore) {
      gameOver = true;
      play1.classList.add(`winner`);
      play2.classList.add(`loser`);
    }
  }

  play1.textContent = score1;
  runModal();
  console.log(score1);
});

player2.addEventListener("click", () => {
  if (!gameOver) {
    score2++;
    if (score2 === winnerScore) {
      gameOver = true;
      play1.classList.add(`loser`);
      play2.classList.add(`winner`);
    }
  }
  play2.textContent = score2;
  runModal();
  console.log(score2);
});

select.addEventListener("change", (e) => {
  Allrefresh();
});

function modalFunc() {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
}

close.addEventListener("click", () => {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
});

refresh.addEventListener("click", Allrefresh);

function Allrefresh() {
  play1.classList.remove(`loser`, `winner`);
  play2.classList.remove(`loser`, `winner`);
  score1 = 0;
  score2 = 0;
  play1.innerText = `0`;
  play2.innerText = `0`;
  winnerScore = +select.value;
  gameOver = false;
}
