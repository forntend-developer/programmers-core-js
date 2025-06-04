/* eslint-disable no-constant-binary-expression */
/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}



// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress



// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
// receivedEmailAddress = emailAddress || 'user@company.io';   
// ||첫 번째 truthy 값을 반환합니다. ??는 첫 번째 정의된(defined) 값을 반환합니다. 차이 구분!!!!  ex) 변수에 임의로 0이나 false를 입력하는 경우도 있으므로 구분



/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '100px';
const isActive = false;

console.log(0 || WIDTH);
console.log(0 ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(isActive || WIDTH);
console.log(isActive ?? WIDTH);

console.log('' || WIDTH);
console.log('' ?? WIDTH);

// a ||=b : a가 false일때 b의 값을 a에 할당  a = a || b
// a &&=b : a가 true일때 b의 값을 a에 할당   a = a && b
// a ??=b : a가 undefined, null일때 b의 값을 a에 할당  a = a ?? b