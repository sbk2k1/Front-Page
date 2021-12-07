import React from 'react'
import Member from '../Member/Member'
import team from '../../assets/airTeam.png'
import styles from './Team.module.css'
import IS from '../../assets/ISpic.png'
import SB from '../../assets/SBpic.png'
import AD from '../../assets/AD.png'

const Team = () => {
    return (
        <div className={styles.parent}>
            <img src={team} alt="team" className={styles.airTeam}/>
            <p>The Air Team shares a common Vision, a platform for all, for all the Companies and Businesses out there to reach their ultimate Potential by helping them, by bringing their products in front of the whole World!</p>
            <div>
                <div className={styles.members}>
                    <Member name='Arpas Das' desc='Founder' link={AD} mail='maildasarpan@gmail.com'/>
                    <Member name='Ishika Saha' desc='Co-Founder' link={IS} mail='mailairofficial@gmail.com'/>
                    <Member name='Saptarshi Bhattacharya' desc='Co-Founder' link={SB} mail='bhattacharyasaptarshi2001@gmail.com'/>
                </div>
            </div>
        </div>
    )
}

export default Team
