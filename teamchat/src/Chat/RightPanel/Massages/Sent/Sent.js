//the messages that i sent to my contact, and my image
function Sent({ Massage, image }) {
  return (
    <li className="sent">
      <img src={image} alt="" />
      <p className="messageMargin">{Massage.sent}</p>
    </li>
  );
}

export default Sent;