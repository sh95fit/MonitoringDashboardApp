// Javascript에서는 객체가 다른 객체로부터 직접적으로 상속 받을 수 있다!
// prototype link : 링크를 통해 상속을 제공하는 객체를 prototype object(~= super object)라 한다
// Javascript에서 전통적인 객체 상속 방법 (클래스 상속과 다르게 객체를 직접 상속 받아 수정이 가능하다!)

var superObj = {superVal: 'super'}

var subObj = {subVal: 'sub'}

// 객체 직접 상속
subObj.__proto__ = superObj;

console.log('subObj.subVar => ', subObj.subVal);
console.log('subObj.superVar => ', subObj.superVal);


// 객체를 수정하는 것으로  prototype이 가리키고 있는 값을 변경하는 것이 아니다!
subObj.superVal = 'sub';
console.log('superObj.superVal => ', superObj.superVal); // 변경 없음!


// Object.create() 를 활용한 객체 상속 (__proto__보다 선호되는 방식)
var subObj1 = Object.create(superObj); // Prototype Link 지정

subObj1.subVal = 'sub';

// debugger; // 자바스크립트 실행을 멈출 수 있다

console.log('subObj1.subVar => ', subObj1.subVal);
console.log('subObj1.superVar => ', subObj1.superVal);


// 객체 직접 상속

var kim = {
  name: "kim",
  first:10, second:20,
  sum: function(){return this.first+this.second}
}

// 방법1. __proto__
// var lee = {
//   name: "lee",
//   first:10, second:10,
//   avg: function(){return (this.first+this.second)/2}
// }
// lee.__proto__ = kim;


// 방법2. Object.create()  // 브라우저 확인 필요
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {
  return (this.first+this.second)/2;
}


console.log('kim.sum() : ', kim.sum());
console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());