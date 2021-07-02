// 운영 체제의 정보를 가져온다.

const os = require("os");

console.log("운영체제 정보 -----------");
console.log("os.arch():", os.arch());
console.log("os.platform()", os.platform());
console.log("os.type():", os.type());
console.log("os.uptime():", os.uptime());
console.log("os.hostname():", os.hostname());
console.log("os.realease():", os.release());

console.log("경로----------------------");
console.log("os.homedir():", os.homedir());
console.log("os.tmpdir():", os.tmpdir());

console.log("cpu 정보------------------");
console.log("os.cpus():", os.cpus());
console.log("os.cpus().length:", os.cpus().length);

console.log("메모리 정보-----------------");
console.log("os.freemem():", os.freemem()); // 사용 가능한 메모리
console.log("os.totalmem():", os.totalmem()); // 전체 메모리 용량
