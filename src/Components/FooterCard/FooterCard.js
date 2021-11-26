import React from 'react'
import styles from './FooterCard.module.css'

const FooterCard = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.logo}></div>
            <div className={styles.socials}></div>
            <div className={styles.links}></div>
        </div>
    )
}

export default FooterCard
