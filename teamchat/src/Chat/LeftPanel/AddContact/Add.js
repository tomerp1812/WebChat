import { useRef } from "react";
function Add({ newContact }) {

    const friendBox = useRef(null);
    const addFriend = function () {
        if (friendBox.current.value != "") {
            newContact(friendBox.current.value);
            friendBox.current.value = "";
        }
    }

    const handleKeyDown = function (event) {
        if (event.key === "Enter") {
            addFriend();
        }
    }

    return (
        <>
            <div className="modal-body">
                <input onKeyDown={handleKeyDown} ref={friendBox} className="form-control" type="text" placeholder="Contact's identifier"></input>
            </div>
            <div className="modal-footer">
                <button onClick={addFriend} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Add</button>
            </div>
        </>
    );
}

export default Add;