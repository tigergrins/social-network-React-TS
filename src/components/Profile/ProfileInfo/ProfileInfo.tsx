import React from 'react';
import {ProfileStateType} from '../../../redux/profile-reducer';
import styles from './ProfileInfo.module.css';

type ProfileInfoType = {
    profile:  ProfileStateType | null
}

export function ProfileInfo(props: ProfileInfoType) {
    return (
            <section className={styles.profile}>
                <div className={styles.poster}>
                    <img src="https://cdn.pixabay.com/photo/2020/07/04/06/41/clouds-5368444_960_720.jpg" alt="poster"/>
                </div>
                <div className={styles.avatar}>
                    <img src={props.profile?.photos.small}
                         alt="avatar"/>
                </div>
                <div className={styles.about}>
                    <div className={styles.name}>{props.profile?.fullName}</div>
                    <div className={styles.description}>
                        <h3>Contacts</h3>
                        <ul>
                            <li>Github: {props.profile?.contacts.github}</li>
                            <li>VK: {props.profile?.contacts.vk}</li>
                            <li>Facebook: {props.profile?.contacts.facebook}</li>
                            <li>Instagram: {props.profile?.contacts.instagram}</li>
                            <li>Website: {props.profile?.contacts.website}</li>
                        </ul>
                    </div>
                </div>
            </section>
    )
}
