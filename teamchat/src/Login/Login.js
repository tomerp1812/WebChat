import LinkRegistration from "./LinkRegistration/LinkRegistration";
import LoginButton from "./LoginButton/LoginButton";
import Password from "./Password/Password";
import UserName from "./UserName/UserName";
import LoginTitle from "./LoginTitle/LoginTitle";
import { useState } from 'react';

function Login({ list }) {

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
        // check if the list is not empty
        if (list && list.length > 0) { 
            list.forEach((item) => {
                if(item.name === name && item.password === password){
                    alert("happy :)")
                    return;
                }
                if(item.name !== name ){
                    alert("Username is incorrect");
                }else{
                    alert("Password is incorrect");

                }
            });
        } else {
            alert("Account does not exist");
            return;
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