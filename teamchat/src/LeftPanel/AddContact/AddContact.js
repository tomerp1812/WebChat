import Add from "./Add";

function AddContact( {newContact} ) {

  return (
    //  <!--Add contacts-->
    <div id="bottom-bar">
      <button id="addcontact" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Add contact</span>
        <i className="bi bi-person-plus"></i>
      </button>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title addNewContact">Add new contact</h1>
            </div>
            <Add newContact={newContact}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContact;