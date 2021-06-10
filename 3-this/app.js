function hello() {
  console.log(this);
  console.log(this == global);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("-------class------");
    console.log(this); // 클래스 자기 자신
    console.log(this === global);
  }
}
sdfdsfsdf;

const a = new A(1);
a.memberFunction();

console.log("---global scope---");
console.log(this);
console.log(this === module.exports);
