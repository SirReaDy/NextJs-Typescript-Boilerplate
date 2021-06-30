import classNames from 'classnames'
import Head from 'next/head'
import React from 'react'

import styles from './Loader.module.scss'

const Loader = () => (
  <div className={styles.loaderContainer}>
    <Head>
      <title key="title">Loading...</title>
    </Head>
    <div className={classNames(styles.loaderContainer__title, 'strong')}>Loading...</div>
    <div className={classNames(styles.loaderContainer__description, 'p-description strong')}>
      Content will load in a few seconds
    </div>
  </div>
)

export default Loader
