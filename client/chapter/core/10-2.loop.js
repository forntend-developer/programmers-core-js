/* -------------------- */
/* Do While Loop        */
/* -------------------- */



// let i = 0;
// do {
//   console.log(i);

//   if(i === 3) {
//     break;
//   }

//   i++;

// } while(i < 5);




// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정




// html에 태그를 만들고 내가 원하는 태그에 style을 입히기 위해서 (css => class selector)
// html에 태그를 만들고 내가 원하는 태그를 동적 제어하기 위해서 (js => querySelector)
// querySelector를 사용했을 때 null이 반환이 된다면, html을 제대로 읽지 못한 상태입니다. 이럴 땐 defer를 사용해 스크립트의 실행을 늦춰주세요.
// js를 사용해서 html에 접근하는 방식 (document Object Model)   DOM

//const first = document.querySelector('.first');

//const second = next(first);
//const third = next(second);




  //onst second = next(first)

  function next(node) {

    // node가 문자면 아래 코드 실행해
    // validation => type guard
    if(typeof node === 'string'){
      node = document.querySelector(node)
    }
    do {
        node = node.nextSibling;    // 이전요소 선택 previousSibling
        
    } 
    while(node.nodeType !== 1)
      return node;
  }

  const second = next('.first')
  //const _second = next(first)
