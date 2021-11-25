import React from 'react'
import me from '../../assets/me.png'
import styles from './Member.module.css'

const Member = (image, name, desc) => {
    return (
        <div className={styles.parent}>
            {/* <img src={image}/>
            <h1>{name}</h1>
            <p>{desc}</p> */}

            <img src={me} />
            <div className={styles.text}>
                <h1>Saptarshi Bhattacharya</h1>
                <p>Full-Stack MERN Developer. ML Enthusiast. Working on Blockchains and Cryptocurrency.</p>
            </div>
        </div>
    )
}

export default Member
