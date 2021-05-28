import { createContext, useContext, useReducer } from 'react'
import { userReducer } from '../reducer/Users';

const UserContext = createContext()
export default function UserProvider({children}) {
    const initialState = {
        users: [],
        loading: false,
        error: false,
        message: ""
      };

    const [state, dispatch] = useReducer(userReducer, initialState)

    return (
        <UserContext.Provider value={{state, dispatch}}>
            <UserContext.Consumer>
                {
                    ()=>children
                }
            </UserContext.Consumer>
        </UserContext.Provider>
    )
}

export const  useUsers=()=>{
    const {state, dispatch} = useContext(UserContext)
    return [state, dispatch]
}