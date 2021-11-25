import React from 'react'
import styles from './FifthCard.module.css'
import team from '../../assets/Group 16.png'
import Member from '../Member/Member'

const FifthCard = () => {
    return (
        <div className={styles.parent}>
            <h1 className={styles.teamh}>Our Team.</h1>
            <p className={styles.teamp}>All platforms like iOS, Android and also on browsers like chrome, Safari and so on.all platforms like iOS, Android and also on browsers like chrome, Safari and so on.all platforms like iOS, Android and also on browsers like chrome, Safari and so on.all platforms like iOS, Android and also on browsers like chrome, Safari and so on.</p>
            <img className={styles.teamphoto} src={team}/>
            <div className={styles.members}>
                <Member className={styles.member}/>
                <Member className={styles.member}/>
                <Member className={styles.member}/>
            </div>
        </div>
    )
}

export default FifthCard
