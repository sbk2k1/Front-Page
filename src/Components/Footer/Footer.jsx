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
                    <div className={styles.flexSocials}>
                        <p>
                            Our social media accounts will be<br /> live soon.
                        </p>
                        <img src={socials} alt="" className={styles.icons} />
                    </div>

                </div>
                <div className={styles.links}>
                    <div>
                        <ul>
                            <li className={styles.titlelist}>Platform</li>
                            <li className={styles.list}>Android</li>
                            <li className={styles.list}>iOS</li>
                            <li className={styles.list}>Chrome</li>
                            <li className={styles.list}>Safari</li>
                            <li className={styles.list}>Microsoft Edge</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className={styles.titlelist}>Team</li>
                            <li className={styles.list}>Arpan Das</li>
                            <li className={styles.list}>Ishika Saha</li>
                            <li className={styles.list}>Saptarshi Bhattacharya</li>
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <li className={styles.titlelist}>Contact Us</li>
                        <li className={styles.list}>mailairofficial@gmail.com</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
