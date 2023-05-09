function Sent( {Massage} ) {
    return (
        <li className="sent">
        <img src="basket.jpeg" alt="" />
        <p>{Massage.sent}</p>
      </li>
    );
}

export default Sent;