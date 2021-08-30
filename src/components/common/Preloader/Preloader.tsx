import React from 'react';
import styles from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.gif';

type PreloaderPropsType = {
}

export const Preloader = (props: PreloaderPropsType) => {
    return  <div className={styles.preloader}><img  src={preloader} alt="preloader"/></div>
}