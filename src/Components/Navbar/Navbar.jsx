import React from 'react'
import styles from './Navbar.module.css'
import search from '../../assets/search.png'

const Navbar = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.flex}>
                <p className={styles.text}>Home</p>
                <p className={styles.text}>Air Cloud</p>
                <p className={styles.text}>Platforms</p>
                <p className={styles.text}>About Us</p>
                <img src={search} alt='search' className={styles.icon} />
            </div>
            <div className={styles.smallerParent}>
                <button className={styles.b1}><img src={search} alt="" /></button>
            </div>
        </div>
    )
}

export default Navbar
