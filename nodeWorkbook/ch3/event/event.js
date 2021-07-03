const EventEmitter = require("events");

const myEvent = new EventEmitter();

// on과 동작이 같음
myEvent.addListener("event1", () => {
  console.log("이벤트 1");
});
myEvent.on("event2", () => {
  console.log("이벤트2");
});
myEvent.on("event2", () => {
  console.log("이벤트 2 추가");
});
myEvent.once("event3", () => {
  console.log("이벤트 3");
}); // 한번만 실행됨

myEvent.emit("event1");
myEvent.emit("event2");
myEvent.emit("event3");
myEvent.emit("event3"); // 호출 안됨

myEvent.on("event4", () => {
  console.log("이벤트4");
});
myEvent.removeAllListeners("event4");
myEvent.emit("event4"); // 실행안됨

const listener = () => {
  console.log("이벤트5");
};
myEvent.on("event", listener);
myEvent.removeListener("event5", listener);
myEvent.emit("event5");

console.log(myEvent.listenerCount("event2"));

// addListener
// on
// emit
// removeListener
// removeAllListeners
// listenerCount
