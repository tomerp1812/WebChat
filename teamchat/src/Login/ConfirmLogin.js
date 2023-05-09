function ConfirmLogin(props,{ name, password }){
    // event.preventDefault();
    const user = props.user.find(
        (user) => user.name === name && user.password === password
    );

    if (user) {
        console.log("hiiii");
    } else {
        console.log("biiii");
    }
    return(
        console.log("hii")
    );
};

export default ConfirmLogin;