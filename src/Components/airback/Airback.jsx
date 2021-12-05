import React from 'react'
import airbacc from '../../assets/airback.png'
import styles from './Airback.module.css'

const airback = () => {
    return (
        <div className={styles.parent}>
            <img src={airbacc} alt="air"/>
        </div>
    )
}

export default airback
