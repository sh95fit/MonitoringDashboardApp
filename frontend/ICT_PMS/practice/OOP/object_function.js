var kim = {name: "kim", first:10, second:20}
var lee = {name: "lee", first:10, second:10}

function sum() {
  return this.first+this.second;
}

// sum.call(kim);  // sum(); 과 동일  (자바스크립트에서는 함수도 객체이다!)

// call을 통해 call 함수 실행 시마다 context값(this 값)을 변경

console.log("sum.call(kim) : ", sum.call(kim));
console.log("sum.call(lee) : ", sum.call(lee));


// 파라미터가 있는 경우
function sum1(prefix) {
  return prefix+(this.first+this.second);
}

console.log("sum1.call(kim) : ", sum1.call(kim, '=> ')); // apply와 유사
console.log("sum1.call(lee) : ", sum1.call(lee, ': '));


// bind : 동일함 함수에 내부 값을 kim 인자로 하는 새로운 함수 생성
// 함수에 직접적인 영향 X 새로운 함수 생성 (Context 값을 영구적으로 변경)
var kimSum = sum1.bind(kim, '>> ');

console.log('kimSum()', kimSum());



// ** 자바스크립트에서 함수는 객체이다!
// function 함수명() {}  ==  var 함수명 = new Function();
// 함수가 객체이기 때문에 속성(프로퍼티)를 가질 수 있다!
// 함수 객체와 함수의 프로토타입 객체가 같이 생성된다!
// 함수는 prototype이라는 속성을 통해 프로토타입 객체를 가리킨다
// 함수의 프로토타입 객체는 constructor라는 속성을 통해 함수 객체를 가리킨다
// 추가 객체 생성 시 __proto__를 통해 함수의 프로토타입 객체를 가리킨다
