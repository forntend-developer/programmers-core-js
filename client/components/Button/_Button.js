class MyElement extends HTMLElement {

  count = 0;

  constructor() {
    super();
  }

  connectedCallback() {
    console.log('mount');
    this.render();
    this.attachEvent();
  }

  disconnectedCallback() {
    console.log('unmount');
  }

  static get observedAttributes(){  //observed가 들어가면 관찰하는 용도이다, 모니터링 용도 
    return['data-value']
  }

  attributeChangedCallback(name, oldValue, newValue){
    if(name === 'data-value'){
     this.render();
    }
    console.log(name, oldValue, newValue);
    
  }


  handleClick(){
    console.log('clicked');
    this.dataset.value = ++this.count;
    
    
  }

  attachEvent(){
    this.addEventListener('click', this.handleClick);
  }


  render(){
    //console.log(this);
    this.innerHTML = this.dataset.value;
    
  }


}

// 브라우저에게 알려주는 시점
customElements.define('my-element', MyElement);


// const element = document.createElement('my-element');
// document.body.append(element)





class HelloButton extends HTMLButtonElement {
  constructor(){
    super();
  }
    
}



customElements.define('hello-button', HelloButton, {extends:'button'})