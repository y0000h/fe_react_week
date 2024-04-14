import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App from './charts/App';
// import App from './components/slider-fade'; // index.js 생략
// import App from './components/slider-shift'; // index.js 생략

// import App from './route_test/App';
// import App from './route_test/01_Route';
// import App from './route_test/15_UseEffect';

import reportWebVitals from './reportWebVitals'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 개발 모드에서 test 처리를 하므로 2번 처리 되는 것으로 사용 */}
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
