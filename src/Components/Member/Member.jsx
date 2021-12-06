import React from 'react'
import styles from './Member.module.css'
import air from '../../assets/Group 18.png'

const Member = (props) => {
    return (
        <div className={styles.memberCard}>
            <div className={styles.info}>
                <ul className={styles.text}>
                    <li className={styles.air}><img src={air} alt="air" className={styles.airImage}/></li>
                    <li><h2 className={styles.name}>{props.name}</h2></li>
                    <li><p className={styles.desc}>{props.desc}</p></li>
                    <li><p className={styles.mail}>abcd@gmail.com</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Member
