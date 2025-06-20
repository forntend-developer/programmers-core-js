import {
  tiger,
  delayP,
  getNode,
  END_POINT,
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

/* 
  1. 태그 template 만들기 
      - `<div></div>`

  2. 태그 렌더링하기
      - insertLast
*/

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  // await delayP(2000)

  try {
    const { data } = await tiger.get(END_POINT);

    // getNode('.loadingSpinner').remove();

    gsap.to('.loadingSpinner', {
      opacity: 0,
      duration: 1,
      onComplete() {
        this._targets[0].remove();
        data.forEach((user) => renderUserCard(userCardInner, user));
        changeColor('.user-card');

        gsap.from('.user-card', {
          opacity: 0,
          stagger: 0.1,
          x: -30,
        });
      },
    });
  } catch {
    gsap.to('.loadingSpinner', {
      opacity: 0,
      duration: 1,
      onComplete() {
        this._targets[0].remove();
        renderEmptyCard(userCardInner);
      },
    });
  }
}

renderUserList();

function handleDelete(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const id = button.dataset.value;

  tiger.delete(`${END_POINT}/${id}`).then(() => {
    alert('삭제가 완료됐습니다!');
    clearContents(userCardInner);
  });
}







userCardInner.addEventListener('click', handleDelete);

const creatButton = getNode('.create');
const cancelButton = getNode('.create .cancel');
const doneButton = getNode('.create .done');



function handleCreate() {
  const pop = getNode('.create .pop');
  // pop.style.opacity = 1;
  // pop.style.visibility = 'initial;

  gsap.to(pop, {
    autoAlpha: 1,
  });
}


function handleCancel(e) {
  e.stopPropagation()   // 보통 팝업창 같은데서 버블링 방지로 사용함

  gsap.to('.create .pop', {
    autoAlpha: 0,
  });
}

function handleDone(e) {
  e.preventDefault();

  const username = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  tiger.post(END_POINT, {    //post 통신 다시 공부하기!
    username,
    email,
    website
  }).then(()=>{

    gsap.to('.create .pop', {autoAlpha:0});
    clearContents(userCardInner);  // 이부분도 다시 보기
    renderUserList(); // 이부분도 다시 보기


    getNode('#nameField').value = '';
    getNode('#emailField').value = '';
    getNode('#siteField').value = '';
  })

  
}



creatButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);



const registerButton = getNode('.register');
const registerCancelButton = getNode('.register .cancel');
const registerDoneButton = getNode('.register .done');



function handleRegister(){
  gsap.to('.register .pop',{autoAlpha:1})
}

function handleRegisterCancel(e){
  e.stopPropagation();
  gsap.to('.register .pop',{autoAlpha:0})
}

function handleRegisterCreate(e){
   e.preventDefault();

  const name = getNode('#create-name').value;
  const password = getNode('#create-password').value;

  tiger.post('http://localhost:3000/register',{
    email:'tiger@gmail.com',
    password:'123123'
  });
}


registerButton.addEventListener('click',handleRegister);
registerCancelButton.addEventListener('click',handleRegisterCancel);
registerDoneButton.addEventListener('click',handleRegisterCreate);







const isLogin = await tiger.post('http://localhost:3000/login', {
  email:'tiger@gmail.com',
  password:'123123'
})

alert(`${isLogin.data.user.email}님 환영합니다!`)
console.log(isLogin.data);
