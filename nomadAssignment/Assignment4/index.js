const eveCount = document.querySelector("h2");

function Dday() {
  const now = new Date();
  const xmas = new Date(2021, 11, 24);

  const totalSeconds = (xmas - now) / 1000;
  const day = Math.floor((xmas - now) / 1000 / (60 * 60 * 24));
  const hours = String(Math.floor(totalSeconds / 3600 / 24)).padStart(2, "0");
  const minutes = String(Math.floor(totalSeconds / 3600) % 24).padStart(2, "0");
  const second = String(Math.floor(totalSeconds % 60)).padStart(2, "0");
  eveCount.innerText = `${day}d ${hours}h ${minutes}m ${second}s`;
}

setInterval(Dday, 1000);
