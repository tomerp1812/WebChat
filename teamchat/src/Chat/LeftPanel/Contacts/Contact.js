function Contact({ contact, isSelected, onSelectContact, sentList }) {
    const selectedClass = isSelected ? "selected" : "";
  
    const lastMessage = sentList.filter(message => message.sentTo === contact.id).pop();
    let preview = lastMessage?.sent || "";

  if (preview.length > 20) {
    preview = preview.substring(0, 20) + "...";
  }
  
    return (
      <li onClick={() => onSelectContact(contact)} className={`contact ${selectedClass}`}>
        <div className="wrap">
          <span className="contact-status"></span>
          <img src={contact.image} alt="" />
          <div className="meta">
            <p className="name boldFont">{contact.name}</p>
            <p className="preview font_medium">{preview}</p>
            <span className="font_small">{lastMessage?.time || ""}</span>
          </div>
        </div>
      </li>
    );
  }
  
  export default Contact;
  