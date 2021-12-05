import React from 'react'
import Member from '../Member/Member'
import team from '../../assets/airTeam.png'
import styles from './Team.module.css'

const Team = () => {
    return (
        <div className={styles.parent}>
            <img src={team} alt="team" />
            <p>The Air Team shares a common Vision, a platform for all, for all the Companies and Businesses out there to reach their ultimate Potential by helping them, by bringing their products in front of the whole World!</p>
            <div>
                <div className={styles.members}>
                    <Member name='Arpas Das' desc='Founder'/>
                    <Member name='Ishika Saha' desc='Co-Founder'/>
                    <Member name='Saptarshi Bhattacharya' desc='Co-Founder'/>
                </div>
            </div>
        </div>
    )
}

export default Team
