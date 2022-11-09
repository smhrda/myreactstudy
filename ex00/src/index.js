import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// App.js에서 사용자 정의 태그(컴포넌트)를 가져와서 사용
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

// 싱글 페이지 어플리케이션 : HTML 하나로 컴포넌트를 교체해감으로써 화면을 구성하는 방법


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <App2 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
