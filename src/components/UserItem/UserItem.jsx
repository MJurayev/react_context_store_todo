import React from 'react'
import st from './UserItem.module.css'
export default function UserItem({info}) {
    return (
        <div className={st.container}>
            <div className={st.name}>{info.name}</div>
            <div className={st.username}>{info.username}</div>
            <button className="btn ml-auto mr-1 btn-sm btn-danger " style={{marginRight:'10px'}}>Delete</button>
            <button className="btn btn-sm btn-info">Edit</button>
        </div>
    )
}
