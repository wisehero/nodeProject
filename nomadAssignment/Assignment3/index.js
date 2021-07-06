let range = document.querySelector("#range");
let guessNumber = document.querySelector("#guess");
let userChose = document.querySelector("#userChose");
let machineChose = document.querySelector("#machineChose");
const play = document.querySelector("button");
const result = document.querySelector("#result");
const result2 = document.querySelector("#result2");

result.style.display = "none";
play.addEventListener("click", showResult);
//
function makeRandomNumber() {
  return Math.floor(Math.random() * (parseInt(range.value) + 1));
}

function showResult() {
  result.style.display = "block";
  let machineChoseNumber = makeRandomNumber();
  if (guessNumber.value === undefined) {
    alert("choose number fisrt");
    return;
  } else {
    if (parseInt(guessNumber.value) === machineChoseNumber) {
      userChose.innerText = guessNumber.value;
      machineChose.innerText = machineChoseNumber;
      result2.innerText = "You Won!";
    } else {
      // 사용자가 선택한 숫자와 랜덤넘버가 다르면 you lost를 출력
      userChose.innerText = guessNumber.value;
      machineChose.innerText = machineChoseNumber;
      result2.innerText = "You Lost!";
    }
  }
}
