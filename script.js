const bird = document.getElementById("bird");
const pipe = document.getElementById("pipe");
const gap = document.getElementById("gap");
const scoreDisplay = document.getElementById("score");

let birdTop = 250;
let gravity = 2;
let pipeLeft = 500;
let gapTop = Math.random() * 200 + 100;
let score = 0;

function startGame() {
  // Gravity effect
  birdTop += gravity;
  bird.style.top = birdTop + "px";

  // Move pipe and gap
  pipeLeft -= 2;
  if (pipeLeft < -50) {
    pipeLeft = 500;
    gapTop = Math.random() * 200 + 100;
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }

  pipe.style.left = pipeLeft + "px";
  gap.style.left = pipeLeft + "px";
  gap.style.top = gapTop + "px";

  // Collision detection
  if (
    birdTop < 0 || 
    birdTop > 570 || 
    (pipeLeft < 80 && pipeLeft > 30 && (birdTop < gapTop || birdTop > gapTop + 150))
  ) {
    alert(`Game Over! Final Score: ${score}`);
    location.reload();
  }

  requestAnimationFrame(startGame);
}

// Bird jump
window.addEventListener("click", () => (birdTop -= 40));
window.addEventListener("keydown", () => (birdTop -= 40));

// Start the game
startGame();
