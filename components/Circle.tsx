import React from 'react'
import Image from 'next/image'
import { usePatient } from '../context'
import styles from '../styles/Circle.module.css'
import { CircleItem as CircleItemType } from '../assets/texts/CircleInfo'
import CircleItem from './CircleItem'

interface Props {
  children: CircleItemType[]
}

export default function Circle({ children }: Props): JSX.Element {
  // Get current patient
  const patient = usePatient().state.patient

  // Container ref for width and height using
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Check if it's mobile version
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  React.useEffect(() => setIsMobile(window.innerWidth <= 992), [])

  // Create items
  const [items, setItems] = React.useState<JSX.Element[]>([])

  // Calculate coords for items
  React.useEffect(() => {
    const width = containerRef.current?.offsetWidth ?? 0
    const height = containerRef.current?.offsetHeight ?? 0
    const x0 = width / 2
    const y0 = height / 2
    const r = 250
    const iconSize = 100

    setItems(
      children.map((child, index) => (
        <CircleItem
          {...child}
          style={{
            top: isMobile
              ? ''
              : y0 + r * Math.cos((2 * Math.PI * ((index + 4) % children.length)) / children.length) - iconSize / 2,
            left: isMobile
              ? ''
              : x0 + r * Math.sin((2 * Math.PI * ((index + 4) % children.length)) / children.length) - iconSize / 2,
            position: isMobile ? 'static' : 'absolute',
          }}
          key={`circle-item-${index}`}
        />
      ))
    )
  }, [children, containerRef, patient, isMobile])

  return (
    <>
      <span className={styles.question + ' ' + (!patient ? styles.hidden : '')}>
        Сообщает ли один из ваших пациентов о следующих симптомах?{' '}
        <span className={styles.scopes}>(нажмите на любую иконку и узнайте больше)</span>
      </span>

      <div className={styles.container + ' ' + (!patient ? styles.hidden : '')} ref={containerRef}>
        {!isMobile ? (
          <>
            <div className={styles.imageContainer}>
              <Image
                src={require(`../assets/images/${patient === 'adult' ? 'wooman' : 'kid'}.jpg`)}
                alt='patient'
                height={315}
                width={315}
              />
            </div>
            <div className={styles.imageOverflow} />
            <span className={styles.imageText}>{patient === 'adult' ? 'Взрослый' : 'Ребенок'}</span>
          </>
        ) : null}
        {items}
      </div>
    </>
  )
}
