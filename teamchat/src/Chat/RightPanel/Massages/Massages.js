import SentListResults from "./Sent/SentListResults";

function Massages( {sentList, contact, image} ){

    return(
        // <!--Massages-->
        <div className="messages">
        <ul>
            <SentListResults Massages={sentList} contact={contact} image={image}/>
            {/* <Replied /> */}
        </ul>
    </div>
    );
}

export default Massages;