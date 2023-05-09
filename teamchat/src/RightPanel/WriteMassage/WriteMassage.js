import { useRef } from "react";
function WriteMassage({ addMassage }) {

    const massageBox = useRef(null);
    const sendMassage = function () {
        if (massageBox.current.value != "") {
            addMassage(massageBox.current.value);
            massageBox.current.value = "";
        }
    }

    const handleKeyDown = function (event) {
        if (event.key === "Enter") {
            sendMassage();
        }
    }

    return (
        //<!--message-input-->
        <div className="message-input">
            <div className="wrap">
                <input onKeyDown={handleKeyDown}
                    ref={massageBox} className="form-control"
                    type="text" placeholder="Write your message..."></input>
                <button onClick={sendMassage}
                    className="submit">Send  <i className="bi bi-envelope"></i></button>
            </div>
        </div>
    );
}

export default WriteMassage;