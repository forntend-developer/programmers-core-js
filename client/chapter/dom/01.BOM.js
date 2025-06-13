/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval, console } = window; //구조분해할당


/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload, pathname } = location;


/*
href: http://localhost:5500/index.html?type=listing&page=2#title
protocol: http: / https:
host: localhost:5500
search: ?type=listing&page=2  -> query string
hash: #title -> 이정표
pathname: /index.html
*/


//URLSearchParams()
console.log(hash);


const urlParams = new URLSearchParams(location.search);

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }


/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;


// callback => promise API로 바꿀 수 있음

// function getGeolocation(success){  // 콜백함수 사용 예시 밖에서 꺼내쓸 때

//   navigator.geolocation.getCurrentPosition((data)=>{
//     //console.log(data.coords.latitude, data.coords.longitude);
//     const {latitude:lat, longitude:long} = data.coords;

//     success({lat, long})

//   })
// }

// getGeolocation((data)=>{
//   console.log(data);
  
// })



function _getGeolocation(){ 
  const p = new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition((data)=>{
    const {latitude:lat, longitude:long} = data.coords;
    resolve({lat,long})
    })
  })
 return p;
}

_getGeolocation()
.then((data)=>console.log(data))
.then()
.then()
.then()


// async await로 바꿀 수 있다
// const {lat, long} = _getGeolocation();

// navigator.mediaDevices.getUserMedia({video:true})
// .then((stream)=>{
//   console.log( stream );
//   document.querySelector('#videoElement').srcObject = stream;
  
// })




/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;




/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

// history.pushState(null,'','/about') 주소를 바꿔줌  / SPA (single page application)






const links = document.querySelectorAll('a');

//console.log(links);

function about() {
  return`
  <h1>About PAGE 입니다.</h1>
  <div><p>loreasdasfsdf</p></div>
  `
}

const routes = {
  '/': '<h1>Home PAGE 입니다.</h1>',
  '/about': about(),
  '/contact': '<h1>Contact PAGE 입니다.</h1>' 
}

const app = document.querySelector('#app')

function router(){
  const path = location.pathname;
  app.innerHTML = routes[path] || `<h1>404 not found</h1>`
}

links.forEach((a)=>{
  a.addEventListener('click',function(e){
    e.preventDefault();
    //console.log(this.href);
    const href = this.href
   history.pushState({page:2},'',href);
    router();
  })
})

window.addEventListener('popstate',(e)=>{
    console.log( e.state );
})

window.addEventListener('DOMContentLoaded', router)