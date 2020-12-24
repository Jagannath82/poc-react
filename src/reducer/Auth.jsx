const initialState = {};
  
export function authReducer(state = initialState, action) {
    if (action.type === "ADD_USER_PROFILE") {
        state = {...state, userprofile : action.payload};
    }
    return state;
}
export default authReducer;