



function earth() {
  let water = true;
  let gravity = 10;

  return function (value){

    water = value;

  }
    
}

const ufo = earth();

ufo(false)


// 

const button = document.querySelector('.btn');

// IIFE 이피

const handleClick = (() => {

  let isClicked = false;  // 클로저가 필요한 시점

  return () => {
     if(!isClicked){
    document.body.style.background = 'orange';
  } else { 
    document.body.style.background = 'white';
  }

  isClicked = !isClicked;
  }
 
  
  //console.log('clicked');
  
})()


button.addEventListener('click', handleClick);


// removeEventListener
// document.querySelector(".first").addEventListener('click', () => {
//   button.removeEventListener('click',handleClick);
// })



function bindEvent(node, eventType, fn) {

  if(typeof node === 'string') node = document.querySelector(node);

  node.addEventListener(eventType, fn);

  return () => node.removeEventListener(eventType,fn)
}



const remove = bindEvent('.btn','click',handleClick);





function useState(init){
  let value = init;

  function read() {
    // rendar()
    return value;
  }

  function write(newValue) {
    // rendar()
    value = newValue;
  }

  return[read, write];

}

const [value,setValue] = useState('hello');

// const read = a[0];   read();
// const write = a[1];   write();