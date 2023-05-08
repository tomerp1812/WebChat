import './App.css';
import RegistrationTitle from './RegistrationTitle/RegistrationTitle';
import UserName from './UserName/UserName';
import Password from './Password/Password';
import DisplayName from './DisplayName/DisplayName';
import AddPicture from './AddPicture/AddPicture';
import RegisterButton from './RegisterButton/RegisterButton';
import LoginPageLink from './LoginPageLink/LoginPageLink';
import ConfirmPassword from './ConfirmPassword/ConfirmPassword';
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';


function App() {
  // const history = useHistory();

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
  //Confirm Password
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  //Display name
  const [displayName, setDisplayName] = useState('');
  const handleDisplayName = (event) => {
    setDisplayName(event.target.value);
  }
  //Add picture
  const [addPicture, setAddPicture] = useState('');
  const handleAddPicture = (event) => {
    setAddPicture(event.target.value);
  }

  //Submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    //handle username
    if (name.trim().length < 2 || name.trimEnd().length > 10) {
      alert('Username must be between 2 and 10 characters.');
      return;
    }
    //handle password
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    if (!regex.test(password)) {
      alert('Password must be 8-16 characters long and contain English letters and numbers.');
    }
    //handle confirm password
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    //handle display name
    if (displayName.trim().length < 2 || displayName.trimEnd().length > 10) {
      alert('Display name must be between 2 and 10 characters.');
      return;
    }
    //handle picture
    if (addPicture.trim().length==0) {
      alert('Please select a picture.');
      return;
    }
    //registration successful
    // history.push('/login'); // redirect to login page
  };

  return (
    <div className="background">
      <div className="login-box">
        <form>
          <RegistrationTitle />
          <UserName value={name} onChange={handleNameChange} />
          <Password value={password} onChange={handlePasswordChange} />
          <ConfirmPassword value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <DisplayName value={displayName} onChange={handleDisplayName} />
          <AddPicture value={addPicture} onChange={handleAddPicture} />
          <RegisterButton onClick={handleSubmit} />
          <LoginPageLink />
        </form>
      </div>
    </div>
  );
}

export default App;
