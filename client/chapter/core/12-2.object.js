/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;
let conversationTool = messenger;


// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사
// 1. for ~ in 문을 사용한 복사  - 얕은 복사
const cloneObject = {};

for(const key in messenger) {
  cloneObject[key] = messenger[key]
}

console.log(cloneObject);



// 2. Object.assign()을 사용한 복사  - 얕은 복사
const copyObject = Object.assign({},messenger);


// 3. 전개 연산자(...)를 사용한 복사  - 얕은 복사, 제일 많이 사용함
const spreadObject = {...messenger};

// 4. 객체를 복사해주는 유틸 함수 

function copiedObject(obj){
  return Object.assign({},obj);
}

// const _copiedObject = o =>  Object.assign({},o);
const _copiedObject = o => ({...o});

const o = copiedObject(messenger)



// Object mixin pattern

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

//let combinedCssMap = Object.assign({}, cssMapA,cssMapB);
let combinedCssMap = {...cssMapA,...cssMapB};

console.log(combinedCssMap);



// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

// 2단계 복사는 이렇게 하는 경우가 많음
let copiedContainerStyles = {
  ...containerStyles, 
  ['max-width']:{
    ...containerStyles['max-width']
  }
};


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(  // fromEntries 배열을 객체로 만들어줌
    Object.entries(object).map(([key, value]) => {  // entries 배열로 만들어줌
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

const deep = cloneDeep(containerStyles);


/*
1. 참조에 의한 객체 복사 (객체나 배열은 전부다 참조 복사가 됩니다.) 리액트 지양
2. 얕은 복사 
3. 깊은 복사 
*/



// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
