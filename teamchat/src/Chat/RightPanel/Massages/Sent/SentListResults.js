import Sent from "./Sent"
//a function that takes the list of all the messages,
//and filters only those that the id of the contact
//that im messaging to will be shown
function SentListResults({ Massages, contact, image }) {
    const sentList = Massages.map((Massage, key) => {
        if (contact.id == Massage.sentTo) {
            return <Sent key={key} Massage={Massage} image={image} />;
        }
    });
    return (
        <>{sentList}</>
    );
}

export default SentListResults;