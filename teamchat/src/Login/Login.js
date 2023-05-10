import LinkRegistration from "./LinkRegistration/LinkRegistration";
import LoginButton from "./LoginButton/LoginButton";
import Password from "./Password/Password";
import UserName from "./UserName/UserName";
import LoginTitle from "./LoginTitle/LoginTitle";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import WebTitle from "../Registration/WebTitle/WebTitle";

function Login({ list, setUser }) {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  // Username
  const [name, setName] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
    setErrorMessage('');

  };
  // Password
  const [password, setPassword] = useState('');
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage('');

  };

  // if the user enter correct username and password- move to chat screen
  // else print Username or Password incorrect message
  const handleClick = (event) => {
    let found = false;
    // check if the list is not empty
    if (list && list.length > 0) {
      list.forEach((item) => {
        // goes through all the users in the array and checks if the username and password match them
        if (item.name === name && item.password === password) {
          setUser(item);
          navigate('/Chat');
          found = true;
        }
      });
    }
    if (!found) {
      setErrorMessage("Username or Password incorrect");
    }
  };

  return (
    <div className=" background">
      <div className="login-box">
        <form>
          <WebTitle />
          <LoginTitle />
          <UserName value={name} onChange={handleNameChange} />
          <Password value={password} onChange={handlePasswordChange} />
          {errorMessage && <h6 className='font_error'>{errorMessage}</h6>}
          <LoginButton onClick={handleClick} />
          <LinkRegistration />

        </form>
      </div>
    </div>
  );
}

export default Login;