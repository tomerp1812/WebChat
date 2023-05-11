// the contact that beeing showed on the left
function Contact({ contact, isSelected, onSelectContact, sentList }) {
  //const variable to check if a contact is beeing selected
  const selectedClass = isSelected ? "selected" : "";

  //take the last message
  const lastMessage = sentList.filter(message => message.sentTo === contact.id).pop();
  let preview = lastMessage?.sent || "";

  //check if the last message is longer than 20 letters
  if (preview.length > 20) {
    preview = preview.substring(0, 20) + "...";
  }

  //show the contact, his last message it's time and his picture
  //also if we hover or select a contact it shows a different color
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
