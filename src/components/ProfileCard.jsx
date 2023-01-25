import React from 'react'
import styles from './ProfileCard.module.css'

const profileCard = () => {
  return (
    <>
        <section className={styles.profile}>
          <div className={styles.profile__data}>
            <div className={styles.profile__image}>
              <img src="src/assets/images/image-jeremy.png" alt="Image Jeremy" />
            </div>
            <div className={styles.profile__text}>
              <p>Report for</p>
              <h1>Jeremy Robsom</h1>
            </div>
          </div>
          <div className={styles.profile__nav}>
            <ul>
              <li><a href="">Daily</a></li>
              <li><a href="">Weekly</a></li>
              <li><a href="">Monthly</a></li>
            </ul>
          </div>
        </section>  
          
    </>
  )
}

export default profileCard;