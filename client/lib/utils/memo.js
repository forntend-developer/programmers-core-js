// console.log('memo');

// memoization

export const memo = (() => {

  const cache = {}; 

  return(key, fn) => {  // 클로져 사용
    if(!fn) return cache[key];

      if(cache[key]){
        console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
        
        if(confirm('덮어쓰기 할래?')){
          const history = cache[key];
          cache[key]
        }
      }
      cache[key] = fn();
  }

})() // 이피패턴


//console.log(memo('cube'));
//memo('cube', () => document.querySelector("#cube"));

// memo('say', () => 'hello');
