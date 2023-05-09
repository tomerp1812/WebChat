import React from 'react';
import ReactDOM from 'react-dom/client';
import Registration from './Registration/Registration';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Chat from './Chat/Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [list, setList] = useState([]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login list={list}/>} exact />
          <Route path="/registration" element={<Registration list={list} setList={setList}/>} />
          <Route path="/Chat" element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

