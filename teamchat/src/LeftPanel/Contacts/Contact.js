function Contact( {contact, changeContact} ) {
    return (
        <li onClick={() => changeContact(contact)} className="contact">
            <div className="wrap">
                <span className="contact-status"></span>
                <img src={contact.image}
                    alt="" />
                <div className="meta">
                    <p className="name boldFont">{contact.name}</p>
                    <p className="preview font_medium">{contact.massage}</p>
                    <span className="font_small">{contact.time}</span>
                </div>
            </div>
        </li>
    );
}

export default Contact;