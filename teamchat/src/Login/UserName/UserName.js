function UserName({ value, onChange }){
    return(
        // <!--Username-->
        <input value={value} onChange={onChange} className="form-control marginMedium " type="text" placeholder="Username"></input>
    );
}

export default UserName;