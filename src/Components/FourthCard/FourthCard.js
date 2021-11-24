import React from 'react'
import styles from './FourthCard.module.css'
import pic from '../../assets/App.png'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'

const FourthCard = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.text}>
                <h1>Will be Available<br /> soon on.</h1>
                <p>All platforms like iOS, Android and also on browsers like chrome, Safari and so on.all platforms like iOS, Android and also on browsers like chrome, Safari and so on.all platforms like iOS, Android and also on browsers like chrome.</p>
                <div className={styles.icons}>
                    <img src={one} className={styles.icon} />
                    <img src={two} className={styles.icon} />
                    <img src={three} className={styles.icon} />
                    <img src={four} className={styles.icon} />
                </div>
            </div>
            <div className={styles.image}>
                <img className={styles.app} src={pic} />
            </div>
        </div>
    )
}

export default FourthCard
