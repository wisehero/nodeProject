// level

console.log("log");
console.info("info");
console.warn("warn");
console.error("error");

// assert

console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = { name: "wisehero", age: 26, company: { name: "naver" } };
console.log(student);
console.table(student);
console.dir(student, { showhidden: true, colors: false, depth: 2 });
