import Contact from "./Contact";
import { useState } from "react";
function ContactListResults({ sentList, contacts, changeContact }){

    const [selectedContact, setSelectedContact] = useState(null);

    const onSelectContact = (contact) => {
      setSelectedContact(contact);
      changeContact(contact);
    };

    const contactsList = contacts.map((contact, key) => {
        const isSelected = contact === selectedContact;
        return <Contact key={key} isSelected={isSelected} sentList={sentList}
         contact={contact} onSelectContact={onSelectContact}/>;
    });

    return(
        //<!--contacts-->
         <div id="contacts">
         <ul className="listClass">
             {contactsList}
         </ul>
       </div>
    );
}

export default ContactListResults