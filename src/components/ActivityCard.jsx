import React from 'react'
import styles from './ActivityCard.module.css';

const ActivityCard = (props) => {
  return (
    <>
        <section className={styles.activity}>
            <div className={styles.activity__bg}>
                <div className={styles.activity__mask}>
                    <img src={props.image} alt="Image activity" />
                </div>
            </div>
            <div className={styles.activity__data}>
                <div>
                    <h2>{props.title}</h2>
                    <div className={styles.activity__nav}>
                        <span></span>
                        <span></span>
                        <span></span>                        
                    </div>                    
                </div>
                <div>
                    <p>{props.timeframe}hrs</p>
                    <span className={styles.last__week}>Last {props.currentTime} - {props.time}hrs</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default ActivityCard;
