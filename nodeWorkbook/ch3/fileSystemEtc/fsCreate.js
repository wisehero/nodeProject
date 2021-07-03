const fs = require("fs").promises;
const constants = require("fs").constants;

// 폴더나 파일에 접근할 수 있는지 체크
fs.access("./folder", constants.F_OK, constants.W_OK, constants.R_OK)
  .then(() => {
    return Promise.reject("이미 폴더 있음");
  })
  .catch((err) => {
    // 파일/폴더나 권한이 없다면 에러가 발생하는데 파일/폴더가 없을 때의 에러 코드는 ENOENT
    if (err.code == "ENOENT") {
      console.log("폴더 없음");
      return fs.mkdir("./folder"); // 폴더 생성
    }
    return Promise.reject(err);
  })
  .then(() => {
    console.log("폴더 만들기 성공");
    return fs.open("./folder/file.js", "w"); // fd값을 가져오는 메서드
  })
  .then((fd) => {
    console.log("빈 파일 만들기 성공", fd);
    fs.rename("./folder/file.js", "./folder/newfile.js");
  })
  .then(() => {
    console.log("이름 바꾸기 성공");
  })
  .catch((err) => {
    console.log(err);
  });
