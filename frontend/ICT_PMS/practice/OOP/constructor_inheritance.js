function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function() {
  return this.first + this.second;
}

function PersonPlus(name, first, second, third) {
  Person.call(this, name, first, second);  // super과 동일한 기능 수행 (this를 포함하여 적용)  (객체 생성 시 this 객체 전달)
  this.third = third;
}

//PersonPlus.prototype.__proto__ = Person.prototype;

// PersonPlus.prototype= Object.create(Person.prototype);  // kim의 constructor를 Person으로 가리키게 되므로 문제 발생 (PersonPlus의 프로토타입을 덮어써버리는 문제 발생)
PersonPlus.prototype.constructor = PersonPlus; // kim의 constructor를 PersonPlus로 가리키도록 설정 가능

PersonPlus.prototype.avg = function() {
  return (this.first+this.second+this.third)/3;
}

var kim = new PersonPlus('kim', 10, 20, 30);

console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("kim.constructor", kim.constructor);