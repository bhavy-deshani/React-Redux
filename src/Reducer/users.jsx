import {RETRIVE_ALL_USERS} from "./../Action/type.jsx"
const initialState = {}
console.log("reducer/users.jsx ");
const usersReducer = (users=initialState,action) =>{
    const {type,payload} = action
    switch (type) {
        case RETRIVE_ALL_USERS:
            console.log("reducer/users.jsx allusers");
            return {...payload}
        default:
            return users
    }
}
export const selectUser = (state)=>state.users
export default usersReducer