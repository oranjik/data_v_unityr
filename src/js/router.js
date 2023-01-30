// router.js
const root = document.querySelector('.content');
const unityTemplate = require('../graph-fp01.html');
const indexTemplate = require('../game.html');

const routes = {
  '/unity': unityTemplate, 
  '/index': indexTemplate
};

/**
 * HTML 렌더링
 * @returns html
 */
const render = async () => {
  try {
    const hash = location.hash.replace('#', '');
    const res = routes[hash];
    if (!res) { 
      root.innerHTML = `${hash} Not Found`;
      return;
    }
    
    root.innerHTML = res; 
    return hash;
  } catch (err) {
    console.error(err);
  }
};

export {
  render
}