/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling


// const first = document.querySelector('.first');
// console.log(document.body.firstElementChild);



/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains


// 1. nav 태그 요소 잡기
const nav = document.querySelector('.navigation');
console.log(nav);


// 2. nav 태그 안에 있는 about li 태그 요소
const about = nav.querySelector('.about');
console.log(about);

// 3. data-name이 contact인 li 태그 요소
const contact = nav.querySelector('li[data-name="contact"]');
console.log(contact);

// 4. nav 요소 안에 있는 모든 자식 요소
const children = nav.querySelectorAll('*');
const _children = [...nav.children];


_children.forEach((li)=>{
  //console.log(li);
})


const li = _children.find((li)=> li.matches('.about'));

console.log(li);

// console.log(children);




// function getNode(node, context = document){   //getNode => $로 바꾸면 제이쿼리 느낌

//   //context = document.querySelector(context) 

//   if(context.nodeType !== 9) context = document.querySelector(context); 

//    return context.querySelector(node);
// }



// function getNodes(node, context = document){  

//   if(context.nodeType !== 9) context = document.querySelector(context); 

//    return context.querySelectorAll(node);
// }

getNode('.about','nav');