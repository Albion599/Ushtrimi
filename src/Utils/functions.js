const checkUser = () => {
    const user = localStorage.getItem("token");
    if (user) {
        return true;
    }
    return false;
}

export {
    checkUser,
}
