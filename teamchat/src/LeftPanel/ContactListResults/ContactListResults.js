import Contact from "../Contact/Contact";

function ContactListResults({ contacts }){

    const contactsList = contacts.map((contact, key) => {
        return <Contact key={key} contact={contact} />;
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