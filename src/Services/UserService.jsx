import httpanything from "./../http-common.jsx";
console.log("out side service");
const getAllUsers = ()=>{
    console.log("inside service all users");
    return httpanything.get("users") 
}
const insertNewUsers = ()=>{
    console.log("insert user");
    return httpanything.post("users") 
}
const selectUsersForLogin = (username,password)=>{
    console.log("insert user");
    return httpanything.get(`users?username=${username}&password=${password}`) 
}


const UserService = {
    getAllUsers,
    insertNewUsers,
    selectUsersForLogin
}

export default UserService;