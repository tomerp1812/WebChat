function Password({ value, onChange }){
    return(
        // <!--Password-->
        <input value={value} onChange={onChange} className="form-control marginMedium" type="password" placeholder="Password"></input>
    );
}

export default Password;