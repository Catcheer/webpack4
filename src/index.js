

async function getComponent() {
  // let element = document.createElement('div');
  // var btn=document.createElement('button')
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick=PrintMe
  // element.appendChild(btn)

  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;


}

// document.body.appendChild(component());
getComponent().then(component => {
  document.body.appendChild(component);
})