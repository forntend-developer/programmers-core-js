/* 


1. input 선택하기
    - getNode or querySelector

2. input 이벤트 바인딩
    - addEventListener('input') 

3. input의 value 값 가져오기
    - input.value

4. 숫자값 더하기
    - value1 + value2

5. result에 출력하기 
    - insertLast or insertAdjacentHTML

6. clear 클릭시 모든 값 초기화


*/



// import { getNode } from "./lib/dom/getNode.js";
// import { clearContents } from "./lib/dom/clearContents.js";
// import { insertLast } from "./lib/dom/insert.js";

/*
  named export   =>    import { getNode } from "./....js"
  default export(내보낼 함수가 1개일때)   =>  import clearContents from "./....js" 중괄호가 없어짐
*/

import { 
  getNode as $,  // alias(별칭)를 $로 지정
  isString,
  addClass,
  typeError, 
  insertLast, 
  clearContents,
} from "./lib/index.js";

//import clearContents from "./lib/dom/clearContents.js";  // import a from 으로 설정할 수 있음

const first = $('#firstNumber');  // document.querySelector("#firstNumber")
const second = $('#secondNumber');
const result = $('.result');
const clear = $('#clear');

function handleInput() {
  const firstValue = +first.value;
  const secondValue = Number(second.value);
  const total = firstValue + secondValue;

  // result.textContent = '';
  clearContents(result);

  insertLast(result, total);
}

function handleClear(e) {
  e.preventDefault();

  // first.value = ''
  // second.value = ''
  clearContents(first);
  clearContents(second);

  result.textContent = '-';
  first.focus();
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
