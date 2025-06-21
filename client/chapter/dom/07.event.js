/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

const first = getNode('.first');

// first.onclick = () => {
//   console.log('hti');

// }

// wheel !== scroll

// function handler(e) {
//   console.log(e.wheelDeltaY);
//   if(e.wheelDeltaY > 0){
//     console.log('up');

//   } else{
//     console.log('down');

//   }
// }

//first.addEventListener('wheel', handler);

function handler(e) {
  console.log(e.offsetX, e.offsetY);
}

first.addEventListener('click', handler);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall({offsetX:x, offsetY:y}) {

  //const {offsetX:x, offsetY:y } = e;  // 구조분해 할당, 알리하스

  // const x = e.offsetX;
  // const y = e.offsetY;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  console.log(x, y);

  ball.style.transform = `translate(${x - (w / 2)}px, ${y - (h / 2)}px)`;
}

//ground.addEventListener('click', handleBall);


function handleMove(e){ //{offsetX:x, offsetY:y}
 //console.log(x,y);

 console.log(this,e);

}

ground.addEventListener('mousemove', throttle(handleMove)); //handleMove는 콜백함수



// trhottle(쫄쫄 조금씩만..) /  debounce(다 완성된 다음 한번에)

//const a = debounce(handleMove);

//debounce()();
export function debounce(f,limit = 1000){    // 클로저
  let timeout;

  return function(e){
    //console.log(e);
    
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        f.call(this, e);
      },limit);
  };
}

// debounce(() => console.log('hello'),1000)



function throttle(f, limit=1000){

  let wait = false;
  
  return function(e){  // (...args)
    if(!wait){
      f.call(e.target,e);    // f.apply(this,args); 
      wait = true;
      setTimeout(() => wait = false, limit);
    }
  }
}

// mousemove, resize, input event에서 사용됨

window.addEventListener('resize', debounce(()=>{
  console.log('사이즈 계산!');
  
}))