/* ------------ */
/* For Loop     */
/* ------------ */



// 2 ~ 10까지의 짝수 출력하기

// while if ... continue

let j = 0;
while (j < 10 ) {
  j++;

  if(j % 2 !== 0) continue;

  console.log(j);
}

for(let p = 0; p < 10; p++){
  
  console.log(p);
  
}

console.clear();



const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');  // split 문자의 메소드, 공백을 기준으로 배열로 반환

let i = 0;
let l = frontEndDev.length;

while(i < l) {
  //console.log(frontEndDev[i]);
  i += 1;
}


// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

for(let i = 0; i < l; i++){

  const value = frontEndDev[i];
  const lower = value.toLowerCase();

  if(lower.includes('jquery') || lower.includes('svg')) continue;
  //if(lower.includes('jquery')) break; 

  //console.log(value);
  
}


//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

const arr = [...frontEndDev];  // 배열을 복사함 


for(let i = 0; i < l; i++){
  console.log(arr.shift());  //  shift, pop(역순) 배열의 아이템을 뽑아낼 수 있지만, 빈배열이 될 수 있음. 배열을 원본을 훼손해서 잘 사용하지 않음!!! => 기존 배열을 복사해서 사용함 
}


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)