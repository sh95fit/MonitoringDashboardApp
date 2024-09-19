function Person(name, first, second,third) {
  this.name=name;
  this.first=first;
  this.second=second;
  this.third=third;
  this.sum=function(){
    return this.first+this.second+this.third;  // 메모리 낭비 요인 (객체 생성 시 마다 해당 함수도 생성되므로)
  }
}

// console.log('Person()', Person()); // Undefiend 발생 (아무 것도 리턴하지 않으므로!)
console.log('new Person()', new Person()); // 객체 생성자

var newkim = new Person('hun', 10, 20, 30);
newkim.sum = function() {
  return 'modified : ' + (this.first, this.second);
}

var newlee = new Person('lee', 10, 10, 10);

console.log("newkim.sum()", newkim.sum())
console.log("newlee.sum()", newlee.sum())


// 매서드를 공통으로 지정하여 사용할 수 있도록 하여 메모리 낭비를 줄이는 방법 : Prototype
function Human(name, first, second, third) {
  this.name=name;
  this.first=first;
  this.second=second;
}

Human.prototype.sum= function(){
  return 'prototype' + (this.first+this.second);
}

var prokim = new Human('hun', 10, 30);
var prolee = new Human('ri', 10, 20);

console.log('prokim.sum()', prokim.sum());
console.log('prolee.sum()', prolee.sum());