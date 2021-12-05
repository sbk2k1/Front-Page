import React from 'react'
import styles from './Devices.module.css'
import devices from '../../assets/App.png'
import icon1 from '../../assets/1.png'
import icon2 from '../../assets/2.png'
import icon3 from '../../assets/3.png'
import icon4 from '../../assets/4.png'

const Devices = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.left}>
                        <h1>Will be Available <br/>Soon.</h1>
                        <p>Air will be Everywhere. The Air app will be available soon in Apps Store as well as in Google Play Store. And also soon you can visit the Web App in almost every web Browsers out there in any device .</p>
                    <div className={styles.icons}>
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                        <img src={icon4} alt="" />
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={devices} alt="devices" className={styles.dev}/>
                </div>
            </div>
        </div>
    )
}

export default Devices
