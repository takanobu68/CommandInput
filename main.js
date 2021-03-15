const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");
const command = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
window.addEventListener("keydown", (e) => {
  command.push(e.keyCode);
  if (command.length === 10) {
    if (command.toString() === konami.toString()) {
      quesBoard();
    } else {
      alert("不正解");
      command = [];
    }
  }
});

function quesBoard() {
  const board = document.createElement("div");
  board.innerHTML = `
	<div class="test">
		<button class="btn" onclick="re()">TEST</button>
	</div>
	`;
  body.appendChild(board);
}

function re() {
  const test = document.querySelector(".test");
  anime({
    targets: test,
    scale: 0,
    rotate: "720deg",
    duration: 3000,
    complete: function () {
      test.remove();
    },
  });
}
