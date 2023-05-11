import React from 'react';
import ReactDOM from 'react-dom/client';
import Registration from './Registration/Registration';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Chat from './Chat/Chat';
import DetailsList from './Registration/DetailsList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [list, setList] = useState(DetailsList);
  const [user, setUser] = useState(null);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login list={list} setUser={setUser}/>} exact />
          <Route path="/registration" element={<Registration list={list} setList={setList}/>} />
          <Route path="/Chat" element={user ? <Chat user={user}/> : <Navigate replace to='/'/>}/>
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

