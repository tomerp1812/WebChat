import Sent from "./Sent"
function SentListResults( {Massages, contact} ){
    const sentList = Massages.map((Massage, key) => {
        if(contact.name == Massage.sentTo){
            return <Sent key={key} Massage={Massage} />;
        }
    });
    return(
        <>{sentList}</>
    );
}

export default SentListResults;