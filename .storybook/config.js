import { configure } from '@storybook/react';
import 'normalize.css';
import '../src/App.css';
const req = require.context('../stories', true, /.stories.js$/);

console.log(req.keys());

function loadStories() {
  req.keys().sort().reverse().forEach(filename => req(filename));
}

configure(loadStories, module);
