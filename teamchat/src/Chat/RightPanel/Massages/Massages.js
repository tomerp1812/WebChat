import SentListResults from "./Sent/SentListResults";

function Massages( {sentList, contact} ){

    return(
        // <!--Massages-->
        <div className="messages">
        <ul>
            <SentListResults Massages={sentList} contact={contact}/>
            {/* <Replied /> */}
        </ul>
    </div>
    );
}

export default Massages;