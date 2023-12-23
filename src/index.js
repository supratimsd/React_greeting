import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
let curDate=new Date(2023,12,21,22);
curDate=curDate.getHours();
let greet="";
let cssStyle={}
if(curDate>=1 && curDate<=11){
  greet="Good Morning"
  cssStyle.color="orange"
}else if(curDate>=12 && curDate<20){
  greet="Good Afternoon"
  cssStyle.color="blue"
}
else{
  greet="Good Night"
  cssStyle.color="red"
}

ReactDOM.render(
    <>
      <div>
        <h1>Hello sir, <span style={cssStyle}>{greet}</span></h1>
      </div>  
    </>,
    document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
