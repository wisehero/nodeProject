const bodySize = document.querySelector("body");

function changeColor() {
  if (bodySize.clientWidth > 1500) {
    document.bgColor = "yellow";
  } else if (bodySize.clientWidth > 1000) {
    document.bgColor = "purple";
  } else {
    document.bgColor = "skyblue";
  }
}

window.addEventListener("resize", changeColor);
