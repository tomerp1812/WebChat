import './App.css';
import Sent from './Sent/Sent';
import LeftPanel from './LeftPanel/LeftPanel';
import Replied from './Replied/Replied';

function App() {
  return (

    <>
      {/* <!--Logout button--> */}
      <button type="button" className="btn btn-danger button">Logout</button>


      <div id="frame">
        <LeftPanel/>

        {/* <!--Profile contents--> */}
        <div className="content">
          <div className="contact-profile">
            <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
              alt="" />
            <p className="boldFont">Yosi Choen</p>

          </div>
          {/* <!--Massages--> */}
          <div className="messages">
            <ul>
              <Sent/>
              <Replied/>
            </ul>
          </div>

          {/* <!--message-input--> */}
          <div className="message-input">
            <div className="wrap">
              <input className="form-control" type="text" placeholder="Write your message..."></input>
              <button className="submit">Send  <i className="bi bi-envelope"></i>
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
