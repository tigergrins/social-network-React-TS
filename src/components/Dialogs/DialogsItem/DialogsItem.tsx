import React from 'react';
import styles from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';

type DialogsItemPropsType = {
    name: string,
    id: number
}

export const DialogsItem: React.FC<DialogsItemPropsType> = ({id, name}) => {
    let path = '/dialogs/' + id;

    return (
        <div className={styles.dialogue}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
};