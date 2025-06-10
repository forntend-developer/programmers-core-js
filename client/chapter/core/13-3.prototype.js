
/*
1. constructor 작성하기
  - this

2. click 이벤트 연결하기
  - handleClick
  - attachEvent

3. input값 가져오기(getter) / 설정하기(setter)
 - get ...
 - set ...

 4. 태그 렌더링하기
   - createTag
   - rendar

5. 데이터 보관하기
  - todoListArray

*/

class Todo {

  input = null;
  button = null;
  renderPlace =null; 

  constructor({input, button, renderPlace}){
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.attachEvent();
  }

  get currentInputTodoData() {
    return this.input.value;
  }

  set currentInputTodoData(value){
    this.input.value = value;
  }

  // 로컬 스토리지에 활용하기 위해 
  addTodoData(){
    if(this.currentInputTodoData === '') return;
    this.todoListArray.push(this.currentInputTodoData);
    console.log(this.todoListArray);
    
  }

  createTag(){
    return `<li>${this.currentInputTodoData}</li>`
  }

  #rendar(){
    if(this.currentInputTodoData === '') return;
    this.renderPlace.insertAdjacentHTML('beforeend',this.createTag());
    this.currentInputTodoData = ''
  }


  handleClick() {
    console.log(this.createTag());
    this.#rendar();
  }

  attachEvent(){
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.addTodoData();
      this.handleClick();
    });
  }

}

const todo = new Todo({
  input:'.todoInput',
  button:'.todoButton',
  renderPlace:'.todolist'

})