import _ from 'lodash'

function getComponent() {
  let element = document.createElement('div')
  let br = document.createElement('br')
  let btn = document.createElement('button')
  btn.innerHTML = 'Click me and look at the console!';

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.appendChild(br)
  element.appendChild(btn)
  btn.onclick=e=>{
    import(/* webpackChunkName:"print" */ './print').then((module)=>{
        let printMe=module.default
        printMe()
    })
  }

  return element
}


document.body.appendChild(getComponent())