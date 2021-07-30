const mongoose = require("mongoose");

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  // 연결 부분
  mongoose.connect(
    "mongodb://이름:비밀번호@localhost:27017/admin",
    {
      dbName: "nodejs",
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.log("몽고디비 연결 에러", error);
      } else {
        console.log("몽고디비 연결 성공");
      }
    }
  );
};

// 에러 발생시 에러 내용을 기록하고 연결 종료 시 재연결을 시도하는 이벤트리스너

mongoose.connection.on("error", (error) => {
  console.error("몽고디비 연결 에러", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다.");
  connect();
});

module.exports = connect;
