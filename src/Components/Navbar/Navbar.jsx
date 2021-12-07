import React from 'react'
import styles from './Navbar.module.css'
import search from '../../assets/search.png'
import air from '../../assets/Group 18.png'

const Navbar = () => {
    return (
        <div className={styles.parent1}>
            <div className={styles.flex}>
                <p className={styles.textNav}>Home</p>
                <p className={styles.textNav}>Air Cloud</p>
                <p className={styles.textNav}>Platforms</p>
                <p className={styles.textNav}>About Us</p>
                <img src={search} alt='search' className={styles.icon} />
            </div>
            <button className={styles.b1}><img className={styles.airBtn} src={air} alt="" /></button>

        </div>
    )
}

export default Navbar
