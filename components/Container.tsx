import styles from '../styles/Container.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean
  flex?: boolean
  padding?: boolean
  children?: JSX.Element | JSX.Element[]
  className?: string
}

export default function Container({
  fluid = false,
  flex = false,
  padding = false,
  children,
  className,
  ...props
}: Props): JSX.Element {
  return (
    <div
      className={
        styles.container +
        ' ' +
        (fluid ? styles.fluid + ' ' : '') +
        (flex ? styles.flex + ' ' : '') +
        (padding ? styles.padding + ' ' : '') +
        className
      }
      {...props}
    >
      {children}
    </div>
  )
}
