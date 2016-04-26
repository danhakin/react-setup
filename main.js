import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Title from './Title';

ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<Title name="Joe" />, document.getElementById('title'))

