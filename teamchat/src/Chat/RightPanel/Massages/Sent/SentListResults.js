import Sent from "./Sent"
function SentListResults( {Massages, contact, image} ){
    const sentList = Massages.map((Massage, key) => {
        if(contact.id == Massage.sentTo){
            return <Sent key={key} Massage={Massage} image={image}/>;
        }
    });
    return(
        <>{sentList}</>
    );
}

export default SentListResults;