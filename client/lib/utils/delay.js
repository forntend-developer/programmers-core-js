import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';

// callback

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = 0;
//       second.style.top = 0;
//     });
//     second.style.transform = 'rotate(-360deg)';
//   });
//   second.style.top = '100px';
// });

// 내가 이거 끝나면 꼭 너한테 알려줄게 약속할게...


// promise

/*

Promise를 사용하는 이유?

- 콜백의 한계(콜백지옥)
- 가독성을 위해
- 비동기 작업을 순차적으로 처리

 */


// object mixin

const defaultOptions = {
  shouldRejected : false,
  data : '성공',
  errorMessage : '오류 발생!',
  timeout : 1000, 
}

function delayP(options){

  //console.log(options);
  // const config = {...defaultOptions, ...options};
  let config = {...defaultOptions}

  // option이 숫자 일때 isNumber()
  if(isNumber(options)){
    config.timeout = options;
  }

  // option이 객체 일때 isObject()
  if(isObject(options)){
    config = {...defaultOptions,...options}

  }
  
  //console.log(config);

  
  const {shouldRejected, timeout, errorMessage, data} = config;

  return new Promise((resolve,reject) => {

    setTimeout(() => {
      
      if(!shouldRejected){
        resolve(data);
      } else{
        reject({message: errorMessage});
      }
    
    }, timeout);
  })
}

//console.log( delayP() );

delayP(1000)

delayP({
  // data: '성공!!',
  // shouldRejected: false,
  // timeout: 1000,
  errorMessage:'오류 발생!'
}) // [[promise object]]
.then(()=>{

  first.style.top = '-100px';
  second.style.top = '100px';

  return delayP();
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  second.style.transform = 'rotate(-360deg)';

  return delayP();
})
.then(()=>{
  first.style.top = 0;
  second.style.top = 0;

})