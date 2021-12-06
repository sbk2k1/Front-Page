import React from 'react'
import Cloud from '../Cloud/Cloud';
import Desc from '../Desc/Desc';
import Devices from '../Devices/Devices';
import Footer from '../Footer/Footer';
import Team from '../Team/Team';
import styles from './Rest.module.css'

const Rest = () => {
    return (
        <div className={styles.second}>
            <Desc />
            <Cloud />
            <Devices />
            <Team />
            <Footer />
        </div>
    )
}

export default Rest
