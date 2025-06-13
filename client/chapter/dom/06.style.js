/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

const nav = getNode('nav');

console.log(nav.className);
console.log(nav.className = 'nav');

//nav.className = 'nav hello'  className으로 하면 기존것이 지워짐 같이 쓰려면 두개 다 써야함

nav.classList.add('hello') //기존것이 지워지지 않고 추가 됨
nav.classList.remove(nav) 
nav.classList.toggle('isActive');


const a = getNode('.first');



// JSDoc 

/**
 * @function DOM Element에 클래스를 추가하는 함수
 * @author 범쌤
 * @param {HTMLElement | string} node   // 함수는 param 변수는 type은 변수에 많이 씀
 * @param {string | string[] | object} className 
 * @return {void}
 */



function addClass(node,className){
  
  if(isString(node)) node = getNode(node);


  if(className.includes(',')){
    className = className.replace(/\s*/g,'').split(',');
  }
  
  if(isObject(className)){
    className = Object.values(className)
  }
  
  if(Array.isArray(className)){

    className.forEach((c)=> node.classList.add(c))
  }
  else{
    node.classList.add(className);
  }
  
}

// addClass('.first',['a','b','c']);
// addClass('.first',{first:'a', second:'b'});
// addClass('.first','a, b, c');


/**
 * 
 * @param {HTMLElement | string} node 
 * @param {string} className 
 * @returns {void}
 */

function removeClass(node, className){
  if(isString(node)) node = getNode(node);
   
   if(!className) {
    node.className = '';
   }
  node.classList.remove(className);
}


/**
 * 
 * @param {HTMLElement | string} node 
 * @param {string} className 
 * @returns {boolean} - 추가 true, 제거 false
 */

function toggleClass(node, className){
  if(isString(node)) node = getNode(node);
    return node.classList.toggle(className);
}

// removeClass('.first','hello');
// removeClass('.first',''); //모든 클래스 다 지우기








/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`