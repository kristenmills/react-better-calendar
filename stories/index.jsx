import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import Calendar from '../src/js/Calendar';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Calendar')} />
  ));

storiesOf('Calendar', module)
  .add('with default params', () => (
    <Calendar />
  ));
