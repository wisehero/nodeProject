// 1. 사용자가 원하는 폴더의 이름을 받아온다.

// 3. 그 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4, mov는 video로 png|aae, IMG_1234 (IMG_E1234)

const fs = require("fs");
const path = require("path");
const os = require("os");
console.log(process.argv);

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), "Pictures", folder);
// folder와 working directory가 존재하지 않는다면
if (!folder || fs.existsSync(workingDir)) {
  console.error("Please enter folder name in pictures");
  return;
}

// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.

const videoDir = path.join(workingDir, "video");
const capturedDir = path.join(workingDir, "captured");
const duplicatedDir = path.join(workingDir, "duplicated");

!fs.existsSync(videoDir).fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir).fs.mkdirSync(capturedDir);
!fs.existsSync(duplicated).fs.mkdirSync(duplicatedDir);

// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png|aae, IMG_1234 (IMG_E1234)

fs.promises(workingDir)
  .readdir(workingDir)
  .then(processFiles)
  .catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, capturedDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isDuplicatedFile(files, file) {
  // IMG_XXXX -> IMG_EXXX
  if (!file.startsWith("IMG_") || file.startsWith("img_E")) {
    return false;
  }

  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.info(`move ${file} to ${path.basename(targetDir)}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises.rename(oldPath, newPath).catch(console.error);
}
