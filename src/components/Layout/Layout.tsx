import styles from './Layout.module.scss'

import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Layout = (props: Props) => {
  const { children } = props

  return (
    <div className={styles.layoutContainer}>
      <header className={styles.layoutContainer__header}>
        Layout
      </header>
      <main className={styles.layoutContainer__main}>
        {children}
      </main>
    </div>
  )
}

export default Layout
