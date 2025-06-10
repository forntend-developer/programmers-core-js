/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식  // 자바스크립트 함수는 값이다!! -> 완전 중요!!!
let calculateTotal = function() {

  // 집합 데이터
  // 함수 안에서만 접근 가능한 인수들의 집한 객체 : arguments

  // console.log(arguments);


  let total = 0;

  // for문 사용 total 내보내기
  // for(let i = 0; i < arguments.length; i++){
  //   //console.log(arguments[i]);
  //   total = total + arguments[i];
  // }
  // return total;



  // for...of
  // for(const value of arguments){
  //   //console.log(value);
  //   total += value;
  //   return total;
  // }


  // 배열의 메서드
  // forEach, reduce, map, filter ...

  //1. const arr = Array.prototype.slice.call(arguments);  // Array 능력에 접근 slice 잘라내어 call로 빌려씀 - array instance method - 생성자 함수를 통해 생성된 객체만 사용할 수 있는 능력
  //2. const arr = Array.from(arguments); // array static method (유틸 함수 처럼 사용할 수 있음) - 객체 생성 없이 사용할 수 있는 유틸 함수 능력?
  const arr = [...arguments]; // spread syntax(전개구문, 전개연산자)


  // arr.forEach(function(value, index){   // 콜백함수를 받음
  //    console.log(`${index} : ${value}`);
  // })   // void -> 값을 반환하지 않는다는 뜻



  // function a(value, index){
  //  total +=value;
  // }
  // arr.forEach(a)

  // arr.forEach(function(value){
  //   total +=value;
  // })
  
  // return total;


  console.log(arr);

  // arr.reduce(function(acc,current,index){  // prev:첫번째 값, current:첫번째 값 뺀 나머지 / prev => acc(Accumulator = 누적값)
  //   //console.log(current);
  //   return acc + current
  // },0) // , 초기값을 설정하지 않으면 배열의 첫번째를 가져다 쓴다. forEach랑 다르게 값을 반환한다.



  // arguments => 유사배열 => forEach 빌려쓰기 .call  --> 한번만 쓸 경우에는

  // first : 빌리는 대상
  // second : 인수
  // Array.prototype.forEach.call(arguments, function(value){
  //   //console.log(value);
  //   total += value;
  // })

  // return total;


  // 부모를 바꿔치기해서 Array 메소드를 다 사용할 수 있음. 던더 프로토 [[prototype]]
  arguments.__proto__ = Array.prototype

  console.log(arguments);
  


};

const result = calculateTotal(1000,3000,5000,2300,5000);

console.log(result);



console.clear();

  // forEach : 값을 반환하지 X, 로직 순환만 함
  // reduce : 새로운 값을 반환 (값의 형태가 어떤 any값이 와도 상관없음)
  // map : 새로운 배열을 반환(forEach랑 비슷)
  // filter : 새로운 배열을 반환

const friends = ['이승은','이소민','황유정','문태민'];

const newFriends = friends.map(function(name, index){
  // console.log(index, name);
  
  //return `[FE]${name}`
  return `<li data-order="${index}">이름 : [FE]${name}</li>`
})

console.log(newFriends);







// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){
};
//anonymousFunctionExpression();


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){

};
namedFunctionExpression();  // hello()라고 쓸 수 없음. 내부에서는 알고 있음.

// 콜백 함수 (표현)식
let callbackFn = function (condition, success, fail) {

  if(condition) success()
    else fail()
  //console.log(success);
  
};
// callbackFn(
//   true,
//   function() { console.log('성공입니다.')},
//   function() { console.log('실패입니다.')}
// );

callbackFn(
  true,
  () => console.log('성공입니다.'),
  () => console.log('실패입니다.')
);

console.clear();




function movePage(url,success,fail) {
  if(url.includes('https')){
    success(url);
  } else {
    fail();
  }
}

movePage(
  'https://www,naver.com',
  function (url) {
    console.log(`현재 입력하신 url은 ${url} 입니다. 3초 뒤 해당 사이트로 이동합니다.`);  // 콜백함수는 보통 이렇게 인수를 사용할때 씀
    // setTimeout(()=>{
    //   location.href = url
    // }, 3000);
  },
  function () {
    console.log('잘못된 url 정보를 입력하셨습니다.');
    
  }
);




// function getGeologation(success) {

//   navigator.geolocation.getCurrentPosition(function(so){

//     const data = so.coords.latitude;
//     success(data); // arguments  콜백함수는 여기가 선언부
//   })
  
// }


// promise 나중에 배움
// async await  <= const value = getGeologation();



// getGeologation(function (value) {  // 여기가 실행부로 생각해야 한다.
//   console.log(value);  
// })








// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

let IIFE; // 입피함수 => 바로 실행되는 함수 = 오늘날에는 잘 사용하지 않음


// module programming
// import {window as g} from './...'

// encapsulation (캡슐화) => 클로져..!!


const MASTER = (function(g){

  console.log(g);
  

  var uuid = 'dsfsdvxzcfvswdekjhbflkq3jh42k3j5h4l##%^&'

  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value;
    }
  }

})(window)


// console.log(MASTER.getKey());
console.log(MASTER.setKey('새로운 암호화 비밀번호'));
console.log(MASTER.getKey());



console.clear();






// rem(20) // 1.25rem     20/16
// rem('25px') // 1.5625rem
// rem('30px', 10) // 3rem


function rem(pxValue, base = 16) { 
  if(!pxValue) {
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.')
  }
  if(typeof base === 'string') {
    throw new TypeError('rem 함수의 두 번째 인수는 숫자 타입 이어야 합니다.')
  }
  // 첫번째 숫자, 문자  => 숫자로 만들기
  if(typeof pxValue === 'string'){
    // 정수만 내보려는 함수
    pxValue = parseInt(pxValue);
  }

  return pxValue / base + 'rem';
}



console.assert(rem(20) === '1.25rem')
console.assert(rem('25px') === '1.5625rem')
console.assert(rem('30px', 10) === '3rem')


// 1. function name 함수의 이름
// 2. arguments 함수의 실행부 작성
// 3. paramrter 매개변수 확인   
// 4. return value
// 5. validation
// 6. Test Driven Development(TDD) 이 순서대로 함수를 만드는 연습을 한다




// setter function 셋팅하기 때문에 return이 필요 없음
function setCss(node, prop, value) {
  
  if(typeof node === 'string'){
   node = document.querySelector(node); 
  }

  if(!(prop in document.body.style)) {
    throw new TypeError('setCss 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.');
    
  }

  if(!value) {
    throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.');
    
  }

   node.style[prop] = value; 


  //const first = document.querySelector('.first'); // 요소 선택
  // first.style.color = 'orange';   // 스타일 
 
 
}

// const first = document.querySelector('.first');
// setCss(first,'color','orange')







// gettet function
function getCss(node, prop) {
  
  if(typeof node === 'string'){
   node = document.querySelector(node); 
  }

  if(!(prop in document.body.style)){
    throw new ReferenceError('getCss 함수의 두 번째 인수는 유효한 css 속성이어야 합니다.');
    
  }
  return getComputedStyle(node)[prop];   // 변수에 접근하려고 할때 대괄호 표기법을 쓴다..!!! 


  // let props = node.style[value];
  //  console.log(props);
}
 
const fontSize = getCss('.first', 'font-size')  // '28px'






function css(node, prop, value) {
  
  // if(!value){
  //   return getCss(node, prop)
  // }
  // else {
  //   setCss(node, prop, value)
  // }

  return !value ? getCss(node, prop) : setCss(node, prop, value);
}

css('.first','color') // get
css('.first','color','blue') // set


const _css = (node, prop, value) => !value ? getCss(node, prop) : setCss(node, prop, value);  // 화살표 함수





// function getCss(selector, value) {
//   const node = document.querySelector(selector);
//   if (!node) return null;
//   let style = getComputedStyle(node);
//   let props = style.getPropertyValue(value);
//   console.log(props);
//   return props;
// }

// const fontSize = getCss('.first', 'font-size');
