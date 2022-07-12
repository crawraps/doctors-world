import * as React from 'react'
import styles from '../styles/Variant.module.css'
import Image from 'next/image'
import { usePatient } from '../context'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: 'adult' | 'kid'
  title: string
  image: string
  cards: string[]
  className?: string
}

function Variant({ type, title, image, cards, className = '', ...props }: Props): JSX.Element {
  const patient = usePatient().state.patient
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  // Calculate if description is open in mobile version
  React.useEffect(() => setIsOpen(patient === type), [type, patient])

  // Variant click handler
  const dispatch = usePatient().dispatch
  const onClickHandler = () => {
    if (isOpen) {
      dispatch({ type: 'setNull' })
    } else {
      dispatch({ type: type === 'adult' ? 'setAdult' : 'setKid' })
    }
  }

  return (
    <div className={styles.container + ' ' + className} onClick={onClickHandler} {...props}>
      <h3>{title}</h3>
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} width={300} height={300} />
      </div>
      <div className={styles.descriptionContainer + ' ' + (isOpen ? styles.descriptionOpen : '')}>
        {cards.map((text, index) => (
          <div className={styles.card} key={`${type}-card-${index}`}>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Variant)
