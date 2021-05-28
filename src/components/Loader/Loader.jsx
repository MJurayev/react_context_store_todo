import React from 'react'
import st from './Loader.module.css'
export default function Loader({isLoading}) {
    const containerStyle = {
        opacity:isLoading ? 1 :0,
        visibitlity:isLoading ? 'visible' : 'hidden'
    }
    return (
        <div style={containerStyle} className={st.container}>
            <div className={st.loader}></div>    
        </div>
    )
}
