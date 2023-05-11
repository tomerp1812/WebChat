import Contact from "./Contact";
import { useState } from "react";
//creating for all the contacts a ul
function ContactListResults({ sentList, contacts, changeContact }) {

  //selected contact setter and getter
  const [selectedContact, setSelectedContact] = useState(null);

  //if a contacts selected we want to set him as selected, and
  //send it to the right side with changeContact to see his messages
  //and see his profile
  const onSelectContact = (contact) => {
    setSelectedContact(contact);
    changeContact(contact);
  };

  //make a list of all the contacts
  const contactsList = contacts.map((contact, key) => {
    const isSelected = contact === selectedContact;
    return <Contact key={key} isSelected={isSelected} sentList={sentList}
      contact={contact} onSelectContact={onSelectContact} />;
  });

  return (
    //<!--contacts-->
    <div id="contacts">
      <ul className="listClass">
        {contactsList}
      </ul>
    </div>
  );
}

export default ContactListResults