import React from 'react'
import styles from './Cloud.module.css'
import cloud from '../../assets/airCloud.png'

const Cloud = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.flex}>
            <img src={cloud} alt='cloud' />
            <p>This is Air Cloud, an Ecosystem. Air is all about the Collaboration with the other companies and bringing them forward through the incredible platform. Together, all the companies joining Air, create the Air Cloud. Air Cloud will let people Interact with all the amazing products of the companies and make them readily Available for everyone.</p>
            </div>
        </div>
    )
}

export default Cloud
