import  { useCallback, useEffect } from 'react'
import { useUsers } from '../store/Context/UserProvider'
import UserItem from './UserItem/UserItem'
import st from './Users.module.css'
import * as  userFunctions  from '../store/actions/UserAction'
import Loader from './Loader/Loader'
export default function Users() {
    const [userState, userDispatch] = useUsers();
    const handleInfo=useCallback(async ()=>{
        await userFunctions.getUsers(userDispatch);
        console.log('handle users')
        userFunctions.setLoading(userDispatch, false)
    }, [userDispatch])
    
    useEffect(()=>{
        handleInfo()
    }, [handleInfo])

    const {users, loading, error, message} = userState;
    return (
            <div className={st.container}>
                <h3 >Users</h3>
        <div className={st.userList}>
            <Loader isLoading={loading}/>
            {error && <p>{message}</p>}
            {users && users.length>0 ? (users.map((x, key)=>{
                return <UserItem info={x} key={key}/>
            })) :(!loading && 'No found users')}
        </div>
      </div>
    )
}
