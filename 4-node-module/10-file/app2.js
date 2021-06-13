const fs = require("fs").promises;

// reading a file
fs.readFile("./text.txt", "utf8") //
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file 파일쓰기
fs.writeFile("./file.txt", "Hello, Dream Coders! :) ") //
  .catch(console.error);

fs.appendFile("./file.txt", "Yo!, Dream Coders! :) ") //
  .catch(console.error);

// copy 내용 복사
fs.copyFile("./file.txt", "./file2.txt") //
  .catch(console.error);

// folder 만들기
fs.mkdir("sub-folder") //
  .catch(console.error);

// 파일 읽어오기
fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
