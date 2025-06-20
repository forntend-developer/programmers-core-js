
export const END_POINT = 'http://localhost:3000/posts';


/*
  [readyState] - 데이터를 잘 가져왔는지 나의 상태값   /  status 서버와의 상태
  0: uninitialized
  1: loading
  2: loaded
  3: interactive
  4: complete (성공 | 실패)
 */


// const xhr = new XMLHttpRequest(); //new가 붙으면 생성자 함수로 무조건! 객체가 튀어나옴


// xhr.open('GET', END_POINT);

// xhr.addEventListener('readystatechange', () => {

//   const {readyState, status, response} = xhr; // 구조 분해

//   if(readyState === 4) {

//     if(status >= 200 && status < 400) {
//       const data = JSON.parse(response)
//       //console.log(data); // 문자 데이터로 서버에서 전달해줌 JSON.parse 해석기를 돌려줌


//       //console.log('데이터 가져오기 성공!');
//     } else {
//       console.log('데이터 로드 실패!');
//       switch (status) {
//         case 404:
//             console.log('not found');
//             location.href = '404.html'
//           break;

//       }
//     }
    
//   }
// })


// xhr.send();



/*
  xhr 함수를 만들어서 재사용성을 높이자
 */

// callback 방식

function xhr({
  method = 'GET',
  url = '',
  success = null,
  fail = null,
  body = null,
  headers = {
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Orign' : '*',
  }
} = {}) {

const xhr = new XMLHttpRequest(); //new가 붙으면 생성자 함수로 무조건! 객체가 튀어나옴


xhr.open(method, url);

// xhr.setRequestHeader('Content-Type', 'application/json'); // 서버에 보낼때 JSON.stringify로 보내지만 실제로 제이슨 파일 타입이라고 알려줌
// xhr.setRequestHeader('Access-Control-Allow-Orign', '*');  // 모든 데이터 접근 전체 허용 (CORS) , 프론트단에서 할 수 있는 최대한의 노력 --> 백단의 허용된 api 키값을 넣어야함

if((!method === 'DELETE')){
  Object.entries(headers).forEach(([k, v])=>{  // 객체를 반복순환 돌리기 위해, key, value 뽑기 위해  entries -> 객체를 배열로 만듦
    xhr.setRequestHeader(k, v);
  })
}

xhr.addEventListener('readystatechange', () => {

  const {readyState, status, response} = xhr; // 구조 분해

  if(readyState === 4) {

    if(status >= 200 && status < 400) {
      const data = JSON.parse(response);
      success(data);

    } else {
      console.log('데이터 로드 실패!');
      fail({message:'오류가 발생했습니다!'})
      // switch (status) {
      //   case 404:
      //       console.log('not found');
      //       location.href = '404.html'
      //     break;

      // }
    }
    
  }
})

  xhr.send(JSON.stringify(body));

}


const obj = {
  name: 'tiger',
  age: 30,
  email:'tiger@gmail.com'
}


// xhr({
//   method: 'DELETE',
//   url: `${END_POINT}/4`,
//   success: (data) => console.log(data),
//   fail: ({message}) => console.log(message),
//   //body: obj,
// })





// compound pattern   

xhr.get = (url, success, fail) => {  // 객체안에 함수를 정의 -> 메소드를 활용해서
  xhr({ url, success, fail })
}


// xhr.get(
//   END_POINT,
//   (data) => console.log(data),
//   () => {}
// )


xhr.post = (url, body, success, fail) => {
  xhr({ 
    method :'POST', 
    url, 
    body, 
    success, 
    fail 
  })
}

// xhr.post(
//   END_POINT,
//   obj,
//   () => {},
//   () => {},
// )



xhr.delete = (url, success, fail) => {
  xhr({ 
    method :'DELETE', 
    url, 
    success, 
    fail 
  })
}

xhr.put = (url, body, success, fail) => {
  xhr({ 
    method :'PUT', 
    body, 
    success, 
    fail 
  })
}

xhr.patch = (url,body,success,fail) => {
  xhr({
    method:'PATCH',
    body,
    success,
    fail
  })
}

// xhr.delete(
//   `${END_POINT}/3`,
//   () => {},
//   () => {},
// )




const defaultOptions = {
  method:'GET',
  url:'',
  body:null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

export function xhrPromise(options = {}){

  const {method,url,headers,body,errorMessage:message} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  if(!(method === 'DELETE')){
    Object.entries(headers).forEach(([k,v])=>{
      xhr.setRequestHeader(k,v);
    })
  }

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
      xhr.addEventListener('readystatechange',()=>{
      const { readyState, status, response } = xhr;
      if(readyState === 4){
        if(status >= 200 && status < 400){
          resolve(JSON.parse(response));
        }else{
          reject({message});
        }
      }
    })
  })
}


// xhrPromise({ url:END_POINT })
// .then((res)=>{
//   console.log( res );
// },
// (err)=>{
//    console.log( err );
// })


xhrPromise.get = url => xhrPromise({url});
xhrPromise.post = (url,body) => xhrPromise({url,body,method:'POST'});
xhrPromise.put = (url,body) =>  xhrPromise({url,body,method:'PUT'});
xhrPromise.patch = (url,body) =>  xhrPromise({url,body,method:'PATCH'});
xhrPromise.delete = url => xhrPromise({url,method:'DELETE'});