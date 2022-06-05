# react-number-counter-widget
![npm](https://img.shields.io/npm/v/react-number-counter-widget) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-number-counter-widget) ![GitHub top language](https://img.shields.io/github/languages/top/orenef/react-number-counter-widget) ![npm](https://img.shields.io/npm/dt/react-number-counter-widget) ![NPM](https://img.shields.io/npm/l/react-number-counter-widget) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/orenef/react-number-counter-widget)

react-number-counter-widget is react component use to add counter up animation for number-widget

codesandbox demo -> [Demo]()
## Installation

Use the package manager [npm](https://www.npmjs.com/package/react-number-counter-widget) to install .

```bash
npm install react-number-counter-widget
```

## Usage

```jsx
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
```

props| type | default value| info
--- | --- | --- | ---
number | number | undefined | Count up to this number
useClass | string | undefined | Class name for the counter wrapper
factor | number | 1 | Use To speed up/down counter 
timeMs | number | undefined | Used To finish counter in given time (approximately)
stop | () => boolean | stop on given number | Use to change stopping counter condition 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)