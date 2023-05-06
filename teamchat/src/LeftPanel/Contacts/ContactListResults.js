import Contact from "./Contact";

function ContactListResults({ contacts, changeContact }){

    const contactsList = contacts.map((contact, key) => {
        return <Contact key={key} contact={contact} changeContact={changeContact} />;
    });

    return(
        //<!--contacts-->
         <div id="contacts">
         <ul>
             {contactsList}
         </ul>
       </div>
    );
}

export default ContactListResults