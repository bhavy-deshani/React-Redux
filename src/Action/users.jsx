import UserService from "../Services/UserService"


export const retierveUsers= ()=>async(dispatch)=>{
    console.log("called from redux action");
    const ResData = await UserService.getAllUsers();
    return dispatch({type:"RETRIVE_ALL_USERS",payload:ResData["data"]})
}
export const saveUsers= (insertData)=>async(dispatch)=>{
    console.log("saveUsers called from redux action ",insertData);
    const ResData = await UserService.insertNewUsers();
    // return ResData
    return dispatch({type:"RETRIVE_ALL_USERS",payload:ResData["data"]})
}
export const LoginUsers = (uname,pass)=>async(dispatch)=>{
    console.log("saveUsers called from redux action ",insertData);
    const ResData = await UserService.selectUsersForLogin();
    // return ResData
    return dispatch({type:"RETRIVE_ALL_USERS",payload:ResData["data"]})
}