import { configure } from '@kadira/storybook';
import '../src/css/Calendar.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
