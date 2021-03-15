const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");
const command = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
window.addEventListener("keydown", (e) => {
  // e.key;
  command.push(e.keyCode); // console.log("e.keyCode: ", e.keyCode);
  // console.log("e.key: ", e.key);
  console.log(command);
  if (command.length === 10) {
    if (command.toString() === konami.toString()) {
      // alert("成功");
      quesBoard();
      // ここに下の要素を書き換える関数を作る
      // 10megaサイトの応用
    } else {
      alert("不正解");
      command = [];
    }
  }
});

// const test1 = [1];
// const test2 = [1];

// console.log(test1.toString() === test2.toString());

function quesBoard() {
  const board = document.createElement("div");
  // board.classList.add("test");
  board.innerHTML = `
	<div class="test">
		<button class="btn" onclick="re()">TEST</button>
	</div>
	`;
  body.appendChild(board);
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(true);
  });
});

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
