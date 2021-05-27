import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                    src="https://www.flaticon.com/svg/vstatic/svg/4652/4652639.svg?token=exp=1620731325~hmac=a3c717ebb0ef3021fea7a21f9ce709a8"
                    alt="logo"/>
            </div>
        </header>
    )
}