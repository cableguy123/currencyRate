// 단독 this는 global object를 가리킵니다
// 함수안에서 쓴 this는? (2)
function myFunction() {
  return this; // 함수안에서 썼기에 Window 처리
}
console.log(myFunction()); //Window

var num = 0;
function addNum() {
  this.num = 100; // window.num num,window도 전역변수
  num++;
  
  console.log(num); // 101
  console.log(window.num); // 101
  console.log(num === window.num); // true
}
 
addNum();
// 메서드안에서 쓴 this
	
var person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }, // 해당 메서드를 호출한 객체(person) 
};
 
person.fullName(); //"John Doe"

// 이벤트핸들러안 this
var btn = document.querySelector('#btn')
btn.addEventListener('click', function () {
  console.log(this); //#btn // 이벤트를 받는 html요소 가리킴
});

// 생성자안에서 쓴 this 
function Person(name) {
  this.name = name; 
}
// 생성자 함수가 생성하는 객체로 this가 바인딩 됩니다.
 
var kim = new Person('kim');
var lee = new Person('lee');
 
console.log(kim.name); //kim
console.log(lee.name); //lee
//명시적 바인딩 this
//apply()에서 매개변수로 받은 첫 번째 값은 함수 내부에서 사용되는 this에 바인딩되고,
//두 번째 값인 배열은 자신을 호출한 함수의 인자로 사용합니다. 
function Player(name, level, job) {
  Character.apply(this, [name, level]);
  this.job = job;
}
// apply()나 call()은 보통 유사배열 객체에게 배열 메서드를 쓰고자 할 때 사용합니다.
function Player(name,level,job) {
  Character.call(this,name,level);
  this.job = job;
}
//
var Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this); // Person {name: "Nana", age: 28}
 
    setTimeout(function () {
      console.log(this); // Window
      console.log(this.name + ' is ' + this.age + ' years old');
    }, 100);
  };
};
var me = new Person('Nana', 28);
 
me.say(); //global is undefined years old
// 여기서 setTimeout(() => ) 화살표함수를 쓰면 ?
/*
var Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this); // Person {name: "Nana", age: 28}
 
    setTimeout(() => {
      console.log(this); // Person {name: "Nana", age: 28} // 이 this는 전역객체로 취급이아님
      console.log(this.name + ' is ' + this.age + ' years old'); 
    }, 100);
  };
};
var me = new Person('Nana', 28); //Nana is 28 years old

*/