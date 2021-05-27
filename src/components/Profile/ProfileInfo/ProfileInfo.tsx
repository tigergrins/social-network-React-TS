import React from 'react';
import styles from './ProfileInfo.module.css';

export function ProfileInfo() {
    return (
            <section className={styles.profile}>
                <div className={styles.poster}>
                    <img src="https://cdn.pixabay.com/photo/2020/07/04/06/41/clouds-5368444_960_720.jpg" alt="poster"/>
                </div>
                <div className={styles.avatar}>
                    <img src="https://cdn.pixabay.com/photo/2012/10/10/10/36/moon-landing-60582_960_720.jpg"
                         alt="avatar"/>
                </div>
                <div className={styles.about}>
                    <div className={styles.name}>Daniel Smith</div>
                    <div className={styles.description}>
                        <ul>
                            <li>30.12.1993</li>
                            <li>Moscow</li>
                            <li>MGU</li>
                            <li>ds.com</li>
                        </ul>
                    </div>
                </div>
            </section>
    )
}