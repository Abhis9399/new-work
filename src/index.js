import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Loading1 from './components/Loading1/loading1';
// import Loading2 from './components/Loading1/loading2';
// import Loading3 from './components/Loading1/loading3';
// import Loading4 from './components/Loading1/loading4';
// import Loading5 from './components/Loading1/loading5';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
        {/* <Loading1 /> */}
        {/* <Loading2 />
        <Loading3 />
        <Loading4 />
        <Loading5 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
