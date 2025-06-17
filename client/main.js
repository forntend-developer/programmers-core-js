import {
  getNode as $,
  addClass,
  removeClass,
  clearContents,
  getRandom,
  insertLast,
  isNumericString,
  shake,
  copy,
} from './lib/index.js';
import data from './data/data.js';
import { showAlert } from './lib/dom/showAlert.js';

/*
[phase-1]
 
1. 주접 떨기 버튼을 클릭하는 함수
  - 주접 떨기 버튼 가져오기
  - 이벤트 연결 'click'

  2. input 값 가져오기
    - input.value

  3.data 함수에서 주접 이름 넣고 꺼내기 => [] 리턴값 확인
    - n번째 주접 pick하기

  4. result에 렌더링 하기
    - insertLast

  
  [phase-2]

  5. 예외 처리
    - 이름이 없을 경우 에러
    - 숫자만 들어오면 에러
 */

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');

function handleSubmit(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replaceAll(' ', '') === '') {
    // addClass('.alert-error', 'is-active');
    // $('.alert-error').textContent = '공백은 허용하지 않습니다.';

    // setTimeout(() => {
    //   removeClass('.alert-error', 'is-active');
    // }, 2000);
    showAlert({
      target: '.alert-error',
      message: '공백은 허용되지 않습니다.',
      timeout: 2000,
      className: 'is-active',
    });

    shake(nameField);
    // addClass('#nameField', 'shake');

    return;
  } // promise 나중에 처리

  if (!isNumericString(name)) {
    showAlert({
      target: '.alert-error',
      message: '정확한 이름을 입력해 주세요.',
      timeout: 2000,
      className: 'is-active',
    });

    shake(nameField);
    return;
  }

  clearContents(result);
  insertLast(result, pick);

  //console.log(list[getRandom(list.length)]);
}

function handleCopyClipboard() {
  const text = this.textContent;

  copy(text).then(() => {
    showAlert({
      target: '.alert-success',
      className: 'is-active',
      message: '클립보드 복사 완료!',
      timeout: 2000,
    });
  });
}

submit.addEventListener('click', handleSubmit);

result.addEventListener('click', handleCopyClipboard);
