// constructor 대신 class를 이용한 객체 생성

class Person {
  constructor(name, first, second) {
    console.log('constructor')
    this.name = name;
    this.first = first;
    this.second = second;
  } // 객체가 생성되는 과정에서 객체 생성 전 constructor 실행
  sum() {
    return 'prototype : ' + (this.first+this.second);
  }
  // avg() {
  //   return (this.first+this.second)/2;
  // }
}

var newkim = new Person('hun', 10, 20);
newkim.sum = function() {
  return 'modified : ' + (this.first+this.second);
}

var newlee = new Person('lee', 10, 10);

console.log("newkim.sum()", newkim.sum())
console.log("newlee.sum()", newlee.sum())


// 상속을 사용하여 매서드 수정 및 추가
class PersonPlus extends Person {
  avg() {
    return (this.first+this.second)/2;
  }
}

var newkim = new PersonPlus('hun', 10, 20);
var newlee = new PersonPlus('lee', 10, 10);

console.log("newkim.sum()", newkim.sum())
console.log("newkim.avg()", newkim.avg())
console.log("newlee.sum()", newlee.sum())
console.log("newlee.avg()", newlee.avg())


// 자식 클래스(상속)와 부모 클래스 간의 관계 (super)
// 인자를 추가하고 싶은 경우
class PersonDouble extends PersonPlus {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }
  sum() {
    return 'prototype : ' + (this.first+this.second+this.third);
  }
  avg() {
    return (this.first+this.second+this.third)/3;
  }
}

var newkim = new PersonDouble('hun', 10, 20, 30);
var newlee = new PersonDouble('lee', 10, 10, 10);

console.log("newkim.sum()", newkim.sum())
console.log("newkim.avg()", newkim.avg())
console.log("newlee.sum()", newlee.sum())
console.log("newlee.avg()", newlee.avg())