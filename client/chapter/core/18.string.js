/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter = message[5];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);

console.log(immutableChangeCharacter);



// 부분 문자열 추출
let slice = message.slice();
let subString = message.substring(2,5);
let subStr = message.substr(1,5);


// 문자열 포함 여부 확인
let indexOf = message.indexOf('ffss'); // 해당 문자가 있으면 양수 없으면 음수

console.log(indexOf);


function checkBrowser(){
  const agent = navigator.userAgent.toLowerCase();
  let browserName;

  switch(true){
    case agent.indexOf('edg') > -1: browserName = 'MS Edge'; break;
    case agent.indexOf('chrome') > -1 && !! window.chrome: browserName = 'chrome'; break;
    case agent.indexOf('safari') > -1: browserName = 'safari'; break;
    case agent.indexOf('firefox') > -1: browserName = 'firefox'; break;
    case agent.indexOf('trident') > -1: browserName = 'trident'; break;
    default: browserName = '모던 브라우저가 아닙니다!'
  }
}



let lastIndexOf;

let includes = message.includes('Less');  // true, false 

let startsWith = message.startsWith('Less');
console.log(startsWith);

let endsWith = message.endsWith('more.'); // . 있어야 함
console.log(endsWith);


let str = '  a    b   c         d '


// 공백 잘라내기
let trimLeft =  str.trimLeft();
console.log(trimLeft);

let trimRight;

let trim = str.trim();
console.log(trim);

let replaceAll = str.replaceAll(' ','')
console.log(replaceAll);

let replace = str.replace(/\s*/g,'') // 정규식
console.log(replace);

// padStart()



// 텍스트 반복
let repeat;


// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;


function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

function truncate(text, limit = 100, ellipsis = '...') {
  return `${text.slice(0, limit).trim()}${ellipsis}`;
}