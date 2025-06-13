/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('a');

console.log(links);



nav.addEventListener('click', (e)=>{
  e.preventDefault();
  
  const target = e.target.closest('li');

  console.log();


  // 어바웃 클래스가 있는 li에게만 hit 문자 출력
  // if(target.matches('.about')){
  if(target.classList.contains('about')){
    console.log('hit'); 
  }

  
})






/* 클래스를 사용한 위임 ---------------- */


/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */