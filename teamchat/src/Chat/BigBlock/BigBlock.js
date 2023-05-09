import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import { useState } from "react";

function BigBlock( {me} ) {

  const [selectedContact, setSelectedContact] = useState(null);

  const changeContact = function (contact) {
    setSelectedContact(contact);
  };

  return (
    <div id="frame">
      <LeftPanel changeContact={changeContact} me={me}/>
      <RightPanel selectedContact={selectedContact} image={me.addPicture}/>
    </div>
  );
}

export default BigBlock;