import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import { useState } from "react";

//the chat block contains the chat and the contacts panel
function BigBlock({ me }) {

  const [selectedContact, setSelectedContact] = useState(null);
  const [sentList, setSentList] = useState([]);

  //each time sent message we add it to the sentList
  const addMassage = function (message) {
    const newMassage = {
      sentTo: selectedContact.id,
      sent: message,
      time: new Date().toLocaleString('en-GB', {
        hour: 'numeric', minute: 'numeric',
        day: 'numeric', month: 'numeric', year: 'numeric'
      })
    };
    setSentList([...sentList, newMassage]);
  }

  //setter for the selected contact
  const changeContact = function (contact) {
    setSelectedContact(contact);
  };

  return (
    <div id="frame">

      {/* contacts, profile and search for contacts */}
      <LeftPanel sentList={sentList} changeContact={changeContact} me={me} />

      {/* messages, contact profile and input messages */}
      <RightPanel selectedContact={selectedContact} image={me.addPicture}
        sentList={sentList} addMassage={addMassage} />

    </div>
  );
}

export default BigBlock;