import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.link}>
                        <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink></li>
                    <li className={styles.link}>
                        <NavLink to='/dialogs' activeClassName={styles.active}>Messages</NavLink>
                    </li>
                    <li className={styles.link}>
                        <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
                    </li>
                    <li className={styles.link}>
                        <NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;