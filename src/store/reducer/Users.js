export const userReducer =(state, action)=>{
    switch(action.type){
        case 'SET_USERS' : return {...state,users:action.payload};
        case "SET_ERROR": return {
            ...state,...action.payload
        };
        case "SET_LOADING":return {
            ...state,
            loading: action.payload
        };
        default :throw new Error('action type is not defined')

    }
}