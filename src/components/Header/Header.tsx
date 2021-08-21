import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                    src={logo}
                    alt="logo"/>
            </div>
        </header>
    )
}