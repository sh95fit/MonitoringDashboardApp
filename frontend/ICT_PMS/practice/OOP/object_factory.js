var kim = {
  name:'hoon',
  first:10,
  second:20,
  third:30,
  sum:function(f,s){
    return this.first+this.second+this.third;
  }
}

var lee = {
  name:'ri',
  first:10,
  second:10,
  third:10,
  sum:function(f,s){
    return this.first+this.second+this.third;
  }
}

console.log("kim.sum()", kim.sum())
console.log("lee.sum()", lee.sum())


// 객체를 양산하는 방법
// 항목이 추가 시 자동화 하는 방법

// ex> Date
console.log('Date', Date);

var d1 = new Date('2024-09-19');  // 객체 생성

console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());


function Person(name, first, second,third) {
  this.name=name;
  this.first=first;
  this.second=second;
  this.third=third;
  this.sum=function(){
    return this.first+this.second+this.third;
  }
}

// console.log('Person()', Person()); // Undefiend 발생 (아무 것도 리턴하지 않으므로!)
console.log('new Person()', new Person()); // 객체 생성자

var newkim = new Person('hun', 10, 20, 30);
var newlee = new Person('lee', 10, 10, 10);

console.log("newkim.sum()", newkim.sum())
console.log("newlee.sum()", newlee.sum())