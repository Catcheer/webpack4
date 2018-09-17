
// import printMe from './print.js';
// import _ from 'lodash'

let printMe

import(
  /* webpackPrefetch:true */
  /* webpackChunkName:"print" */
  './print').then(({ default: res }) => {
    printMe = res
  })


async function getLodash() {
  let { default: _ } = await import(/* webpackChunkName:"lodash" */ 'lodash')
  console.log('lodash loaded')
  return _
}




function getComponent(_) {

  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack','webpackDevServer'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = function () {

    printMe()
  }

  element.appendChild(btn);
  return element;

}


  getLodash().then((_) => {
    document.body.appendChild(getComponent(_));
  })



