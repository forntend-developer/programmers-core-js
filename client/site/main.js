

const links = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

/* 
1. 각 메뉴에 마우스를 올렸을 때 
2. 선택된 자식의 depth를 찾아서 
    - 대상의 마지막 자식 요소 (lastElementChild)

3. height = '100px'
    - element.style.height = '100px'

4. 선택된 대상의 depth가 아니면 나머지는 height = 0;
    - 나머지 = 전체

*/

// const h = (t) => {
//   t.style.height = 0
// }

function valilla() {
  const h = t => t.style.height = 0; // 헬퍼 함수


  links.forEach((a) => {
    a.addEventListener('mouseenter',(e)=>{
      //console.log(e.currentTarget.lastElementChild);

      const currenDepth = e.currentTarget.lastElementChild;

      // 모든 depth 높이 없애!
      depthList.forEach(h);
      currenDepth.style.height = '100px';
    })
  })


  header.addEventListener('mouseleave', ()=> {
    //console.log('leave!');
    // depthList.forEach((depth)=>{
    //   depth.style.height = 0;

      // 이부분을 헬퍼 함수를 이용해 h(d);
    // })
    depthList.forEach(h)
  })
}



console.log(gsap);


links.forEach((a) => {
  const currenDepth = a.lastElementChild;

  const tl = gsap.timeline({paused:true})
              .to(currenDepth,{height:100, duration:0.2,ease:'power2.inOut'})



  a.addEventListener('mouseenter', () => tl.play())
  a.addEventListener('mouseleave', () => tl.reverse())
})

// const tl = gsap.timeline({
//   defaulta:{
//     //duration:5,
//   }
// });

// tl.to('.logo',{ x:100})
// tl.to('.logo',{ y:100})