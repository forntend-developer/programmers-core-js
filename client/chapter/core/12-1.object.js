/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`    /* 문자를 내보내는 것이지만 하이라이팅을 해줘서 보기 편하게 해주는 확장프로그램 */
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = { 
  position: 'fixed',
  ["z-index"]: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
  }

  //authentication 인증
  //authorization 권한



// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uuid:crypto.randomUUID(),
  name:'tiger',
  email:'aaa@gmail.com',
  isSignIn:false,
  Permission:'paid'
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
//console.log(authUser['Permission']);



// 객체의 key만을 모아서 배열로 반환하는 객체의 static method는?

const keys = Object.keys(authUser);

console.log(keys);

function getKeys(obj) {
  let arr = [];
  for(const key in obj) {
    if(Object.hasOwn(obj,key)){
      arr.push(key)
    }
  }
  return arr;
}

getKeys(authUser);



// 객체의 value만을 모아서 배열로 반환하는 객체의 static method는?
const values = Object.values(authUser)

function getValues(obj){

  let arr = [];

  for(const key in obj){
    if(Object.hasOwn(obj,key)){
      arr.push(obj[key])
    }
  }
  return arr;
  
}

getValues(authUser)



// 객체의 key와 value를 하나의 쌍으로 묶어서 새로운 배열을 반환하는 객체의 static method는?

const entries = Object.entries(authUser);

function getEntries(obj) {

  let arr = [];

  for(const key in obj){
    if(Object.hasOwn(obj,key)){
      arr.push([key,obj[key]])
    }
  }
  return arr;

}

getEntries(authUser);





// 제거(remove) vs 삭제(delete)
// 비워두기(공간은 놔둠)  메모리 제거

// authUser.email = null;  - 제거
// delete authUser.email   - 삭제

function removeProperty(obj, key) {

 if(isObject(obj)){   // 완전 정확한 타입 체크

     obj[key] = null;

  } else {
    throw new Error('removeProperty 함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.')
  }
}

removeProperty(authUser, 'email')









// 계산된 프로퍼티 (computed property) - 값을 동적으로 받을때
let calculateProperty = 'phone'; // phone | tel



function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty + '번호']:phone
  }
}


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
  name,   // name: name,
  email,   // email: email,
  authorization,   // authorization: authorization,
  isLogin,   // isLogin:isLogin,
}




// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
console.clear();

// 순서(order)를 바꿀 수 없음. 변수명은 내마음대로
const arr = [10, 100, 1000, 10_000];

const [a1,, a3, a4] = arr;


// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[2];


console.log(a1, a3);


const [first, second] = document.querySelectorAll('span');    //Nodelist -> 유사배열

// const first = span[0]
// const second = span[1]

console.log(first, second);

//console.log(Object.entries(authUser));

for(const [k,v] of Object.entries(authUser)){

// const key = keyValue[0];
// const value = keyValue[1];

  console.log(k, v);
  
}

Object.entries(authUser).forEach(([k,v]) => console.log(k,v));


const mapArray = Object.entries(authUser).map(([_,v]) => v);  //   _로 들어가면 사용하지 않겠다는 암묵적 뜻


console.log(mapArray);






const arrow = _ => {}






/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

console.clear();


// 객체의 구조분해 할당은 순서가 필요 없다
// 별칭(alias) 설정이 가능하다

const salaries = {
  정소영: 400,
  황유정: 80,
  김아현: 130,
}

// const 정 = salaries.정소영;
// const 황 = salaries.황유정;
// const 김 = salaries.김아현;

const {정소영:정, 황유정:황, ...나머지} = salaries;

//console.log(정, 황, 김, 변);

//console.log(나머지);


const {log:g} = console;
g('aa')



const data = {
  name:'심선범',
  age:35,
  address:'별내',
  phone:'010-0000-0000',
  job:'강사',
}

function createUserObject({
  name, 
  age:_age = 30, 
  address = '서울시', 
  phone = '010-0000-0000', 
  job, 
  ...rest
} = {}) {

  //const {name, age, address, phone, job} = obj;

  const age = 50;
  // const name = obj.name;
  // const age = obj.age;
  // const address = obj.address;
  
  return {
    name,
    age:_age,
    address,
    phone,
    job,
    ...rest
  }
}

const user = createUserObject(data);

console.log(user);
