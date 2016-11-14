//main dependency
import React from 'react';
import ReactDOM from 'react-dom';

//root component
import App from './js/App';

//styles
require('!style!css!sass!./styles/main.scss');

//transform root into App component
ReactDOM.render(<App />, document.getElementById('root'));
