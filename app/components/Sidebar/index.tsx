'use client'

import React from 'react'
import Image from 'next/image'
import config from '@/config.json'
import styles from './styles.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar} data-sidebar>
            <div className={styles.sidebarInfo}>
                <figure className={styles.avatarBox}>
                    <Image
                        src={config.personal.avatar}
                        alt={config.personal.name}
                        width={150}
                        height={150}
                        className={styles.profilePic}
                    />
                </figure>

                <div className={styles.infoContent}>
                    <h1 className={styles.name}>{config.personal.name}</h1>
                    <p className={styles.title}>{config.personal.title}</p>
                </div>
            </div>

            <div className={styles.sidebarSocial}>
                {Object.entries(config.social).map(([platform, url]) => (
                    <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <i className={`icon-${platform}`}></i>
                    </a>
                ))}
            </div>
        </aside>
    )
} 