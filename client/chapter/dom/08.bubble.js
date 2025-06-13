/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */


const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click',({currentTarget:target})=>{
  //console.log('%c section', 'color:dodgerblue');

  //const target = e.currentTarget;
  // console.log(e.target, e.currentTarget, this);
  console.log(target);
  
});

// article.addEventListener('click',()=>{
//   console.log('%c article', 'color:hotpink');
// });

// p.addEventListener('click',(e)=>{
//   e.stopPropagation();
//   console.log('%c p', 'color:orange');
// });


section.addEventListener('mouseenter', (e)=>{  // mouseover,mouseout 자식들까지 이벤트를 가져감 / 이것보다는 enter, leave를 사용함
  console.log(e.tysectione);
  
})

section.addEventListener('mouseleave', (e)=>{
  console.log(e.type);
  
})















/* 캡처링 ----------------------------------------------------------------- */