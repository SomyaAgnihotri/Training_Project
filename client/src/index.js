import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './login.css';
import './DashboardAdmin.css';
import './DashboardStudent.css';
import './DashboardTeacher.css';
import './RegistrationWindow.css';
// import Admindash from './Admindash' ;
// import App from './App';
// import Loginh from './Loginh';
import reportWebVitals from './reportWebVitals';
import Mainfile from './Mainfile';
// import VerifyWindow from './VerifyWindow';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Loginh/> */}
    {/* <App /> */}
    <Mainfile/>
    {/* <Admindash/> */}
    {/* <RegisterWindow/> */}
    {/* <VerifyWindow/> */}
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
