import Image from 'next/image'
import React from 'react'
import styles from '../styles/CircleItem.module.css'

interface Props {
  image: string
  description: string
  type: 'top' | 'right' | 'left' | 'bottom'
  className?: string
  style?: React.CSSProperties
}

function CircleItem({ image, description, type, className = '', style = {} }: Props): JSX.Element {
  return (
    <button className={styles.container + ' ' + styles[type] + ' ' + className} style={style}>
      <div className={styles.imageContainer}>
        <Image src={image} alt='circle item' width={100} height={100} />
      </div>
      <span className={styles.desc}>{description}</span>
    </button>
  )
}

export default React.memo(CircleItem)
