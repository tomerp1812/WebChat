import Add from "./Add";
import AddNewContactModal from "./AddNewContactModal";

function Modal({ newContact }) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <AddNewContactModal/>
                    <Add newContact={newContact} />
                </div>
            </div>
        </div>
    );
}

export default Modal;