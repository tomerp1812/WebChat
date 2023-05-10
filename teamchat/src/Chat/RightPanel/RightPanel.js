import ContactProfile from "./ContactProfile/ContactProfile";
import Massages from "./Massages/Massages";
import WriteMassage from "./Massages/WriteMassage/WriteMassage";
import contacts from "../LeftPanel/Contacts/ContactsList";

function RightPanel({ selectedContact,image,addMassage,sentList }) {

    if (!selectedContact && contacts.length > 0) {
        selectedContact = contacts[0];
    }

    if (!selectedContact && contacts.length == 0) {
        return (
            <div className="welcome-message">
              <h2>Welcome to teamChat!</h2>
            </div>
          );          
    }

    return (
        //<!--Profile contents-->
        <div className="content">
            <ContactProfile contact={selectedContact} />
            <Massages sentList={sentList} contact={selectedContact} image={image}/>
            <WriteMassage addMassage={addMassage} />
        </div>
    );
}

export default RightPanel;