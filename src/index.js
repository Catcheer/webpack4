
// import img from './done.svg'
import './index.css'


async function getComponent() {
  console.log('getComponent')
  // let element = document.createElement('div');
  // var btn=document.createElement('button')
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick=PrintMe
  // element.appendChild(btn)

  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  var btn = document.createElement('button')
  btn.innerHTML = 'load print'
  btn.onclick = function () {
    

    // var Img = new Image()
    // Img.src=img
    
    element.appendChild(Img)

    import(/* webpackChunkName:"print" */ './print.js').then(({ default: print }) => {
      print.add()
    })
  }
  element.appendChild(btn)
  return element;


}

// document.body.appendChild(component());
getComponent().then(component => {
  document.body.appendChild(component);
})
console.log('index')