const url = require("url");
const queryString = require("querystring");

const parsedUrl = url.parse(
  "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);

const query = queryString.parse(parsedUrl.query);
console.log("querystring.parse():", query);
console.log("querystring.stringify():", queryString.stringify(query));
