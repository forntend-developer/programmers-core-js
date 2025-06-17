/*

 1. input 선택하기
 2. input 이벤트 바인딩
 3. input의 value 값 가져오기
 4. 숫자값 더하기
 5. result에 출력하기
 
 */

const first = document.querySelector('#firstNumber');
const second = document.querySelector('#secondNumber');
const result = document.querySelector('.result');
const clear = getNode('#clear');

// function clearContents(node) {
//   if (isString(node)) node = getNode(node);
//   if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
//     node.value = '';
//     return;
//   }

//   node.textContent = '';
// }

function handleInput() {
  const firstValue = +first.value;
  const secondValue = Number(second.value);
  const total = firstValue + secondValue;

  console.log(total);

  //result.textContent = '';
  clearContents(result);

  insertLast(result, total);
}

function handleClear(e) {
  e.preventDefault();

  // first.value = '';
  // second.value = '';
  clearContents(first);
  clearContents(second);

  result.textContent = '-';
  first.focus();
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
