import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                    src={logo}
                    alt="logo"/>
            </div>
            <div className="styles.loginBlock">
                {props.isAuth ? <div>{props.login}</div> : <NavLink to={'/login'} activeClassName={styles.active}>Login</NavLink>}
            </div>
        </header>
    )
}