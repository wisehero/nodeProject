const path = require("path");

const string = __filename;

console.log("path.sep:", path.sep);
console.log("path.delimiter:", path.delimiter);
console.log("-------------------------------");
console.log("path.dirname():", path.dirname(string));
console.log("path.extname():", path.extname(string));
console.log("path.basename():", path.basename(string));
console.log(
  "path.basename - extname:",
  path.basename(string, path.extname(string))
);
console.log("--------------------------------");
console.log("path.parse():", path.parse(string));
console.log(
  "path.format():",
  path.format({
    dir: "/Users/wisehero/Desktop/study/nodeProject/nodeWorkbook/ch3",
    name: "path",
    ext: ".js",
  })
);
console.log(
  "path.normalize():",
  path.normalize(
    "/Users///////wisehero/Desktop/study/nodeProject/nodeWorkbook/ch3"
  )
);
console.log("---------------------------------");
console.log("path.isAbosolute()");
console.log("path.relative()");
console.log();
console.log();
console.log();
console.log();
