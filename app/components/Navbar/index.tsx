'use client'

import React from 'react'
import styles from './styles.module.css'
import type { NavbarProps } from '@/types/components'

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'resume', label: 'Resume' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                {navItems.map(item => (
                    <li key={item.id}>
                        <button
                            className={`${styles.navbarLink} ${activeSection === item.id ? styles.active : ''}`}
                            onClick={() => onSectionChange(item.id)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
} 