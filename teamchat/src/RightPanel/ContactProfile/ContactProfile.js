function ContactProfile({ contact }) {

    if (!contact) {
        return (
            <div className="contact-profile"></div>
        );
    }

    return (
        <div className="contact-profile">
            <img src={contact.image} alt="" />
            <p className="boldFont">{contact.name}</p>
        </div>
    );
}

export default ContactProfile;