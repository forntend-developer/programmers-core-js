/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);


// 2. 값이 할당되지 않은 상태
let undefind;
console.log(undefind);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "tiger";   // string literal
const single = 'hello';
const backtick = `hello ${double + 10}`;

console.log(backtick);

console.clear();

const str = new String('hello');  // 문자 생성자 함수 (constructor function)  -> new 라는 키워드가 붙어야함  / 알려주려고 설명함 이렇게 쓰면 안됨

console.log(str);


//console.log(single); // 위 아래가 똑같음
//console.log(str);   // str을 객체로 만들었음 객체에 접근하는 방법은 --> str.toupperCase()


// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;   // 넘버 리터럴(= 값)
const floatingPointNumber = 1.23; 
//console.log(typeof integer);

const num = new Number(20.23); // 숫자 생성자 함수 / 알려주려고 설명함 이렇게 쓰면 안됨
console.log(num);


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;

console.log(typeof bigInt);


// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;
// const has.........
//console.log(typeof isActive);

const bool =  new Boolean(false);

console.log(bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const _obj = {};
console.log(typeof _obj);

const newObj = new Object({});
console.log(newObj)


// 8. 고유한 식별자(unique identifier)
const uuid1 = Symbol("aaa");
const uuid2 = Symbol("aaa");

console.log(uuid1 === uuid2);


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류


// 일반함수 일때 -> this : 나를 호출한 대상
// 화살표 함수 (arrow function) : this를 바인딩하지 않습니다. (상위 컨텍스트(환경)에서 this를 찾습니다.)
//console.log(this)



// Object
console.clear() ;

/* 
  1: normal function method (일반 함수)
  2: arrow function method (화살표 함수) --> 객체의 메소드로 잘 사용하지 않음
  3: concise method(간결한) --> 객체에서 메소드를 정의할때 이렇게 많이 씀!!!  
*/

const obj = {
  //key(문자가 와야함):value
  name: 'tiger',  //key와 value의 쌍을 property라고 부름
  age: 30,
  sayHi: function(){
    console.log(this)
  }, 
  sayHi2: () => {     // 함수 스코프(함수 실행 환경)
     console.log(this);
  },
  sayHi3(){
    console.log(this);
  }
  
  // console.dir(obj.sayHi) / dir -> 모든 속성을 확인하기 위한 목적으로 사용됩니다.   /  프로퍼티 -> 조상 개념
  
  // sayHi: function(){
  //   console.log('hello~');
  // }   // sayHi 함수는 method라고 부른다(객체 안에 함수를 메소드라 부름)
}

console.log(obj);


// Array   / 배열과 객체의 차이는 순서가 있느냐 없느냐 

const arr = ['a',100,{name:'tiger'},['a','b'],true,()=>{}]

//const _arr = new Array([]); // 배열의 생성자 함수

console.log(arr);
// arr.length => 4
// arr[0] => 'a'


// function

function a() {
  //console.log('a함수가 실행됐습니다.');
  return 'a함수가 실행됐습니다.';
}
//console.log(a());


function 붕어빵틀(재료){
  return `따끈하고 맛있는 ${재료} 맛 붕어빵입니다.`
}

const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');
const 피붕 = 붕어빵틀('피자');
const 와붕 = 붕어빵틀('와사비');

//console.log(피붕);

const f = new Function();
console.log(f);



