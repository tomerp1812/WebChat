//a function that shows the image and the name of the contact we messaging with
function ContactProfile({ contact }) {

    if (!contact) {
        return (
            <>
            <div className="contact-profile"></div>
            <p className="boldFont contactBackgroundColor"></p>
            </>
        );
    }

    return (
        <div className="contact-profile">
            <img src={contact.image} alt="" />
            <p className="boldFont contactBackgroundColor">{contact.name}</p>
        </div>
    );
}

export default ContactProfile;