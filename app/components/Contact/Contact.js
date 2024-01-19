import React from 'react'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <div className={styles.contactContainer} id='contact'>
      <div className={styles.contactWrapper}>
        <div className={styles.contactContent}>
          <div className={styles.heading}>Let&apos;s work together</div>
          <div className={styles.subHeading}>
            <a
              href='https://www.instagram.com/sarathmenonfilms/'
              target='_blank'
            >
              Instagram
            </a>
          </div>
          <div className={styles.subHeading}>
            <a href='mailto:sarathmenonfilms@gmail.com'>
              sarathmenonfilms@gmail.com
            </a>
          </div>
          <div className={styles.subHeading}>
            <a href='tel:+917387000371'>+91 7387000371</a>
          </div>
        </div>
        <div className={styles.contactPhoto}></div>
      </div>
    </div>
  )
}

export default Contact
