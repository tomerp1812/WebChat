import AddContact from "./AddContact/AddContact";
import Search from "./Search/Search";
import { useState } from "react";
import ContactListResults from "./Contacts/ContactListResults";
import contacts from "./Contacts/ContactsList";
import Profile from "./Profile/Profile";
import { doSearch } from "./Search/doSearch";
import { createNewContact } from "./Contacts/CreateNewContact";


function LeftPanel({ sentList, changeContact, me }) {

    const [contactsList, setContactList] = useState(contacts);
    const [originalContactsList, setOriginalContactsList] = useState(contacts);

    const handleSearch = function (q) {
        const searchedContactsList = doSearch(originalContactsList, q);
        setContactList(searchedContactsList);
    }

    const handleNewContact = function (q) {
        createNewContact(originalContactsList, setOriginalContactsList, setContactList, q, me);
    };

    return (
        <div id="sidepanel">
            <Profile me={me}/>
            <Search doSearch={handleSearch} />
            <ContactListResults sentList={sentList} contacts={contactsList} changeContact={changeContact} />
            <AddContact newContact={handleNewContact} />
        </div>
    );
}

export default LeftPanel;
