// requirement

// 1. 매 달 사진을 백업함. 달 별로 백업
// 2. 사진과 동영상을 개별적으로 구글포토에 업로드함
// 3. 동영상은 video폴더로 가야함
// 4. 캡쳐한 사진은 png, aae로 되어있는데 이것은 caputured폴더로 보내고 싶음
// 5. 원본사진은 백업하고 싶지 않음. 보정된 사진은 E가 붙는데 이것만 백업하고 싶음
// 6. 원본사진은 duplicated

const fs = require("fs"); // file System.
const path = require("path"); // path

const files = fs.readdir("photo", (error, files) => {
  console.log(files);
});

// file extention name
const videoFile = [".mp4", "mov"];
const capturedFile = ["png", "aae"];
const duplicated = [".jpg"];

// videoFile의 확장자를 가진 파일들은 /video 폴더로 가야함

//folder 생성

function makeFolder() {
  if (!fs.existsSync("/video"))
    // mkdir은 콜백을 등록해야함
    fs.mkdir("./photo/video", (err) => {
      console.error;
    });
  if (!fs.existsSync("/video"))
    fs.mkdir("./photo/captured", (err) => {
      console.error;
    });
  if (!fs.existsSync("/video"))
    fs.mkdir("./photo/duplicated", (err) => {
      console.error;
    });
}
// 파일을 이동시키는 함수
function moveFile() {
  for (const file of files) {
    switch (path.extname(file)) {
      case ".mov":
        //
        break;
      case ".mp4":
        break;
      case ".png":
        break;
      case ".jpg":
        // 파일이름에 E가 들어가면 duplicate에 넣지않고
        // 파일이름에 E가 안들어가면 duplicated에 넣는다.
        break;
    }
  }
}
