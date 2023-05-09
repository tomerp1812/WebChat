import Button from './Button/Button';
import BigBlock from './BigBlock/BigBlock';
// import { useNavigate } from "react-router-dom";

function Chat( {user} ) {
  // const navigate = useNavigate();
  // if(!user){
  //   navigate("/");
  // }

  return (
    <>
      <Button />
      <BigBlock me={user}/>
    </>
  );
}

export default Chat;
