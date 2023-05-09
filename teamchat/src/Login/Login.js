import LinkRegistration from "./LinkRegistration/LinkRegistration";
import LoginButton from "./LoginButton/LoginButton";
import Password from "./Password/Password";
import UserName from "./UserName/UserName";
import LoginTitle from "./LoginTitle/LoginTitle";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login({ list, setUser }) {

    const navigate = useNavigate();
    // Username
    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    // Password
    const [password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        let found = false;
        // check if the list is not empty
        if (list && list.length > 0) { 
          list.forEach((item) => {
            if(item.name === name && item.password === password){
              setUser(item);
              navigate('/Chat');
              found = true;
            }
          });
        }
        if (!found) {
          alert("Username or Password incorrect");
        }
      };      

    return (
        <div className=" background">
            <div className="login-box">
                <form>
                    <LoginTitle />
                    <UserName value={name} onChange={handleNameChange} />
                    <Password value={password} onChange={handlePasswordChange} />
                    <LoginButton onClick={handleClick} />
                    <LinkRegistration />

                </form>
            </div>
        </div>
    );
}

export default Login;