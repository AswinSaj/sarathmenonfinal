'use client'
import React, { useEffect, useState } from 'react'
import styles from './PhotoGroup.module.css'

const PhotoGroup = ({ photoGroup, photos }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{photoGroup}</h1>
      </div>
      <div className={styles.content}>
        {photos.map((item) => (
          <div key={item.id} className={styles.box}>
            <img src={item.path} alt={`${item.id}-${photoGroup}-img`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoGroup
