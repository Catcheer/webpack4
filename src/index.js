import _ from 'lodash';
import PrintMe from './print'


function component() {
    let element = document.createElement('div');
    var btn=document.createElement('button')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick=PrintMe
    element.appendChild(btn)


    return element;
  }
  
  document.body.appendChild(component());