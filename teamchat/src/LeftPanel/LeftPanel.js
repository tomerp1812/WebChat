import AddContact from "./AddContact/AddContact";
import Search from "./Search/Search";
import { useState } from "react";
import ContactListResults from "./Contacts/ContactListResults";
import contacts from "./Contacts/ContactsList";
import Profile from "./Profile/Profile";
import profilePictures from "../profilePicture";

function LeftPanel( {changeContact} ) {

    const [contactsList, setContactList] = useState(contacts);
    const [originalContactsList, setOriginalContactsList] = useState(contacts);

    const doSearch = function(q){
        if (q === "") {
            setContactList(originalContactsList);
        } else {
            setContactList(originalContactsList.filter((contact) => contact.name.includes(q)));
        }
    }

    const newContact = function(q) {
        const newFriend = {
          name: q,
          image: profilePictures[Math.floor(Math.random() * profilePictures.length)],
          massage: "",
          time: "",
        };
        setOriginalContactsList([...originalContactsList, newFriend]);
        setContactList([...originalContactsList, newFriend]);
      };

    return (
        <div id="sidepanel">
            <Profile/>
            <Search doSearch={doSearch} />
            <ContactListResults contacts={contactsList} changeContact={changeContact}/>
            <AddContact newContact={newContact}/>
        </div>
    );
}

export default LeftPanel;
