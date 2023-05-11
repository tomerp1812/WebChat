import AddContact from "./AddContact/AddContact";
import Search from "./Search/Search";
import { useState } from "react";
import ContactListResults from "./Contacts/ContactListResults";
import contacts from "./Contacts/ContactsList";
import Profile from "./Profile/Profile";
import { doSearch } from "./Search/doSearch";
import { createNewContact } from "./Contacts/CreateNewContact";

//a side where the profile, search for contacts,
// the list of contacts and add contacts button
// is beeing showed
function LeftPanel({ sentList, changeContact, me }) {

    //lists of contats
    const [contactsList, setContactList] = useState(contacts);
    const [originalContactsList, setOriginalContactsList] = useState(contacts);

    //setter of the search for contacts
    const handleSearch = function (q) {
        const searchedContactsList = doSearch(originalContactsList, q);
        setContactList(searchedContactsList);
    }

    //setter of the list of conntacts when a new contacts is beeing created
    const handleNewContact = function (q) {
        createNewContact(originalContactsList, setOriginalContactsList, setContactList, q, me);
    };

    return (
        <div id="sidepanel">
            <Profile me={me} />
            <Search doSearch={handleSearch} />
            <ContactListResults sentList={sentList} contacts={contactsList} changeContact={changeContact} />
            <AddContact newContact={handleNewContact} />
        </div>
    );
}

export default LeftPanel;
