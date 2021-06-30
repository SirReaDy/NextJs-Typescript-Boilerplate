import styles from './Br.module.scss'

import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Br = (props: Props) => {
  const { children } = props

  return (
    <div className={styles.br}>
      {children}
    </div>
  )
}

export default Br
