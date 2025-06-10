/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


const animal = {
  leg:4, 
  tail:true,
  get eat(){ //getter
    return this.stomach
  },
  set eat(food){ //setter
    this.stomach = [];
    this.stomach.push(food);
  }
}

// animal.eat   getter
// animal.eat = '딸기'  setter


const tiger = {
  pattern: '호랑이 무늬',
  hunt(target){
    this.prey = target;
    this.eat = target.prey;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__:animal
}

const 백두산호랑이 = {
  name:'백돌이',
  color:'white',
  __proto__:tiger,
}

const 한라산호랑이 = {
  name:'한돌이',
  color:'orange',
  __proto__:tiger,
}


// 소스코드 다시 확인
//백두산호랑이.hunt('맷돼지')
//백두산호랑이  -> stomach에 들어가야함



// 생성자 함수

function Animal() {
  this.leg = 4;
  this.tail = true;
  this.getEat = function(){
    return this.stomach ?? [];
  }
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  }
}

const _animal = new Animal(); // 생성자 함수는 무조건 객체가 튀어 나온다

// new Rabbit.prototype.cunstrotor 을 사용해서 인스턴스.......


function Tiger(name) {
  Animal.call(this)
  this.name =  name;
  this.pattern = '호랑이무늬';
  this.hunt = function(target){  // 인스턴스 메소드
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }
}

// Tiger.prototype = _animal;


const _tiger = new Tiger('호돌이')

Tiger.bark = function(sound) {  // 스태틱 메소드
  return sound;
}



// function의 인스턴스 메소드
// f.call  -> 함수를 대신 '실행'시켜줌 -> 빌려쓰기 -> 인수 : 값 , , ,
// f.apply -> 함수를 대신 '실행'시켜줌 -> 빌려쓰기 -> 인수 : 배열 [, , ,]
// f.bind  -> 함수를 대신 '실행' x -> 빌려쓰기 (함수 본문을 담음) -> 필요할 때 불러서 사용하면 됨

function sum(a,b){
  console.log(this);
  return a + b;
}
//console.log(sum(1,2));



// Object.prototype.hasOwnProperty.call(obj,key)
const _call = sum.call({},10,20)  // 앞에 {}는 이 함수에서 사용할 this
const _apply = sum.apply({},[10,20])  // call과는 뒤에 인자를 배열로 보내는지의 차이
const _bind = sum.bind({})  // sum;(-> this는 window과 다른점은 ({}) 안에 this를 정의할 수 있다.




function handleClick () {

}

// target.addEventListener('click',handleClick.bind({}))