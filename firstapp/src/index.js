 import React from 'react';
 import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.jsx';
// // import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from "react-router-dom";

// // const root = ReactDOM.createRoot(document.getElementById('root'));
//     ReactDOM.render(

//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//     ,document.getElementById("root")
//     );

 const Name = "Aastha";
 const currentdate = new Date();
 const year = currentdate.getFullYear();
   
 const customStyle = {
  color: "red",
  border: "1px solid black",
 }

 ReactDOM.render(
   <div>
     <h1 style = {customStyle}>My name is {Name}</h1>
     <p style= {{color: "blue"}}>Current year is {year}</p>
   </div>,
   document.getElementById("root")
 );