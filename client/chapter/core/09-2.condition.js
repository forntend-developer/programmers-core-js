/* eslint-disable no-constant-binary-expression */
/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB; a && b 
console.log(AandB);

// Logical AND Assignment 논리곱할당연산
a &&= b   // a = a && b
console.log(a);



// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// a ||=b

// 부정 연산자
let reverseValue = value;
console.log(reverseValue);


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};  // {thisIsFalsy:false}

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsFalsy:false}; // [2,3].length => 2


console.clear();


function logIn() {

  // 만약에 loginID가 null이면 아래 코드 실행하지 마
  // if(loginID === null || loginID === undefined) return;
  if(!loginID) return;

  let loginID = prompt("who's there?");
  let loginPw = prompt("password?");
  // console.log(loginID);

  if(loginID.toLowerCase() == 'admin') {
    if(loginPw.toUpperCase()== 'THEMASTER') {
      console.log('Welcome!');
    } else if(loginPw == null) {
      console.log('Canceld');
    }
    else {
      console.log('Wrong password');
    }
  } 
  else if(loginID == null || loginID.replace(/\s*/g,'') === ''){     // 정규표현식 /\s -> 공백  * -> 공백 여러개 전부 다  /g -> 전역에서 
    console.log('Canceld');
  }
  else {
    console.log("I don't know you");
  }
}




//  const userName = prompt('누구십니까?');

//  if(userName === 'Admin') {
//   console.log('로그인 성공');
  
//  }