import { useNavigate } from "react-router-dom";
function Button(){
    const navigate = useNavigate();
    const handleClick = function(){
      navigate('/');
    }

    return(
        // <!--Logout button--> 
      <button onClick={handleClick} type="button" className="btn btn-danger button">Logout</button>

    );
}

export default Button; 