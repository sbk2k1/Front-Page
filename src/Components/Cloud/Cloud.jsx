import React from 'react'
import styles from './Cloud.module.css'
import cloud from '../../assets/airCloud.png'

const Cloud = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.flex}>
            <img src={cloud} alt='cloud' />
            <p>This is Air Cloud, an <b>Ecosystem</b>. Air is all about the <b>Collaboration</b> with the other companies and bringing them forward through the incredible platform. <b>Together</b>, all the companies joining Air, create the <b>Air Cloud</b>. Air Cloud will let people <b>Interact</b> with all the amazing products of the companies and make them readily <b>Available</b> for Everyone.</p>
            </div>
        </div>
    )
}

export default Cloud
