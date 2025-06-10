/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2025,
  // hasOwnProperty(){
  //   return '😁'
  // } 이렇게 메소드를 할 경우도 있으니 조상 속성을 빌려써야 함/ 이렇게 쓰지도 않음
};

Object.prototype.nickname = 'tiger'  // 조상object 원본 자체를 훼손, 쓰지 않음

//console.log('nickname' in javaScript);

//'creator' in javaScript  // in 문 - 'creator'이 javaScript 객체안에 있어? - boolean법으로 반환



// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?  /  in문은 위험하니깐 hasOwnProperty 사용함

//console.log(javaScript.hasOwnProperty('nickname'));


//console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickname'));  // 정확하게 사용하기 위해 이렇게 작성함
// console.log( ({}).hasOwnProperty.call(javaScript, 'nickname')); 
console.log(Object.hasOwn(javaScript,'nickname')); // 이렇게를 제일 많이 씀!



// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

//for(key in object)  // 기본 구문 - key는 변수 이름, 지어내도 됨
// for ... in문은 객체를 순환하는 용도로 사용됨. => 원본 훼손 여지 => hasOwn

for(const key in javaScript){ 

  //if(Object.prototype.hasOwnProperty.call(javaScript, key))
  if(Object.hasOwn(javaScript,key)){

    const value = javaScript[key];

    //console.log(value);

  }
}

const tens = [10,100,1000,10_000];

for(const key in tens){
  console.log(tens[key]);
  
}

// for...in을 사용해서 배열을 순환 => 순서를 보장하지 않기 때문에, 위험하다.
// 객체 순환용으로만 사용해야 한다.  객체에만!!!!!



// enumerable 열거 가능한

const obj = {};

obj.nickname = 'tiger'

console.log(obj);

Object.defineProperty(obj,'age',{
  value:30,
  enumerable:true, // 조회 가능한
  writable:true, // 수정 가능한
  configurable:false // 제거 가능한
})

Object.defineProperties(obj,{
  age:{

  },
  email:{

  }
})


for(const key in obj){
  console.log(key);
  
}
