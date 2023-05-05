import Contact from "./Contact/Contact";
import AddContact from "./AddContact/AddContact";
import Search from "./Search/Search";
import { useState } from "react";
import ContactListResults from "./ContactListResults/ContactListResults";
import contacts from "./ContactsList";
import Profile from "./Profile";

function LeftPanel() {

  
    const [contactsList, setContactList] = useState(contacts);

    const doSearch = function(q){
        setContactList(contacts.filter((contact) => contact.name.includes(q)));
    }

    return (
        <div id="sidepanel">
            <Profile/>
            <Search doSearch={doSearch} />
            <ContactListResults contacts={contactsList}/>
            <AddContact />
        </div>
    );
}

export default LeftPanel;