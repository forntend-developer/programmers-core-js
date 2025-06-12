


// 원운동, 원하는 각도로 이동, 진동, 눈 내리는 애니메이션



// sin @ = y (c)
// cos @ = x (b)


// Math.sin(0.3213124123123) * 100  radian(프로그래밍 각도)으로 만듦    360 = 2파이

function toRadian(degree){
  return degree * (Math.PI / 180)
}

function toDegree(radian){
  return radian * (180 / Math.PI)
}


const circle = document.querySelector('.circle');
let degree = 45;
let radius = 10;

let lastInsertTime = 0;

function animation(){
  
  degree += 0.3;
  radius += 0.1; //0.3

  const x = Math.cos(toRadian(degree)) * 100; // * radius
  const y = Math.sin(toRadian(degree)) * 100; // * radius

  circle.style.transform = `translate(${x}px,${-y}px)`;

  const currentTime = Date.now();

  if(currentTime - lastInsertTime >= 300) {
     const tag = `
    <div style="transform:translate(${x}px,${-y}px)">🐯</div>
  `
  
  document.querySelector('.space').insertAdjacentHTML('beforeend',tag);

  lastInsertTime = currentTime
  }

}



setInterval(animation, 0);



// generator function 한번 검색 해보기
// tagged template function  한번 검색 해보기