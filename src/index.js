
import PrintMe from './print.js'

async function getLodash() {
  let { default: _ } = await import(/* webpackChunkName:"lodash" */ 'lodash')
  console.log('lodash loaded')
  return _
}




function getComponent(_) {

  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack', 'webpackDevServer'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = function () {
    PrintMe()
  }

  element.appendChild(btn);
  return element;

}


getLodash().then((_) => {
  document.body.appendChild(getComponent(_));
})

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    PrintMe()
  })
}

