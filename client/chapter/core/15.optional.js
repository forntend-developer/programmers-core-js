/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
//console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
// portableFan && portableFan.photos && portableFan.photos.animate




// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos?.animate


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName?.();

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.



// BROWSER API(어플리케이션 프로그래밍 인터페이스)

const button = document.querySelector('._btn');

const timeout = setTimeout(()=>{  // 숫자가 반환된다
  //console.log('째깍째깍');

  const tag = /* html */`
  <button type="button" class="_btn">날 눌러줘!</button>
`

document.body.insertAdjacentHTML('beforeend', tag);

}, 4000);

button?.addEventListener('click',()=>{})

console.log(timeout);  
// clearTimeout(timeout) 제거 할 수도 있다



let any;

// any as HTMLElement 자동완성 안될때 타입스크립트에서 쓸 수 있음


let count = 0;

// const _timeout = setInterval(() => { 

//   const second = document.querySelector('.second');

//   second.style.transform = `translateY(${++count}px) rotate(-${count}deg)`


//   console.log(++count);

//   if(count >= 500){
//     clearInterval(_timeout) // clearTimeout 사용해도 됨
//   }

// }, 10)

//console.log(_timeout);

let _count = 0;

function animation() {
  const first = document.querySelector('.first')
  first.style.transform = `translateY(${++_count}px)rotate(${_count}deg)`

  const id = requestAnimationFrame(animation)

  if(_count >= 500){
    cancelAnimationFrame(id)
  }

}

//animation()