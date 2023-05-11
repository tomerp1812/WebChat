import React from 'react';
import ReactDOM from 'react-dom/client';
import Registration from './Registration/Registration';
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
          <Route path="/" element={<Login list={list} setUser={setUser} />} exact />
          <Route path="/registration" element={<Registration list={list} setList={setList} />} />
          <Route path="/Chat" element={user ? <Chat user={user} /> : <Navigate replace to='/' />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

root.render(<App />);
