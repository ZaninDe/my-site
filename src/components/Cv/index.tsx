import Header from '../Header';

import cv from './cv.png';

import styles from './styles.module.scss';

export default function Cv() {
  return(
    <>
    <Header />
    <div className={styles.container}>
      <img src={cv} alt=""/>
    </div>
    </>
  )
}