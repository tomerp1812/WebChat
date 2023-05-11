function Profile({me}) {
    return (
         //<!--Profile image and name-->
        <div id="profile">
            <div className="wrap">
                <img id=""
                    src={me.addPicture}
                    alt="" />
                <p className="boldFont">{me.name}</p>
            </div>
        </div>
    );
}

export default Profile;