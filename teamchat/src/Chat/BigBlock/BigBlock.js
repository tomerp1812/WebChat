import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import { useState } from "react";

function BigBlock( {me} ) {

  const [selectedContact, setSelectedContact] = useState(null);
  const [sentList, setSentList] = useState([]);

  const addMassage = function (message) {
        const newMassage = {
            sentTo: selectedContact.id,
            sent: message,
            time: new Date().toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric',
             day: 'numeric',month: 'numeric', year: 'numeric' })
        };  
        setSentList([...sentList, newMassage]);
}

  const changeContact = function (contact) {
    setSelectedContact(contact);
  };

  return (
    <div id="frame">
      <LeftPanel sentList={sentList} changeContact={changeContact} me={me}/>
      <RightPanel selectedContact={selectedContact} image={me.addPicture} 
      sentList={sentList} addMassage={addMassage}/>
    </div>
  );
}

export default BigBlock;