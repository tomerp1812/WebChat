import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import { useState } from "react";

function BigBlock() {

  const [selectedContact, setSelectedContact] = useState(null);

  const changeContact = function (contact) {
    setSelectedContact(contact);
  };

  return (
    <div id="frame">
      <LeftPanel changeContact={changeContact} />
      <RightPanel selectedContact={selectedContact} />
    </div>
  );
}

export default BigBlock;