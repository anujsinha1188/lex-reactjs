import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
import Timer from './05_React Component Lifecycle Methods/03_Demo_Unmounting Phase.jsx';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Timer/>, document.getElementById('root'));
setTimeout(() => {
    ReactDOM.unmountComponentAtNode( document.getElementById('root') );
   }, 15000);
serviceWorker.unregister();
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
