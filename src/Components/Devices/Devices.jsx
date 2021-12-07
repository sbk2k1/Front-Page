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
                        <h1 className={styles.head1}>Will be Available <br/>Soon.</h1>
                        <p className={styles.para1}>Air will be <b>Everywhere</b>. The Air app will be available soon in <b>App Store</b> as well as in <b>Google Play Store</b>. And also soon you can visit the <b>Web App</b> in almost every web <b>Browsers</b> out there in any device .</p>
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
