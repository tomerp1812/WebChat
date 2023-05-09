function Sent( {Massage, image} ) {
    return (
        <li className="sent">
        <img src={image} alt="" />
        <p>{Massage.sent}</p>
      </li>
    );
}

export default Sent;