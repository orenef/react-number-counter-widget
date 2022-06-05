import React from 'react';
import ReactDOM from 'react-dom';
import { NumberWidgetCounter } from '../NumberWidgetCounter';
ReactDOM.render(
  <div>
    <NumberWidgetCounter key={'111'} number={17000} useClass={''} timeMs={3000}/>
    <NumberWidgetCounter key={'222'} number={50} useClass={''} timeMs={3000} />
  </div>
  ,
  document.getElementById('root'),
);
