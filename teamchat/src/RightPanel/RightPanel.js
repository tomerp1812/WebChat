import ContactProfile from "./ContactProfile/ContactProfile";
import Massages from "./Massages/Massages";
import WriteMassage from "./WriteMassage/WriteMassage";
import { useState } from "react";
import sentMassages from "./Massages/Sent/SentList";
import contacts from "../LeftPanel/Contacts/ContactsList";

function RightPanel({ selectedContact }) {

    const [sentList, setSentList] = useState(sentMassages);

    if (!selectedContact && contacts.length > 0) {
        selectedContact = contacts[0];
    }

    if (!selectedContact && contacts.length == 0) {
        return null;
    }

    const addMassage = function (q) {
        if (!selectedContact && contacts.length == 0) {
            
        } else{
            const newMassage = {
                sentTo: selectedContact.name,
                sent: q,
                time: new Date().toLocaleDateString()
            };     
            setSentList([...sentList, newMassage]);
        }
    }

    return (
        //<!--Profile contents-->
        <div className="content">
            <ContactProfile contact={selectedContact} />
            <Massages sentList={sentList} contact={selectedContact}/>
            <WriteMassage addMassage={addMassage} />
        </div>
    );
}

export default RightPanel;