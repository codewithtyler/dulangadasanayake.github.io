'use client'

import Image from 'next/image'
import config from '@/config.json'

export default function Sidebar() {
    return (
        <aside className="sidebar" data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <Image
                        src={config.personal.avatar}
                        alt={config.personal.name}
                        width={150}
                        height={150}
                        className="profile-pic"
                    />
                </figure>

                <div className="info-content">
                    <h1 className="name">{config.personal.name}</h1>
                    <p className="title">{config.personal.title}</p>
                </div>
            </div>

            <div className="sidebar-social">
                {Object.entries(config.social).map(([platform, url]) => (
                    <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        <i className={`icon-${platform}`}></i>
                    </a>
                ))}
            </div>
        </aside>
    )
} 