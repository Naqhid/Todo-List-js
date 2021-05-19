import { renderPage } from './gui';
import { getState } from './state';

// Initialize projects storage
//
window.projects = [];



const root = document.querySelector('main');

getState().then(() => {
  renderPage(root, window.projects[0], window.projects);
})

