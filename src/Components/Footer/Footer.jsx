import React from 'react'
import styles from './Footer.module.css'
import air from '../../assets/white.png'
import socials from '../../assets/socials.png'


const Footer = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.wrap}>
                <div className={styles.logo}>
                    <img src={air} alt="" className={styles.logoimg} />
                </div>
                <div className={styles.socials}>
                    <p>
                        Our social media accounts will be<br /> live soon.
                    </p>
                    <img src={socials} alt="" className={styles.icons} />
                </div>
                <div className={styles.links}>
                    <div>
                        <ul>
                            <li className={styles.titlelist}>Platform</li>
                            <li>Android</li>
                            <li>iOS</li>
                            <li>Chrome</li>
                            <li>Safari</li>
                            <li>Microsoft Edge</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className={styles.titlelist}>Team</li>
                            <li>Arpan Das</li>
                            <li>Ishika Saha</li>
                            <li>Saptarshi Bhattacharya</li>
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <li className={styles.titlelist}>Contact Us</li>
                        <li>abc@gmail.com</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
