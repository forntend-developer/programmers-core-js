import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise} from './xhr.js';

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
  shouldRejected: false,
  data: '성공',
  errorMessage: '오류 발생!',
  timeout: 1000,
};

export function delayP(options) {
  //console.log(options);
  // const config = {...defaultOptions, ...options};
  let config = { ...defaultOptions };

  // option이 숫자 일때 isNumber()
  if (isNumber(options)) {
    config.timeout = options;
  }

  // option이 객체 일때 isObject()
  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  //console.log(config);

  const { shouldRejected, timeout, errorMessage, data } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

//console.log( delayP() );

// delayP(1000);

// delayP({
//   // data: '성공!!',
//   // shouldRejected: false,
//   // timeout: 1000,
//   errorMessage: '오류 발생!',
// }) // [[promise object]]
//   .then(() => {
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })
//   .then(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
//   })
//   .then(() => {
//     first.style.top = 0;
//     second.style.top = 0;
//   });

// const p = new Promise((resolve, reject)=>{    // 콜백함수 들어감
// })
// p.then((result)=>{  // then은 무조건프로미스 객체 내보냄
//  return p ()
// })

//



// async await  
// async : 무조건!! Promise 객체 내보냄
// await : 코드 실행 흐름 제어
//         result의 값을 꺼낼 수 있다.

async function f(){
  return 10;
}


const a = f();

const data = await a;   // top-level await


//IIAFE  -> top-level await 사용하기 위해 이렇게 쓰는 경우가 있음, 즉시 실행
(async()=>{
  const a = await f();
})()


async function delayA() {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('성공')
    }, 2000);
  })
}

// const result =  await delayA();

// console.log(result);



async function 라면끓이기() {

  const a = await delayP({data:'물'})
  console.log(a);

  const b = await delayP({data:'불켜기'})
  console.log(b);

  const c = await delayP({data:'스프'})
  console.log(c);

  
  console.log('면');
  console.log('계란');
  console.log('먹기');
  
}

//라면끓이기();


async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/1');
  const src = data.sprites.other.showdown['front_default'];
  
  insertLast(document.body,`<img src="${src}" alt="" />`)
}

getData();