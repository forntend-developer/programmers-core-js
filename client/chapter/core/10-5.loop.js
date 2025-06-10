/* --------------- */
/* For Of Loop     */
/* --------------- */


// enumerable => 열거 가능한
// iterable => 반복 가능한
// mutable => 변형 가능한
// immutable => 변형 할 수 없는


// for...of => iterable 요소만 사용 가능

// 배열 iterable 합니다.

// 여러 자료형을 넣을 수 있다.
// 순서(index)가 있다
// length가 있다


const arrayLike = { // 유사 배열
  0:'body',
  1:'head',
  2:'div',
  3:()=>{},
  4:100,
  length:5,
  //Symbol() 강제적으로 심어서 iterable 돌릴 수도 있다... 다시 필기...
}

// for(const key of 'hello javascript'){
//   console.log(key);
// }
// for of문을 돌리지 않아도 Symbol.iterator 가 있는지 확인하면 배열인지 아닌지 확인 할 수 있음





const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];



Object.prototype.nickName = 'tiger';

// for ~ of 문

for(const value of languages){

  //console.table(value); //console.table로도 확인 할 수 있음
  
}




// - 특정 조건에서 건너띄기    다시 작성하기!!!!!

for(const value of languages){

  const name = value.name

  if(name.includes('Java') && name.length < 5 ) continue;

    //console.table(value);
}

// - 특정 조건에서 중단하기

// for문 : 모든 데이터 순환 => 예열 코드가 많다 => 무한루프에 빠질 여지가 있다
// for...in문 : 객체 데이터 순환 => 전해진 아이템의 갯수만큼 => 조상의 아이템까지 순환하는 단점
// for...of문 : iterable 데이터 순환 => 정해진 아이템의 갯수만큼




const obj = {
  nickName: 'tiger',
  age: 30,
}


// 객체 순환 for...in 써야 함 => 조상 아이템
// hasOwn
// 객체인데... for...of를 사용하고 싶다....
// symbol.iterator => 짱귀찮음
// 객체를 배열로 만들어버려~~


// Object.keys(obj) => 키들만 모아놓은 배열로 만듬
// Object.values(obj) => 값만 모아놓은 배열로 만듬
// Object.entries(obj) => 키와 값을 모아놓은 배열로 만듬

const keys = Object.keys(obj); // 객체의 key들을 모아 새로운 배열을 '반환' 하는 유틸 함수
// ['nickName', 'age']

const values = Object.values(obj); // 객체의 value들을 모아 새로운 배열을 '반환' 하는 유틸 함수
// ['tiger', '30']

const entries = Object.entries(obj) // 객체의 key,value를 모아 한 쌍의 배열로 '반환'하는 유틸 함수
// [key, value],[key, value]

// for(const key of keys){
//   console.log(key);
// }

for(const keyValue of entries){  // 구조분해 할당 [key,value]으로 나눌 수 있음, entries 많이 사용됨!!
 
  const key = keyValue[0];
  const value = keyValue[1];

  //console.log(key, value);
}

// for of를 현재는 많이 사용함....!!




const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문
for(const key in randomUser){

  if(Object.hasOwn(randomUser,key)){
    
    const L1 = randomUser[key];
    console.log('\t',L1); 

    if(typeof L1 === 'object'){
      for(const key in L1) {

        if(Object.hasOwn(L1,key)){
          const L2 = L1[key];
          console.log('\t\t',L2); 

          if(typeof L2 === 'object'){
            for(const key in L2){
              if(Object.hasOwn(L2,key)){
                const L3 = L2[key];

                console.log('\t\t\t',L3);  
              }
            }
          }
        } 
      }
    }

  }
  
}



// - for ~ of 문
for(const keyValue of Object.entries(randomUser)){
  const key = keyValue[0];
  const value = keyValue[1];
   console.log(value);

  if(typeof value === 'object'){

    for(const keyValue of Object.entries(value)){
      const key = keyValue[0];
      const value = keyValue[1];
       console.log(value);

      if(typeof value === 'object'){
        for(const keyValue of Object.entries(value)){
            const key = keyValue[0];
            const value = keyValue[1];
            console.log(value);
  
        }
      }
    }
  }
}

// 나중에 배울 재귀함수를 활용해서 함



// - 성능 비교 진단