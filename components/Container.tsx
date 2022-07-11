import styles from '../styles/Container.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean
  flex?: boolean
  padding?: boolean
  children?: JSX.Element | JSX.Element[]
}

export default function Container({
  fluid = false,
  flex = false,
  padding = false,
  children,
  ...props
}: Props): JSX.Element {
  return (
    <div
      className={`${styles.container} ${fluid ? styles.fluid : ''} ${flex ? styles.flex : ''} ${
        padding ? styles.padding : ''
      }`}
      {...props}
    >
      {children}
    </div>
  )
}
