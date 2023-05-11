import { useNavigate } from "react-router-dom";
//Logout button
function Button() {
  // if pressed we navigate to Login page
  const navigate = useNavigate();
  const handleClick = function () {
    navigate('/');
  }

  return (
    // <!--Logout button--> 
    <button onClick={handleClick} type="button" className="btn btn-danger button">Logout</button>

  );
}

export default Button; 